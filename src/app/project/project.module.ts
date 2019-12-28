import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProjectListComponent} from './project-list/project-list.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ProjectListComponent, CreateProjectComponent],
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
