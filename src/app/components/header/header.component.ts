import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { User } from "../../models/user";
import swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User

  constructor(private tokenService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser()

  }

  logout() {
    swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: 'Apakah anda akan keluar ?',
      showCancelButton: true,
      confirmButtonColor: '#ff0000',
      cancelButtonColor:'#049F0C',
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak'
    })
    .then((result) => {
      if (result.value) {
        console.log('logout')
        this.tokenService.signOut()
        window.location.href = '/'
      }
    })
  }

}
