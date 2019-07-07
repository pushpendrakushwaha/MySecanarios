import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4-component-child',
  templateUrl: './scenario4-component-child.component.html',
  styleUrls: ['./scenario4-component-child.component.css']
})
export class Scenario4ComponentChildComponent implements OnInit {
  @Output() public myData = new EventEmitter();

  onClick(data: string) {
    this.myData.emit(data) ;
    console.log(data);
  }


  constructor() { }

  ngOnInit() {
  }

}
