import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {UserRole} from './models/user-role';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SecurityMenuComponent} from './dialogs/security-menu/security-menu.component';
import {ConfirmComponent, ConfirmData} from './dialogs/confirm/confirm.component';

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

  logOut() {
    const confirmData: ConfirmData = {
      title: 'Wylogowanie z aplikacji',
      message: 'Czy na pewno chcesz się wylogować z aplikacji?'
    };
    const dialogRef = this.matDialog.open(ConfirmComponent, {data: confirmData});
    dialogRef.beforeClosed().subscribe(
      value => this.handleLogoutConfirm(value)
    );
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

  private handleLogoutConfirm(confirm: boolean) {
    if (confirm) {
      this.authService.logoutCurrUser().subscribe();
    }
  }
}
