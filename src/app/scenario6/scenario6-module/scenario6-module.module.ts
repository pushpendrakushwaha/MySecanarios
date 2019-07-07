import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario6ComponentComponent } from './scenario6-component/scenario6-component.component';
import { FristchildComponent } from './scenario6-component/fristchild/fristchild.component';
import { SecondchildComponent } from './scenario6-component/secondchild/secondchild.component';

@NgModule({
  declarations: [Scenario6ComponentComponent, FristchildComponent, SecondchildComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [ Scenario6ComponentComponent, FristchildComponent, SecondchildComponent ],
  exports: [ Scenario6ComponentComponent, FristchildComponent, SecondchildComponent ]

})
export class Scenario6ModuleModule { }
