import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoggedChild} from '../models/logged-child';
import {Medicine} from '../models/medicine';
import {ApiEndpoints} from './ApiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getLoggedChild(): Observable<LoggedChild> {
    return this.httpClient.get<LoggedChild>(
      ApiEndpoints.GET_LOGGED_CHILDREN,
      {withCredentials: true}
    );
  }

  getMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(
      ApiEndpoints.GET_CHILD_MEDICINES,
      {withCredentials: true}
    );
  }
}
