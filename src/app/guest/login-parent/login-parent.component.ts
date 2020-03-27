import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, Validators} from '@angular/forms';
import {ParentCredentials} from '../../models/parent-credentials';

class LoginParentForm {
  email = new FormControl(null, Validators.required);
  password = new FormControl(null, Validators.required);
}

@Component({
  selector: 'app-login-parent',
  templateUrl: './login-parent.component.html',
  styleUrls: ['./login-parent.component.css']
})
export class LoginParentComponent implements OnInit {
  form: LoginParentForm;

  constructor(
    private authService: AuthService
  ) {
  }

  login() {
    const credentials = this.getParentCredentials();
    if (credentials) {
      this.authService.loginParent(credentials);
    }
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = new LoginParentForm();
  }

  private getParentCredentials(): ParentCredentials {
    if (this.isFormValid()) {
      return new ParentCredentials(
        this.form.email.value,
        this.form.password.value
      );
    }
  }

  private isFormValid(): boolean {
    return this.form.email.valid &&
      this.form.password.valid;
  }
}
