import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {FormStepCounterReducer} from "./project/create-project/state/create-project-form.reducer";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProjectModule} from "./project/project.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

import {ProjectService} from "./shared/project-service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({stepCount: FormStepCounterReducer})
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
