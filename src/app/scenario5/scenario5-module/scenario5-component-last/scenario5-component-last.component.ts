import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-component-last',
  templateUrl: './scenario5-component-last.component.html',
  styleUrls: ['./scenario5-component-last.component.css']
})
export class Scenario5ComponentLastComponent implements OnInit {
   // tslint:disable-next-line:no-output-native
   @Output() public message = new EventEmitter();
   onClick(data: any) {
     this.message.emit(data);
   }

  constructor() { }

  ngOnInit() {
  }

}
