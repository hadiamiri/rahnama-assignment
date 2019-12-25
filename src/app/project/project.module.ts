import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';



@NgModule({
  declarations: [ProjectListComponent, CreateProjectComponent],
  exports: [
    ProjectListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { }
