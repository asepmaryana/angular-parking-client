import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(API_URL + '/api/vehicles')
  }

  public store(vehicle: Vehicle) {
    return this.http.post(API_URL + '/api/vehicle', vehicle)
  }

  public find(id: any): Observable<Vehicle> {
    return this.http.get<Vehicle>(API_URL + '/api/vehicle/'+id)
  }

  public update(vehicle: Vehicle) {
    return this.http.put(API_URL + '/api/vehicle', vehicle)
  }

  public remove(id: any) {
    return this.http.delete(API_URL + '/api/vehicle/'+id)
  }
}
