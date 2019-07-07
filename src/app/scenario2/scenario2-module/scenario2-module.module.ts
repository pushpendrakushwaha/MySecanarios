import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario2ComponentComponent } from './scenario2-component/scenario2-component.component';

@NgModule({
  declarations: [Scenario2ComponentComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [ Scenario2ComponentComponent ],
  exports: [ Scenario2ComponentComponent ]
})
export class Scenario2ModuleModule { }
