import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + '/api/users')
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(API_URL + '/api/user/'+id)
  }

  store(user: User) {
    return this.http.post(API_URL + '/api/user', user)
  }

  update(user: User) {
    return this.http.put(API_URL + '/api/user', user)
  }

  delete(id: string) {
    return this.http.delete(API_URL + '/api/user/'+id)
  }

}
