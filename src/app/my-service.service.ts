import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  message: any = new Subject<any>();
  }

