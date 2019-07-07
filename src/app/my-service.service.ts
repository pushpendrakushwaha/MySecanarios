import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  private user = new BehaviorSubject<string>('xyz');
  cast = this.user.asObservable();
  editUser(newUser) {
    this.user.next(newUser);
  }
}
