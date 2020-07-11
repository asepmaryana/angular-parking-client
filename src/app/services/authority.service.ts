import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authority } from '../models/authority';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthorityService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Authority[]> {
    return this.http.get<Authority[]>(API_URL+'/api/authority/lists')
  }

}
