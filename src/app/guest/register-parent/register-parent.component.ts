import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {RegisterParentData} from '../../models/register-parent-data';

@Component({
  selector: 'app-register-parent',
  templateUrl: './register-parent.component.html',
  styleUrls: ['./register-parent.component.css']
})
export class RegisterParentComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  register() {
    const data = this.getRegisterParentData();
    this.authService.registerParent(data).subscribe(
      value => this.handleResult(),
      error => this.handleError(error)
    );
  }

  ngOnInit() {

  }

  private getRegisterParentData(): RegisterParentData {
    return new RegisterParentData(
      this.form.get('name').value,
      this.form.get('email').value,
      this.form.get('password').value
    );
  }

  private handleResult() {
    this.authService.refreshCurrUserRole();
  }

  private handleError(error) {
    console.log(error);
    // todo zaimplementować obsługę błędów
  }
}
