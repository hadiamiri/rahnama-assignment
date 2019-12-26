export interface ProjectDetail {
  ProjectName: string,
  ProjectOwner: string,
  CustomerName: string,
  ContactPhone: string,
  EmailAddress: string,
  CompanySite: string
}

export interface ProjectSetting {
  EmailAddress: string,
  Language: string,
  TimeZone: string,
  Communication: {key: string, value: boolean}[]
}

export interface  DeliveryStatus {
  AddressLine1: string,
  AddressLine2: string,
  PostCode: string,
  City: string,
  State: string,
  Country: string
}

export interface ProjectItem{
  Company: string,
  Country: string,
  ShipDate: number,
  Assigned: string,
  Status: Status,
  ProjectType: ProjectType
}

export enum Status {
  Success,
  Done,
  Pending,
  Canceled
}

export enum ProjectType {
  Customer,
  Staff,
  Company
}
