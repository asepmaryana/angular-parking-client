import { Component, OnInit } from '@angular/core';
import { StatistikService } from '../services/statistik.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  statistik: any = {bike_in: 0, bike_out: 0, car_in: 0, car_out: 0}

  constructor(private statService: StatistikService) { }

  ngOnInit(): void {
    this.statService.fetch().subscribe(
      data => {
        //alert(JSON.stringify(data))
        this.statistik = data
      }
    )
  }

}
