import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario2-component',
  templateUrl: './scenario2-component.component.html',
  styleUrls: ['./scenario2-component.component.css']
})
export class Scenario2ComponentComponent implements OnInit {
  public myDesktop ;
  onClick(data) {
    this.myDesktop = data;
  }

  constructor() { }

  ngOnInit() {
  }

}
