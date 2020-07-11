import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Role } from "src/app/models/role";
import { UserService } from 'src/app/services/user.service';
import { RoleService } from "src/app/services/role.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User = new User();
  roles: Role[] = [];

  constructor(private userService: UserService, private roleService: RoleService) { }

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

  }
}
