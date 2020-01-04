/**
 * Intermediate model for retaining form data between steps.
 */
export class ProjectSettingModel {
  EmailAddress: string;
  Language: string;
  TimeZone: string;
  Communications: any[] = []
}
