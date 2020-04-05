import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {LoggedChild} from '../models/logged-child';
import {AuthService} from './auth.service';
import {Medicine} from '../models/medicine';
import {ApiEndpoints} from './ApiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  getLoggedChild(): Observable<LoggedChild> {
    const authHeaders = this.authService.getAuthHeaders();
    return this.httpClient.get<LoggedChild>(
      ApiEndpoints.GET_LOGGED_CHILDREN,
      {headers: authHeaders}
    );
  }

  getMedicines(): Observable<Medicine[]> {
    const authHeaders = this.authService.getAuthHeaders();
    return this.httpClient.get<Medicine[]>(
      ApiEndpoints.GET_CHILD_MEDICINES,
      {headers: authHeaders}
    );
  }
}
