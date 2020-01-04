import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectModule} from "./project/project.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

import {ProjectService} from "./project/project-service/project.service";
import {ProjectReducer} from "./project/state/project.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ProjectEffects} from "./project/state/project.effect";

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
    StoreModule.forRoot({projectState: ProjectReducer}),
    EffectsModule.forRoot([ProjectEffects])
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
