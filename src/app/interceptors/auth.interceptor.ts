import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service'; // Import your authentication service here
import { UserClass } from '../classes/user.class';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = UserClass.getUser().accessToken;

    if (accessToken) {
      request = this.addAuthorizationHeader(request, accessToken);
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !request.headers.get('retry')) {
          return this.handle401Error(request, next);
        }
        return throwError(error);
      })
    );
  }

  private addAuthorizationHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return request.clone({ headers });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.authService.refreshToken()).pipe(
      switchMap((newToken: string) => {
        request = this.addAuthorizationHeader(request, newToken);
        return next.handle(request);
      }),
      catchError((error: any) => {
        UserClass.disconnect();
        this.router.navigate(['/login']); // Handle refresh token error or redirect to login
        return throwError(error);
      })
    );
  }
}
