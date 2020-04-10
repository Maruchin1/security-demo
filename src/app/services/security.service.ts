import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private readonly KEY_SQL_INJECTION_SECURED = 'key-sql-injection-secured';

  constructor() {
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

  getSecureCsrfToken(): boolean {
    return true;
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
  }
}
