import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Checkin } from "../models/checkin";
import { CheckinService } from "../services/checkin.service";
import swal from 'sweetalert2'
import * as moment from 'moment'
import { Trx } from '../models/trx';

declare var $: any;

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  data: any = {vehicle_id: '2', plat_number: ''};
  crit: any = {vehicle_id: '', date: moment().format('YYYY-MM-DD')};
  page: any = '1';
  size: any = '10';
  rows: Trx[] = [];

  @ViewChild('ddate') ddate: ElementRef;

  constructor(private ciService: CheckinService) { }

  ngOnInit(): void {
    this.crit = {vehicle_id: '', date: moment().format('YYYY-MM-DD')};
    $(function(){
      $('#tanggal').datepicker({toggleActive: true, format: "yyyy-mm-dd", autoclose: true, todayHighlight: true, onSelect: text => this.crit.date = text});
    });
    setTimeout(() => { this.getCheckin('1'); }, 500);
  }

  onCheckIn() {
    console.log(this.data)
    if (this.data.plat_number == '') {
      swal.fire({icon: 'error', title:'Error', text: 'Plat Nomor harus diisi !', timer: 2000})
    }
    else {
      this.ciService.checkIn(this.data).subscribe(
        data => {
          swal.fire({icon: 'success', title:'Berhasil', text: this.data.plat_number+' berhasil check in', timer: 2000})
          this.data = {vehicle_id: '2', plat_number: ''};
          this.getCheckin('1');
        },
        error => {
          console.log(error)
          swal.fire({
            icon: 'error',
            title: 'Error',
            text: (error.status == 400) ? error.error.message : error.message
          })
        }
      )
    }
  }

  getCheckin(page) {
    this.page = page;
    this.crit.date = this.ddate.nativeElement.value;
    this.ciService.getCheckIn(this.crit).subscribe(
      data => {
        this.rows = data
      },
      error => {
        swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message
        })
      }
    )
  }
}
