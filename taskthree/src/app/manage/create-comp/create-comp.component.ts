import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { UserData } from 'src/app/data';
@Component({
  selector: 'app-create-comp',
  templateUrl: './create-comp.component.html',
  styleUrls: ['./create-comp.component.css']
})
export class CreateCompComponent implements OnInit {
  fname: string;
  lname: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
  id: string;
  usersList: UserData[];
  constructor(private usersService: UserService) {}
  AddUser() {
    this.usersService
      .createUser({
        firstName: this.fname,
        lastName: this.lname,
        login: this.login,
        age: this.age,
        password: this.password
      })
      .subscribe(
        result => {
          console.log('Result: Create User API - ', result);
          window.location.reload();
        },
        error => {
          console.log('Error: Create User API - ', error);
        },
        () => {
          console.log('Complete: Create User API');
        }
      );
  }
  ngOnInit(): void {}
}
