import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyServiceService } from './my-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1ModuleModule } from './scenario1/scenario1Module/scenario1Module.module';
import { Scenario2ModuleModule } from './scenario2/scenario2-module/scenario2-module.module';
import { Scenario3ModuleModule } from './scenario3/scenario3-module/scenario3-module.module';
import { Scenario4ModuleModule } from './scenario4/scenario4-module/scenario4-module.module';
import { Scenario5ModuleModule } from './scenario5/scenario5-module/scenario5-module.module';
import { Scenario6ModuleModule } from './scenario6/scenario6-module/scenario6-module.module';
import { Scenario7ModuleModule } from './scenario7/scenario7-module/scenario7-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Scenario1ModuleModule,
    Scenario2ModuleModule,
    Scenario3ModuleModule,
    Scenario4ModuleModule,
    Scenario5ModuleModule,
    Scenario6ModuleModule,
    Scenario7ModuleModule
  ],
  providers: [ MyServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
