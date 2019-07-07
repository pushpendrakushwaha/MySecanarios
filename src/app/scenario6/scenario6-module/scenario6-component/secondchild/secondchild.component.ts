import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('parentData') public message = '';

  constructor() { }

  ngOnInit() {
  }

}
