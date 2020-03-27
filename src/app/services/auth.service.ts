import {Injectable} from '@angular/core';
import {UserRole} from '../models/user-role';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  getCurrUserRole(): Observable<UserRole> {
    // todo get user role from api by authToken
    return of(UserRole.GUEST);
  }
}
