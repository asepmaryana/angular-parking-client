import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

const TOKEN_KEY = environment.tokenKey
const USER_KEY = environment.userKey

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public saveToken(token: string) {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.setItem(TOKEN_KEY, token)
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY)
  }

  public saveUser(user) {
    localStorage.removeItem(USER_KEY)
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  public getUser() {
    return JSON.parse(localStorage.getItem(USER_KEY))
  }

  signOut() {
    localStorage.clear()
  }
}
