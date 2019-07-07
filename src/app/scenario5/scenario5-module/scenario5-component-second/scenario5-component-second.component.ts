import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-component-second',
  templateUrl: './scenario5-component-second.component.html',
  styleUrls: ['./scenario5-component-second.component.css']
})
export class Scenario5ComponentSecondComponent implements OnInit {
  @Output() public messageToChild1 = new EventEmitter();
  messageFromChild13(data: any) {
    this.messageToChild1.emit(data);
  }


  constructor() { }

  ngOnInit() {
  }

}
