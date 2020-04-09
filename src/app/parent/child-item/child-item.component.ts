import {Component, Input, OnInit} from '@angular/core';
import {Child} from '../../models/child';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {
  @Input() child: Child;

  constructor() {
  }

  ngOnInit(): void {
  }

}
