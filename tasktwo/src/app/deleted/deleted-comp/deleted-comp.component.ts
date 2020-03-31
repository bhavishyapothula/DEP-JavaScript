import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleted-comp',
  templateUrl: './deleted-comp.component.html',
  styleUrls: ['./deleted-comp.component.css']
})
export class DeletedCompComponent implements OnInit {
  usersList = [];

  constructor(private usersService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.usersList = this.usersService.users;
  }
}
