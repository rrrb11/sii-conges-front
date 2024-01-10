import { AuthService } from './../services/auth.service';
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const ConnectedGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if(auth.isAuthenticated()) {
        router.navigateByUrl('/')
        return false
    }
    return true
}