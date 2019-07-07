import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario3-component-child',
  templateUrl: './scenario3-component-child.component.html',
  styleUrls: ['./scenario3-component-child.component.css']
})
export class Scenario3ComponentChildComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('parentData') public message = '';

  constructor() { }

  ngOnInit() {
  }

}
