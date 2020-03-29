import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {UserRole} from './models/user-role';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SecurityMenuComponent} from './security-menu/security-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private matDialog: MatDialog
  ) {
  }

  openSecurityMenu() {
    const dialogRef = this.matDialog.open(SecurityMenuComponent);
  }

  ngOnInit() {
    this.subscribeCurrUserRole();
  }

  private subscribeCurrUserRole() {
    this.authService.getCurrUserRole().subscribe(
      value => this.setupApp(value)
    );
  }

  private setupApp(userRole: UserRole) {
    let moduleRoute = '';
    if (userRole === UserRole.PARENT) {
      moduleRoute = 'parent';
    } else if (userRole === UserRole.CHILD) {
      moduleRoute = 'child';
    } else if (userRole === UserRole.GUEST) {
      moduleRoute = 'guest';
    }
    this.router.navigate([moduleRoute]);
  }
}
