import { Component, OnInit,  } from '@angular/core';
import { MyServiceService } from '../../../my-service.service';

@Component({
  selector: 'app-scenario7-component',
  templateUrl: './scenario7-component.component.html',
  styleUrls: ['./scenario7-component.component.css']
})
export class Scenario7ComponentComponent implements OnInit {
  user: string;
  editUser: string;


  constructor(private messageService: MyServiceService) {}


  ngOnInit() {
  }
  onclick(data) {
    this.messageService.message.next(data);
  }

}

