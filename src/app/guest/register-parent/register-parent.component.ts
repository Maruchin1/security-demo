import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {RegisterParentData} from '../../models/register-parent-data';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  }, {validators: this.passwordsTheSameValidator});

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private matSnackBar: MatSnackBar
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

  private passwordsTheSameValidator(group: FormGroup): ValidationErrors | null {
    const password = group.get('password').value;
    const passwordConfirm = group.get('passwordConfirm').value;
    return password === passwordConfirm ? null : {notSame: true};
  }

  private getRegisterParentData(): RegisterParentData {
    return new RegisterParentData(
      this.form.get('name').value,
      this.form.get('email').value,
      this.form.get('password').value
    );
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
      case 409:
        return 'Uzytkownik o podanym adresie e-mail już istenieje';
      default:
        return 'Nieznany błąd';
    }
  }
}
