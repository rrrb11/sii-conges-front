import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserAuth } from '../models/user-auth';
import axios from 'axios';
import { UserClass } from '../classes/user.class';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { User as UserModel } from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}
    
  isAuthenticated = () => {
    let user = '{}' as UserModel;
    if (isPlatformBrowser(this.platformId)) {
      user = UserClass.getUser();
    }
    if (!(Object.keys(user).length === 0)) {
      return true;
    }
    return false;
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
