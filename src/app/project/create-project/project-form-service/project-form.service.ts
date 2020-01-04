import {Injectable} from '@angular/core';
import {ProjectDeliveryModel} from "../model/project-delivery.model";
import {ProjectSettingModel} from "../model/project-setting.model";
import {ProjectDetailModel} from "../model/project-detail.model";

@Injectable()
export class ProjectFormService {

  projectDeliveryFormModel;
  projectSettingsModel;
  projectDetailModel;

  constructor() {
    this.projectDetailModel = new ProjectDetailModel();
    this.projectDeliveryFormModel = new ProjectDeliveryModel();
    this.projectSettingsModel = new ProjectSettingModel();
  }

}
