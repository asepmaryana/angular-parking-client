import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CheckoutService } from "../services/checkout.service";
import swal from 'sweetalert2'
import * as moment from 'moment'
import { Trx } from '../models/trx';

declare var $: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  plat_number: string;
  resp: any = {success: false, message:'', data: {plat_number:'', vehicle:'', checked_in:'', checked_out:'', amount:0}};
  crit: any = {vehicle_id: '', date: moment().format('YYYY-MM-DD')};
  page: any = '1';
  size: any = '10';
  rows: Trx[] = [];

  @ViewChild('ddate') ddate: ElementRef;

  constructor(private coService: CheckoutService) { }

  ngOnInit(): void {
    this.plat_number = '';
    this.crit = {vehicle_id: '', date: moment().format('YYYY-MM-DD')};
    $(function(){
      $('#tanggal').datepicker({toggleActive: true, format: "yyyy-mm-dd", autoclose: true, todayHighlight: true, onSelect: text => this.crit.date = text});
    });
    setTimeout(() => { this.getCheckOut('1') }, 500);
  }

  onCheckOut() {
    if (this.plat_number == '') {
      swal.fire({icon: 'error', title:'Error', text: 'Plat Nomor harus diisi !', timer: 2000})
    }
    else {
      this.coService.checkOut(this.plat_number).subscribe(
        data => {
          this.resp = data
          swal.fire({icon: 'success', title:'Berhasil', text: this.plat_number+' berhasil check out', timer: 2000})
          this.plat_number = ''
          this.getCheckOut('1')
        },
        error => {
          this.resp = {success: false, message:'', data: {plat_number:'', vehicle:'', checked_in:'', checked_out:'', amount:0}}
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

  getCheckOut(page) {
    this.page = page;
    this.crit.date = this.ddate.nativeElement.value;
    this.coService.getCheckOut(this.crit).subscribe(
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

  print() {
    var mode = 'iframe';
    var close = mode == "popup";
    $("#printTiket").printArea({mode: mode, popClose: close});
  }

}
