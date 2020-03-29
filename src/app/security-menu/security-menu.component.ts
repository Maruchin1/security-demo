import {Component, OnInit} from '@angular/core';
import {SecurityService} from '../services/security.service';

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
    private securityService: SecurityService
  ) {
  }

  ngOnInit() {
    this.loadSecureOptions();
  }

  private loadSecureOptions() {
    this.secureXFrameOptions = this.securityService.getSecureXFrameOptions();
    this.secureSqlInjection = this.securityService.getSecureSqlInjection();
    this.secureCsrfToken = this.securityService.getSecureCsrfToken();
  }
}