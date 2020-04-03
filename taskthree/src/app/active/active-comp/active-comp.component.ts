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
    req;
    constructor(private usersService: UserService, private router: Router) {}

    ngOnInit(): void {
        //this.usersList = this.usersService.users;
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
    makePassive(updateid) {
        this.req = this.usersService
            .updateUser({
                id: updateid,
                isDeleted: true
            })
            .subscribe(
                result => {
                    console.log('Result: Update User API - ', result);
                    window.location.reload();
                },
                error => {
                    console.log('Error: Update User API - ', error);
                },
                () => {
                    console.log('Complete: Update User API');
                }
            );
    }
}
