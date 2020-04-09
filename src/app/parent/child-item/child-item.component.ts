import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Child} from '../../models/child';
import {ParentService} from '../../services/parent.service';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {
  @Input() child: Child;
  @Output() removed = new EventEmitter();

  constructor(
    private parentService: ParentService
  ) {
  }

  remove() {
    this.parentService.removeChild(this.child.childId)
      .then(value => {
        this.removed.emit();
      });
  }

  ngOnInit(): void {
  }

}
