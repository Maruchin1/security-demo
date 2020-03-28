import {Injectable} from '@angular/core';
import {UserRole} from '../models/user-role';
import {Observable, of} from 'rxjs';
import {LoginParentData} from '../models/login-parent-data';
import {HttpClient} from '@angular/common/http';
import {ApiEndpoints} from './ApiEndpoints';
import {RegisterParentData} from '../models/register-parent-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly KEY_AUTH_TOKEN = 'key-auth-token';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getCurrUserRole(): Observable<UserRole> {
    // todo get user role from api by authToken
    return of(UserRole.GUEST);
  }

  registerParent(data: RegisterParentData) {
    const request = this.httpClient.post(ApiEndpoints.REGISTER_PARENT, data);
    request.subscribe(
      value => this.handleAuthResult(value)
    );
  }

  loginParent(data: LoginParentData) {
    const request = this.httpClient.post(ApiEndpoints.LOGIN_PARENT, data);
    request.subscribe(
      value => this.handleAuthResult(value)
    );
  }

  loginChild(connectionKey: string) {
    const request = this.httpClient.post(ApiEndpoints.LOGIN_CHILD, connectionKey);
    request.subscribe(
      value => this.handleAuthResult(value)
    );
  }

  private handleAuthResult(result) {
    const authToken = result as string;
    localStorage.setItem(this.KEY_AUTH_TOKEN, authToken);
  }
}
