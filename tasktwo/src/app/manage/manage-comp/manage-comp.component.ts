import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-comp',
  templateUrl: './manage-comp.component.html',
  styleUrls: ['./manage-comp.component.css']
})
export class ManageCompComponent implements OnInit {
  usersList = [];

  constructor(private usersService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.usersList = this.usersService.users;
  }
  showDetails(id) {
    this.router.navigate(['manage', id]);
  }
}
