import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mergeMap, tap } from 'rxjs/operators';
import { UserService } from '../user.service';
<<<<<<< HEAD
import { CustomValidators } from './custom-validator'
=======
import { CustomValidators } from './custom-validators'

>>>>>>> eb52c9df40334add5289f8c04ae574c2654b8856
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLogged;
  mainForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.onInitForm();
<<<<<<< HEAD
=======

>>>>>>> eb52c9df40334add5289f8c04ae574c2654b8856
  }

  onSubmit() {
    let email = this.mainForm.value.email;
    let username = this.mainForm.value.username;
    let password = this.mainForm.value.passwords.password;
    this.userService.register(email, password, username).pipe(
      mergeMap(data => {
        return this.userService.login(email, password);
      })
    ).subscribe();
  }

  private onInitForm(): void {
    this.mainForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.email]),
      'username': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'passwords': new FormGroup({
        'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
        'repeatPassword': new FormControl(null, [Validators.required], [CustomValidators.passwordConforming.bind(this)]),
      }),
    })
  }
}
