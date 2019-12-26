import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectListComponent} from "./project/project-list/project-list.component";
import {CreateProjectComponent} from "./project/create-project/create-project.component";


const routes: Routes = [
  {path: '', redirectTo: '/project-list', pathMatch: 'full'},
  {path: 'project-list', component: ProjectListComponent},
  {path: 'create-project', component: CreateProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
