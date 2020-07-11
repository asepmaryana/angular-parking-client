import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fare } from '../models/fare';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class FareService {

  constructor(private http: HttpClient) { }

  getFares(): Observable<Fare[]> {
    return this.http.get<Fare[]>(API_URL + '/api/fares')
  }

  getFare(id: number): Observable<Fare> {
    return this.http.get<Fare>(API_URL + '/api/fare/'+id)
  }

  store(fare: Fare) {
    return this.http.post(API_URL + '/api/fare', fare)
  }

  update(fare: Fare) {
    return this.http.put(API_URL + '/api/fare', fare)
  }

  delete(id: number) {
    return this.http.delete(API_URL + '/api/fare/'+id)
  }
}
