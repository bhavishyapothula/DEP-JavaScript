import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { UserData } from 'src/app/data';
import {
  ValidatorFn,
  AbstractControl,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-comp',
  templateUrl: './edit-comp.component.html',
  styleUrls: ['./edit-comp.component.css']
})
export class EditCompComponent implements OnInit {
  currentUser;
  userId;

  updateForm: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      this.passwordValidator(
        new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ).bind(this)
    ]),
    age: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngDoCheck() {
    console.log('Reactive Form Changes');
  }

  ngOnInit(): void {
    this.updateForm.valueChanges.subscribe(changes => {
      console.log('Update Form valueChanges ', changes);
    });

    this.updateForm.statusChanges.subscribe(status => {
      console.log('Update Form statusChanges ', status, this.updateForm);
    });

    this.route.params.subscribe(param => {
      this.userId = param['id'];
      this.userService.getUser(param['id']).subscribe(
        result => {
          this.currentUser = result;
          this.updateForm.setValue({
            password: this.currentUser.password,
            age: this.currentUser.age
          });
          console.log('Result: Get User API - ', result);
        },
        error => {
          console.log('Error: Get User API - ', error);
        },
        () => {
          console.log('Complete: Get User API');
        }
      );
    });
  }

  updateUser() {
    this.userService
      .updateUser({
        ...this.updateForm.value,
        id: this.userId
      })
      .subscribe(
        result => {
          console.log('Result: Create User API - ', result);
          this.updateForm.reset();
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

  passwordValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const testMatch = nameRe.test(control.value);
      return testMatch
        ? null
        : { requireOneCharOneNumber: { value: control.value } };
    };
  }
}
