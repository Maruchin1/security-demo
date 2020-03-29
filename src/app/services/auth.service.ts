import {Injectable} from '@angular/core';
import {UserRole} from '../models/user-role';
import {Observable, of, Subject} from 'rxjs';
import {LoginParentData} from '../models/login-parent-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiEndpoints} from './ApiEndpoints';
import {RegisterParentData} from '../models/register-parent-data';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly KEY_AUTH_TOKEN = 'key-auth-token';
  private readonly currUserRole = new Subject<UserRole>();

  constructor(
    private httpClient: HttpClient
  ) {
    this.currUserRole.next(UserRole.GUEST);
  }

  refreshCurrUserRole(): Observable<void> {
    const authToken = localStorage.getItem(this.KEY_AUTH_TOKEN);
    const requestHeaders = new HttpHeaders({
      Authorization: authToken
    });
    const request = this.httpClient.get(
      ApiEndpoints.USER_ROLE,
      {headers: requestHeaders, responseType: 'text'}
    );
    return request.pipe(
      take(1),
      map(value => this.handleUserRole(value))
    );
  }

  getCurrUserRole(): Observable<UserRole> {
    // return this.currUserRole.asObservable();
    return of(UserRole.GUEST);
  }

  registerParent(data: RegisterParentData): Observable<void> {
    const request = this.httpClient.post(
      ApiEndpoints.REGISTER_PARENT,
      data,
      {responseType: 'text'}
    );
    return request.pipe(
      take(1),
      map(value => this.handleAuthToken(value))
    );
  }

  loginParent(data: LoginParentData): Observable<void> {
    const request = this.httpClient.post(
      ApiEndpoints.LOGIN_PARENT,
      data,
      {responseType: 'text'}
    );
    return request.pipe(
      take(1),
      map(value => this.handleAuthToken(value))
    );
  }

  loginChild(connectionKey: string): Observable<void> {
    const request = this.httpClient.post<string>(ApiEndpoints.LOGIN_CHILD, connectionKey);
    return request.pipe(
      take(1),
      map(value => this.handleAuthToken(value))
    );
  }

  private handleUserRole(roleString: string) {
    switch (roleString) {
      case 'PARENT':
        this.currUserRole.next(UserRole.PARENT);
        break;
      case 'CHILD':
        this.currUserRole.next(UserRole.CHILD);
        break;
      case 'GUEST':
        this.currUserRole.next(UserRole.GUEST);
        break;
    }
  }

  private handleAuthToken(token: string) {
    console.log('authToken: ' + token);
    localStorage.setItem(this.KEY_AUTH_TOKEN, token);
  }
}
