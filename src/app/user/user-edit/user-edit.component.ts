import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Role } from "src/app/models/role";
import { UserService } from 'src/app/services/user.service';
import { RoleService } from "src/app/services/role.service";
import swal from 'sweetalert2'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id: string;
  user: User;
  roles: Role[] = [];

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user = new User()
    this.id = this.route.snapshot.params['id']
    this.getRoles()
    this.getUser()
  }

  getUser() {
    this.userService.getUser(this.id).subscribe(
      data => {
        this.user = data
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

  getRoles() {
    this.roleService.getRoles().subscribe(
      data => {
        this.roles = data
      }
    )
  }

  onSubmit() {
    console.log(this.user)
  }
}
