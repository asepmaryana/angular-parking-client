import { Component, OnInit } from '@angular/core';
import { Fare } from "../../models/fare";
import { FareService } from "../../services/fare.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-fare-list',
  templateUrl: './fare-list.component.html',
  styleUrls: ['./fare-list.component.css']
})
export class FareListComponent implements OnInit {

  fares: Fare[]

  constructor(private fareService: FareService, private router: Router) { }

  ngOnInit(): void {
    this.getFares()
  }

  getFares() {
    this.fareService.getFares().subscribe(
      data => {
        //console.log(data)
        this.fares = data
      }
    )
  }

  editFare(id: number) {
    this.router.navigate(['/fare/edit/'+id])
  }

  deleteFare(id: number) {
    alert('anda akan delete ? '+id)
  }
}
