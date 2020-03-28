import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, Validators} from '@angular/forms';
import {LoginParentData} from '../../models/login-parent-data';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  private readonly errorsMessages: Map<number, string>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private matSnackBar: MatSnackBar
  ) {
    this.errorsMessages = this.initErrorsMessages();
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

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    let message;
    if (error.error instanceof ErrorEvent) {
      message = 'Wystąpił błąd: ' + error.error.message;
    } else {
      message = this.errorsMessages.get(error.status);
    }
    this.matSnackBar.open(message, null, {duration: 2000});
  }

  private initErrorsMessages(): Map<number, string> {
    const map = new Map<number, string>();
    map.set(404, 'Niepoprawny adres email');
    map.set(422, 'Niepoprawne hasło');
    return map;
  }
}
