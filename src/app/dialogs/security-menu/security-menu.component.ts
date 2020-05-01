import {Component, OnInit} from '@angular/core';
import {SecurityService} from '../../services/security.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-security-menu',
  templateUrl: './security-menu.component.html',
  styleUrls: ['./security-menu.component.css']
})
export class SecurityMenuComponent implements OnInit {
  secureXFrameOptions = false;
  secureSqlInjection = false;
  secureCsrfToken = false;

  constructor(
    public securityService: SecurityService
  ) {
  }

  openFakeWebsite() {
    window.open('https://fake-web-security.herokuapp.com/', '_blank');
  }

  ngOnInit() {
    this.loadSecureOptions();
  }

  private loadSecureOptions() {
    this.secureXFrameOptions = this.securityService.getSecureXFrameOptions();
    this.secureSqlInjection = this.securityService.getSecureSqlInjection();
    this.securityService.getSecureCsrfToken()
      .pipe(take(1))
      .subscribe(value => {
        this.secureCsrfToken = value;
      });
  }
}
