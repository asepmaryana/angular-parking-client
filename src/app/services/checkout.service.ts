import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Checkout } from '../models/checkout';
import { environment } from 'src/environments/environment';
import { Trx } from '../models/trx';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  checkOut(plat_number): Observable<Checkout> {
    return this.http.post<Checkout>(API_URL + '/api/trx/checkout', {plat_number: plat_number})
  }

  getCheckOut(crit): Observable<Trx[]> {
    return this.http.get<Trx[]>(API_URL + '/api/trx/checkout/list?vehicle_id='+crit.vehicle_id+'&date='+crit.date)
  }

}
