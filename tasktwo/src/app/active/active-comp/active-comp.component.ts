import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-active-comp',
  templateUrl: './active-comp.component.html',
  styleUrls: ['./active-comp.component.css']
})
export class ActiveCompComponent implements OnInit {
  usersList = [];

  constructor(private usersService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.usersList = this.usersService.users;
  }
}
