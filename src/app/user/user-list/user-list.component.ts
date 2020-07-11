import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from "../../services/user.service";
import swal from 'sweetalert2'
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  current: User;

  constructor(private userService: UserService, private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    this.current = this.tokenService.getUser()
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data
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
