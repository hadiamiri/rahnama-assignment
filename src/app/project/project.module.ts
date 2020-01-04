import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProjectListComponent} from './project-list/project-list.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormStepsComponent} from './create-project/form-steps/form-steps.component';
import {ProjectDetailFormComponent} from './create-project/project-detail-form/project-detail-form.component';
import {ProjectSettingsFormComponent} from './create-project/project-settings-form/project-settings-form.component';
import {DeliveryStatusFormComponent} from './create-project/project-delivery-form/delivery-status-form.component';
import {ReviewAndSubmitComponent} from './create-project/review-and-submit/review-and-submit.component';
import {ProjectFormService} from "./create-project/project-form-service/project-form.service";


@NgModule({
  declarations: [ProjectListComponent,
    CreateProjectComponent,
    FormStepsComponent,
    ProjectDetailFormComponent,
    ProjectSettingsFormComponent,
    DeliveryStatusFormComponent,
    ReviewAndSubmitComponent],
  exports: [
    ProjectListComponent
  ],
  providers: [ProjectFormService],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule {
}
