import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Trx } from "../../models/trx";
import { ReportService } from "../../services/report.service";
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/models/vehicle';
import swal from 'sweetalert2'
import * as moment from 'moment'
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl

declare var $: any;

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  date: string;
  vehicle_id: any = '_';
  vehicles: Vehicle[];
  rows: Trx[] = [];

  @ViewChild('dd') ddate: ElementRef;

  constructor(private rptService: ReportService, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.date = moment().format('YYYY-MM-DD');
    $(function(){
      $('#tanggal').datepicker({toggleActive: true, format: "yyyy-mm-dd", autoclose: true, todayHighlight: true, onSelect: text => this.date = text});
    });
    this.getVehicles();
  }

  getVehicles() {
    this.vehicleService.findAll().subscribe(
      data => {
        this.vehicles = data
      }
    )
  }

  getReport() {
    this.date = this.ddate.nativeElement.value
    this.rptService.getDaily(this.date, this.vehicle_id).subscribe(
      data => {
        this.rows = data
      },
      error => {
        swal.fire({
          icon: 'error',
          title: 'Kesalahan',
          text: error.message
        })
      }
    )
  }

  getExport() {
    this.date = this.ddate.nativeElement.value
    window.open(API_URL + '/api/export/daily/'+this.date+'/'+this.vehicle_id)
  }
}
