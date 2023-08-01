import { ENV } from "@/utils/constants";
import jwtDecode from "jwt-decode";

export class Token {
    setToken(token) {
        localStorage.setItem(ENV.TOKEN, token);
    }

    getToken() {
        return localStorage.getItem(ENV.TOKEN)
    }

    removeToken() {
        localStorage.removeItem(ENV.TOKEN)
    }

    hasExpired(token) {
        const tokenDecode = jwtDecode(token)
        const expireDate = tokenDecode.exp * 1000;
        const currentDay = new Date().getTime()

        if(currentDay > expireDate) {
            return true
        }

        return false
    }


}