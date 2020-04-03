import { UserData } from './data';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    currentUser = '';

    userChanged: EventEmitter<string> = new EventEmitter();

    constructor(private http: HttpClient) {}
    getUsers() {
        return this.http.get<any[]>('http://localhost:8080/users');
    }
    getUser(id: string) {
        return this.http.get('http://localhost:8080/users/' + id);
    }

    createUser(user: Partial<UserData>) {
        return this.http.post('http://localhost:8080/users', user);
    }
    updateUser(user: Partial<UserData>) {
        return this.http.put('http://localhost:8080/users/' + user.id, {
            password: user.password,
            age: user.age,
            isDeleted: user.isDeleted
        });
    }
}
