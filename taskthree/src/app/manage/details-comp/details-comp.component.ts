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
    this.route.params.subscribe(param => {
      this.user = this.usersService.getUser(param['id']).subscribe(
        data => {
          this.user = data;
          console.log(data);
          console.log(this.user);
        },
        err => {
          console.log(err);
        },
        () => {
          console.log('Completed');
        }
      );
    });
  }
}
