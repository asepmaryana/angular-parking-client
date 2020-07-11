import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TrxResponse } from 'src/app/models/trx-response';
import { ReportService } from 'src/app/services/report.service';
import swal from 'sweetalert2'
import * as moment from 'moment'

const API_URL = environment.apiUrl

declare var $: any;

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  from: string;
  to: string;
  result: TrxResponse = new TrxResponse();

  @ViewChild('sd') sdate: ElementRef;
  @ViewChild('ed') edate: ElementRef;

  constructor(private rptService: ReportService) { }

  ngOnInit(): void {
    this.from = moment().format('YYYY-MM-DD');
    this.to = moment().format('YYYY-MM-DD');
    $(function(){
      $('#from').datepicker({toggleActive: true, format: "yyyy-mm-dd", autoclose: true, todayHighlight: true, onSelect: text => this.date = text});
      $('#to').datepicker({toggleActive: true, format: "yyyy-mm-dd", autoclose: true, todayHighlight: true, onSelect: text => this.date = text});
    });
  }

  getReport() {
    this.from = this.sdate.nativeElement.value;
    this.to = this.edate.nativeElement.value;
    console.log('getReport')
    this.rptService.getRecapitulation(this.from, this.to).subscribe(
      data => {
        this.result = data
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
    this.from = this.sdate.nativeElement.value;
    this.to = this.edate.nativeElement.value;
    window.open(API_URL + '/api/export/recap/'+this.from+'/'+this.to)
  }

}
