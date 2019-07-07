import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fristchild',
  templateUrl: './fristchild.component.html',
  styleUrls: ['./fristchild.component.css']
})
export class FristchildComponent implements OnInit {
  @Output() public myData = new EventEmitter();

  onClick(data: string) {
    this.myData.emit(data) ;
    console.log(data);
  }

  constructor() { }

  ngOnInit() {
  }

}
