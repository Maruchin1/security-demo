import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {LoginParentData} from '../../models/login-parent-data';

@Component({
  selector: 'app-login-parent',
  templateUrl: './login-parent.component.html',
  styleUrls: ['./login-parent.component.css']
})
export class LoginParentComponent implements OnInit {
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  login() {
    const data = this.getLoginParentData();
    this.authService.loginParent(data).subscribe(
      value => this.handleResult(),
      error => this.handleError(error)
    );
  }

  ngOnInit() {
  }

  private getLoginParentData(): LoginParentData {
    return new LoginParentData(
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
