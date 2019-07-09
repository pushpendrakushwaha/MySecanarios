import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-sec-child',
  templateUrl: './sec-child.component.html',
  styleUrls: ['./sec-child.component.css']
})
export class SecChildComponent implements OnInit {
  mymessage: any;

  constructor(private myservice: MyServiceService ) { }

  ngOnInit() {
    this.myservice.message.subscribe(data => {this.mymessage = data ; } );
  }

}
