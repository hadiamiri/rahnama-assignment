import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProjectListComponent} from './project-list/project-list.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormStepsComponent } from './create-project/form-steps/form-steps.component';


@NgModule({
  declarations: [ProjectListComponent, CreateProjectComponent, FormStepsComponent],
  exports: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule {
}
