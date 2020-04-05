import {Component, OnInit} from '@angular/core';
import {ChildService} from '../services/child.service';
import {LoggedChild} from '../models/logged-child';
import {Medicine} from '../models/medicine';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  loggedChild: LoggedChild;
  medicines: Medicine[];

  constructor(
    private childService: ChildService
  ) {
  }

  ngOnInit() {
    this.getLoggedChild();
    this.getMedicines();
  }

  private getLoggedChild() {
    this.childService.getLoggedChild().subscribe(
      value => {
        this.loggedChild = value;
      }
    );
  }

  private getMedicines() {
    this.childService.getMedicines().subscribe(
      value => {
        this.medicines = value;
      }
    );
  }
}
