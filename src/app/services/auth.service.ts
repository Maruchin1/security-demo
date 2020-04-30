import {Injectable} from '@angular/core';
import {UserRole} from '../models/user-role';
import {Observable, of, Subject} from 'rxjs';
import {LoginParentData} from '../models/login-parent-data';
import {HttpClient} from '@angular/common/http';
import {ApiEndpoints} from './ApiEndpoints';
import {RegisterParentData} from '../models/register-parent-data';
import {map, switchMap, take} from 'rxjs/operators';
import {LoginChildData} from '../models/login-child-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly currUserRole = new Subject<UserRole>();

  constructor(
    private httpClient: HttpClient
  ) {
    this.currUserRole.next(UserRole.GUEST);
  }

  refreshCurrUserRole(): Observable<void> {
    const request = this.httpClient.get(
      ApiEndpoints.USER_ROLE,
      {responseType: 'text', withCredentials: true}
    );
    return request.pipe(
      take(1),
      map(value => this.handleUserRole(value))
    );
  }

  getCurrUserRole(): Observable<UserRole> {
    return this.currUserRole.asObservable();
  }

  registerParent(data: RegisterParentData): Observable<void> {
    const request = this.httpClient.post(
      ApiEndpoints.REGISTER_PARENT, data,
      {responseType: 'text', withCredentials: true}
    );
    return request.pipe(
      take(1),
      map(value => this.handleAuthToken(value))
    );
  }

  loginParent(data: LoginParentData): Observable<void> {
    const request = this.httpClient.post(
      ApiEndpoints.LOGIN_PARENT, data,
      {responseType: 'text', withCredentials: true}
    );
    return request.pipe(
      take(1),
      map(value => this.handleAuthToken(value))
    );
  }

  loginChild(data: LoginChildData): Observable<void> {
    const request = this.httpClient.post(
      ApiEndpoints.LOGIN_CHILD, data,
      {responseType: 'text', withCredentials: true}
    );
    return request.pipe(
      take(1),
      map(value => this.handleAuthToken(value))
    );
  }

  logoutCurrUser(): Observable<void> {
    return this.httpClient.post(
      ApiEndpoints.LOGOUT, {},
      {withCredentials: true}
    ).pipe(
      take(1),
      switchMap(_ => this.refreshCurrUserRole())
    );
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
  }
}
