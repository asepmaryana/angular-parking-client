import { Component, OnInit } from '@angular/core';
import { VehicleService } from "../../services/vehicle.service";
import { Observable } from 'rxjs';
import { Vehicle } from "../../models/vehicle";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[]

  constructor(private service: VehicleService) { }

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData() {
    this.service.findAll().subscribe(
      data => {
        this.vehicles = data
      }
    )
  }

}
