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
        this.usersService.getUsers().subscribe(
            result => {
                this.usersList = result as any;
                console.log('Result: Get Users API - ', result);
            },
            error => {
                console.log('Error: Get Users API - ', error);
            },
            () => {
                console.log('Complete: Get Users API');
            }
        );
    }
    showDetails(id) {
        this.router.navigate(['manage', id]);
    }
    createUser() {
        this.router.navigate(['manage', 'create']);
    }
    editDetails(id) {
        this.router.navigate(['manage/edit', id]);
    }
}
