import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiEndpoints} from './ApiEndpoints';
import {AuthService} from './auth.service';
import {take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private readonly KEY_SQL_INJECTION_SECURED = 'key-sql-injection-secured';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  getSecureXFrameOptions(): boolean {
    return true;
  }

  getSecureSqlInjection(): boolean {
    const value = localStorage.getItem(this.KEY_SQL_INJECTION_SECURED);
    if (value) {
      return JSON.parse(value) as boolean;
    } else {
      return true;
    }
  }

  getSecureCsrfToken(): Observable<boolean> {
    return this.httpClient.get<boolean>(
      ApiEndpoints.SWITCH_CSRF_TOKEN,
      {withCredentials: true}
    );
  }

  setSecureXFrameOptions(secure: boolean) {
    console.log('secureXFrameOptions: ' + secure);
  }

  setSecureSqlInjection(secure: boolean) {
    console.log('secureSqlInjection: ' + secure);
    const value = JSON.stringify(secure);
    localStorage.setItem(this.KEY_SQL_INJECTION_SECURED, value);
  }

  setSecureCsrfToken(secure: boolean) {
    console.log('secureCsrfToken: ' + secure);
    this.httpClient.post(
      ApiEndpoints.SWITCH_CSRF_TOKEN + '/' + secure, {},
      {withCredentials: true, headers: this.authService.getCsrfHeaders()}
    ).pipe(take(1)).subscribe();
  }
}
