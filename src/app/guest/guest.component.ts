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

  loginParent() {
    this.router.navigate(
      ['login-parent'],
      {relativeTo: this.activatedRoute}
    );
  }

  ngOnInit(): void {
  }

}
