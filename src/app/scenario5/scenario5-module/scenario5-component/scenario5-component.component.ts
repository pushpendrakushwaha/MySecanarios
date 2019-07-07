import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario5-component',
  templateUrl: './scenario5-component.component.html',
  styleUrls: ['./scenario5-component.component.css']
})
export class Scenario5ComponentComponent implements OnInit {
  public message = '';
  messageFromChild12(data) {
    this.message = data;
  }

  constructor() { }

  ngOnInit() {
  }

}
