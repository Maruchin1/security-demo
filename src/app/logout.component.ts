import {Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import { AuthService } from './services/auth.service';

@Component({
    template: ''
  })
  
  export class LogoutComponent implements OnInit {
  
    constructor(private _authService: AuthService, private router: Router) {}
  
    ngOnInit() {
      this._authService.logoutCurrUser().toPromise()
      .then(() => this.router.navigate(['guest']));
    }
  
  }