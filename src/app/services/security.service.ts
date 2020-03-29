import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  // todo zaimplementować logikę zabezpieczeń

  constructor() {
  }

  getSecureXFrameOptions(): boolean {
    return true;
  }

  getSecureSqlInjection(): boolean {
    return true;
  }

  getSecureCsrfToken(): boolean {
    return true;
  }

  setSecureXFrameOptions(secure: boolean) {
    console.log('secureXFrameOptions: ' + secure);
  }

  setSecureSqlInjection(secure: boolean) {
    console.log('secureSqlInjection: ' + secure);
  }

  setSecureCsrfToken(secure: boolean) {
    console.log('secureCsrfToken: ' + secure);
  }
}
