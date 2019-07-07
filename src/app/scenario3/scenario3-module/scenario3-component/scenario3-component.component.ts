import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario3-component',
  templateUrl: './scenario3-component.component.html',
  styleUrls: ['./scenario3-component.component.css']
})
export class Scenario3ComponentComponent implements OnInit {
  public myMessage = '';
  onClick(data: string) {
    this.myMessage = data;
  }

  constructor() { }

  ngOnInit() {
  }

}
