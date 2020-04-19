import {Injectable} from '@angular/core';
import {UserRole} from '../models/user-role';
import {Observable, of, Subject} from 'rxjs';
import {LoginParentData} from '../models/login-parent-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiEndpoints} from './ApiEndpoints';
import {RegisterParentData} from '../models/register-parent-data';
import {map, take} from 'rxjs/operators';
import {LoginChildData} from '../models/login-child-data';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly KEY_AUTH_TOKEN = 'key-auth-token';
  private readonly currUserRole = new Subject<UserRole>();

  constructor(
    private httpClient: HttpClient, private cookieService: CookieService
  ) {
    this.currUserRole.next(UserRole.GUEST);
  }

  refreshCurrUserRole(): Observable<void> {
    const authToken = localStorage.getItem(this.KEY_AUTH_TOKEN);
    if (!authToken) {
      this.currUserRole.next(UserRole.GUEST);
      return of();
    }
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
    return this.currUserRole.asObservable();
  }

  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem(this.KEY_AUTH_TOKEN);
    if (token) {
      return new HttpHeaders({
        Authorization: token
      });
    }
  }

  registerParent(data: RegisterParentData): Observable<void> {
    const request = this.httpClient.post(
      ApiEndpoints.REGISTER_PARENT, data,
      {responseType: 'text'}
    );
    return request.pipe(
      take(1),
      map(value => this.handleAuthToken(value))
    );
  }

  loginParent(data: LoginParentData): Observable<void> {
    const request = this.httpClient.post(
      ApiEndpoints.LOGIN_PARENT, data,
      {responseType: 'text'}
    );
    return request.pipe(
      take(1),
      map(value => this.handleAuthToken(value))
    );
  }

  loginChild(data: LoginChildData): Observable<void> {
    const request = this.httpClient.post(
      ApiEndpoints.LOGIN_CHILD, data,
      {responseType: 'text'}
    );
    return request.pipe(
      take(1),
      map(value => this.handleAuthToken(value))
    );
  }

  logoutCurrUser(): Observable<void> {
    localStorage.removeItem(this.KEY_AUTH_TOKEN);
    this.cookieService.deleteAll();
    return this.refreshCurrUserRole();
  }

  private handleUserRole(roleString: string) {
    console.log('userRole: ' + roleString);
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
    this.cookieService.set("XSRF-TOKEN",token)
  }

  getAuthToken(): string {
    return localStorage.getItem(this.KEY_AUTH_TOKEN);
  }
}
