import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-details-comp',
  templateUrl: './details-comp.component.html',
  styleUrls: ['./details-comp.component.css']
})
export class DetailsCompComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private usersService: UserService
  ) {}

  ngOnInit(): void {
    const idParam = +this.route.snapshot.params['id'];

    this.user = this.usersService.users.find(u => u.id === idParam);

    this.route.params.subscribe(param => {
      this.user = this.usersService.users.find(u => u.id === +param['id']);
    });
  }
}
