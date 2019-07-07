import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario5ComponentComponent } from './scenario5-component/scenario5-component.component';
import { Scenario5ComponentSecondComponent } from './scenario5-component-second/scenario5-component-second.component';
import { Scenario5ComponentLastComponent } from './scenario5-component-last/scenario5-component-last.component';

@NgModule({
  declarations: [Scenario5ComponentComponent, Scenario5ComponentSecondComponent, Scenario5ComponentLastComponent ],
  imports: [
    CommonModule
  ],
  bootstrap: [ Scenario5ComponentComponent, Scenario5ComponentSecondComponent, Scenario5ComponentLastComponent ],
  exports: [ Scenario5ComponentComponent, Scenario5ComponentSecondComponent, Scenario5ComponentLastComponent ]
})
export class Scenario5ModuleModule { }
