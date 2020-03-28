import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  registerParent() {
    this.navigate('register-parent');
  }

  loginParent() {
    this.navigate('login-parent');
  }

  loginChild() {
    this.navigate('login-child');
  }

  ngOnInit(): void {
  }

  private navigate(path: string) {
    this.router.navigate(
      [path],
      {relativeTo: this.activatedRoute}
    );
  }
}
