import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario1-component',
  templateUrl: './scenario1-component.component.html',
  styleUrls: ['./scenario1-component.component.css']
})
export class Scenario1ComponentComponent implements OnInit {

  onClick(data: any) {

    console.log(data);
  }

  constructor() { }

  ngOnInit() {
  }

}
