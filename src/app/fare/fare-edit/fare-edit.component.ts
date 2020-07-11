import { Component, OnInit } from '@angular/core';
import { Fare } from 'src/app/models/fare';
import { FareService } from 'src/app/services/fare.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-fare-edit',
  templateUrl: './fare-edit.component.html',
  styleUrls: ['./fare-edit.component.css']
})
export class FareEditComponent implements OnInit {
  id: number;
  fare: Fare;

  constructor(private fareService: FareService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fare = new Fare()
    this.id = this.route.snapshot.params['id']
    this.getFare()
  }

  onSubmit() {
    delete(this.fare.vehicle)
    this.fareService.update(this.fare).subscribe(
      data => {
        swal.fire({
          icon: 'success',
          title: 'Info',
          text: 'Tarif berhasil diubah',
          timer: 2000
        })
        this.router.navigate(['/fare'])
      },
      (error) => {
        swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
          timer: 2000
        })
      }
    )
  }

  onCancel() {
    this.router.navigate(['/fare'])
  }

  getFare() {
    this.fareService.getFare(this.id).subscribe(
      data => {
        console.log(data)
        this.fare = data
      }
    )
  }
}
