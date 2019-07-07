import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario7ComponentComponent } from './scenario7-component/scenario7-component.component';
import { MyServiceService } from '../../my-service.service';
import { SecChildComponent } from './sec-child/sec-child.component';
import { S6parentComponent } from './s6parent/s6parent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Scenario7ComponentComponent, SecChildComponent, S6parentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ MyServiceService ],
  bootstrap: [ Scenario7ComponentComponent, SecChildComponent, S6parentComponent ],
  exports: [ Scenario7ComponentComponent, SecChildComponent, S6parentComponent ]

})
export class Scenario7ModuleModule { }
