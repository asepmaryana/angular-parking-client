import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class StatistikService {

  constructor(private http: HttpClient) { }

  fetch(): Observable<any> {
    return this.http.get(API_URL+'/api/statistik')
  }
}
