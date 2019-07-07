import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-sec-child',
  templateUrl: './sec-child.component.html',
  styleUrls: ['./sec-child.component.css']
})
export class SecChildComponent implements OnInit {
  user: string;

  constructor(private messageService: MyServiceService ) { }

  ngOnInit() {
    this.messageService.cast.subscribe(user => this.user);
  }

}
