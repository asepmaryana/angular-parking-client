import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trx } from '../models/trx';
import { environment } from 'src/environments/environment';
import { TrxResponse } from '../models/trx-response';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getDaily(date: string, vehicle_id: any): Observable<Trx[]> {
    return this.http.get<Trx[]>(API_URL + '/api/report/daily/'+date+'/'+vehicle_id)
  }

  getRecapitulation(from: string, to: string): Observable<TrxResponse> {
    return this.http.get<TrxResponse>(API_URL + '/api/report/recap/'+from+'/'+to)
  }

}
