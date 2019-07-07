import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario4ComponentComponent } from './scenario4-component/scenario4-component.component';
import { Scenario4ComponentChildComponent } from './scenario4-component/scenario4-component-child/scenario4-component-child.component';

@NgModule({
  declarations: [Scenario4ComponentComponent, Scenario4ComponentChildComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [ Scenario4ComponentComponent, Scenario4ComponentChildComponent ],
  exports: [ Scenario4ComponentComponent, Scenario4ComponentChildComponent ]
})
export class Scenario4ModuleModule { }
