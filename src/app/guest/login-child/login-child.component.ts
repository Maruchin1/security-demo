import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginChildData} from '../../models/login-child-data';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.css']
})
export class LoginChildComponent implements OnInit {
  form = this.fb.group({
    connectionKey: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private matSnackBar: MatSnackBar
  ) {
  }

  login() {
    const key = this.form.get('connectionKey').value;
    const data = new LoginChildData(key);
    this.authService.loginChild(data).subscribe(
      value => this.handleResult(),
      error => this.handleError(error)
    );
  }

  ngOnInit() {
  }

  private handleResult() {
    this.authService.refreshCurrUserRole().subscribe();
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    let message;
    if (error.error instanceof ErrorEvent) {
      message = 'Wystąpił błąd: ' + error.error.message;
    } else {
      message = this.getErrorMessage(error.status);
    }
    this.matSnackBar.open(message, null, {duration: 2000});
  }

  private getErrorMessage(status: number): string {
    switch (status) {
      case 404:
        return 'Niepoprawny kod połączenia';
      default:
        return 'Nieznany błąd';
    }
  }
}
