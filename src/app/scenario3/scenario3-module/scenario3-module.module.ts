import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario3ComponentComponent } from './scenario3-component/scenario3-component.component';
import { Scenario3ComponentChildComponent } from './scenario3-component/scenario3-component-child/scenario3-component-child.component';

@NgModule({
  declarations: [Scenario3ComponentComponent, Scenario3ComponentChildComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [ Scenario3ComponentComponent, Scenario3ComponentChildComponent ],
  exports: [ Scenario3ComponentComponent, Scenario3ComponentChildComponent ]
})
export class Scenario3ModuleModule { }
