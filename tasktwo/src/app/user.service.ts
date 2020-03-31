import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;

  users = [
    {
      id: 1,
      firstName: 'User',
      lastName: 'One',
      age: 20,
      login: 'bh',
      password: '27',
      isDeleted: true
    },

    {
      id: 2,
      firstName: 'User',
      lastName: 'Two',
      age: 18,
      login: 'ke',
      password: '13',
      isDeleted: false
    },

    {
      id: 3,
      firstName: 'User',
      lastName: 'Three',
      age: 47,
      login: 'su',
      password: '16',
      isDeleted: false
    },

    {
      id: 4,
      firstName: 'User',
      lastName: 'Four',
      age: 41,
      login: 'ma',
      password: '03',
      isDeleted: true
    },

    {
      id: 5,
      firstName: 'User',
      lastName: 'five',
      age: 98,
      login: 'us',
      password: '05',
      isDeleted: true
    }
  ];

  constructor() {}
}
