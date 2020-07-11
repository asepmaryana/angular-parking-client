import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Role } from "src/app/models/role";
import { UserService } from 'src/app/services/user.service';
import { RoleService } from "src/app/services/role.service";
import swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User = new User();
  roles: Role[] = [];

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRoles()
  }

  getRoles() {
    this.roleService.getRoles().subscribe(
      data => {
        this.roles = data
      }
    )
  }

  onSubmit() {
    //console.log(this.user)
    this.userService.store(this.user).subscribe(
      data => {
        swal.fire({
          icon: 'success',
          title: 'Info',
          text: 'User berhasil dibuat',
          timer: 5000
        })
        this.router.navigate(['/user'])
      },
      error => {
        swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
          timer: 5000
        })
      }
    )
  }
}
