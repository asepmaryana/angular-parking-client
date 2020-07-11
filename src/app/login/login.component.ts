import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { TokenStorageService } from "../services/token-storage.service";
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {}
  isLoggedIn = false
  isLoginFailed = false
  errorMessage = ''
  errors: any = {}
  returnUrl: string

  constructor(private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || ''
    if (this.tokenStorage.getToken() != null) {
      this.isLoggedIn = true
      this.router.navigate([this.returnUrl])
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        //console.log(data)
        this.tokenStorage.saveToken(data.token)
        this.tokenStorage.saveUser(data.user)
        this.isLoginFailed = false
        this.isLoggedIn = true
        this.router.navigate([this.returnUrl])
      },
      err => {
        //console.log(err)
        this.errors = err.error
        this.errorMessage = err.error.message
        this.isLoginFailed = true
      }
    )
  }

}
