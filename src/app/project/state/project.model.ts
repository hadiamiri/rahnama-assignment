export interface ProjectItem {
  Id: number,
  ProjectName: string,
  ProjectOwner: string,
  CustomerName: string,
  ContactPhone: string,
  ProjectEmailAddress: string,
  CompanySite: string,
  SettingEmailAddress: string,
  Language: string,
  TimeZone: string,
  Communication: {key: string, value: boolean}[],
  AddressLine1: string,
  AddressLine2: string,
  PostCode: string,
  City: string,
  State: string,
  Country: string
}

export enum ProjectFormsSteps {
  ProjectDetail,
  ProjectSetting,
  ProjectDelivery,
  ProjectReview
}


