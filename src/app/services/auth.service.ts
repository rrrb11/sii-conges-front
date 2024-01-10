import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserAuth } from '../models/user-auth';
import axios from 'axios';
import { UserClass } from '../components/classes/user.class';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}
    
  // login(email:string, password:string ) {
  //     return this.http.post<User>('/api/login', {email, password});
  //         // this is just the HTTP call, 
  //         // we still need to handle the reception of the token
  //         // .shareReplay();
  // }
  isAuthenticated = () => {
    return true;
  }

  refreshToken = async () => {
    try {
      const refreshToken = UserClass.getUser().refreshToken;
      const response = await axios.post(environment.apiUrl + '/refreshtoken', { refreshToken });
      const { accessToken } = response.data;
      UserClass.setAccessToken(accessToken);
      return accessToken;
    } catch (error) {
        console.error(error);
    }
  }
  
  login = (data: UserAuth) => {
    try {
        return axios.post(environment.apiUrl + '/login', data);
    } catch (error) {
        console.error(error);
        return null;
    }
  }
  
}
