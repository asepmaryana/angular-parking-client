import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { environment } from 'src/environments/environment';
import { Trx } from '../models/trx';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  constructor(private http: HttpClient) { }

  checkIn(data): Observable<Response> {
    return this.http.post<Response>(API_URL + '/api/trx/checkin', data)
  }

  getCheckIn(crit): Observable<Trx[]> {
    return this.http.get<Trx[]>(API_URL + '/api/trx/checkin/list?vehicle_id='+crit.vehicle_id+'&date='+crit.date)
  }

}
