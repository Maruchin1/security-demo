import {Injectable} from '@angular/core';
import {UserRole} from '../models/user-role';
import {Observable, of} from 'rxjs';
import {ParentCredentials} from '../models/parent-credentials';
import {HttpClient} from '@angular/common/http';
import {ApiEndpoints} from './ApiEndpoints';

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

  registerParent(credential: ParentCredentials) {
    return of();
  }

  loginParent(credentials: ParentCredentials) {
    const request = this.httpClient.post(ApiEndpoints.LOGIN_CHILD, credentials);
    return request.subscribe(
      value => this.handleLoginResult(value)
    );
  }

  loginChild(connectionKey: string) {
    return of();
  }

  private handleLoginResult(result) {
    const authToken = result as string;
    localStorage.setItem(this.KEY_AUTH_TOKEN, authToken);
  }
}
