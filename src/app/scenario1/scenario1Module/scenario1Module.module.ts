import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario1ComponentComponent } from './scenario1-component/scenario1-component.component';

@NgModule({
  declarations: [Scenario1ComponentComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [ Scenario1ComponentComponent ],
  exports: [ Scenario1ComponentComponent ]
})
export class Scenario1ModuleModule { }
