import { User as UserModel } from "../models/user";

export class UserClass {
    static setUser = (user: UserModel) => {
        UserClass.disconnect()
        localStorage.setItem('user', JSON.stringify(user));
    }

    static setAccessToken = (accessToken: string) => {
        const user: UserModel = UserClass.getUser()
        user.accessToken = accessToken;
        localStorage.setItem('user', JSON.stringify(user));
    }

    static setRefreshToken = (refreshToken: string) => {
        const user: UserModel = UserClass.getUser()
        user.refreshToken = refreshToken;
        localStorage.setItem('user', JSON.stringify(user));
    }

    static isConnected = () => {

    }

    static getUser: () => UserModel = () => {
        return JSON.parse(localStorage.getItem('user') || '{}');
    }

    static disconnect = () => {
        localStorage.removeItem('user');
    }
}
