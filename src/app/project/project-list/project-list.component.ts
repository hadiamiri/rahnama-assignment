import {Component, OnInit} from '@angular/core';
import {ProjectItem, ProjectType, Status} from "../../shared/interfaces/project-interfaces";

@Component({
  selector: 'rh-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  ProjectList: ProjectItem[] = [
    {
      Company: "Company1",
      Country: "Country1",
      Assigned: "Assigned1",
      ProjectType: ProjectType.Company,
      ShipDate: Date.now(),
      Status: Status.Done
    },
    {
      Company: "Company2",
      Country: "Country2",
      Assigned: "Assigned2",
      ProjectType: ProjectType.Customer,
      ShipDate: Date.now(),
      Status: Status.Canceled
    },
    {
      Company: "Company3",
      Country: "Country3",
      Assigned: "Assigned3",
      ProjectType: ProjectType.Staff,
      ShipDate: Date.now(),
      Status: Status.Pending
    },
    {
      Company: "Company4",
      Country: "Country4",
      Assigned: "Assigned4",
      ProjectType: ProjectType.Company,
      ShipDate: Date.now(),
      Status: Status.Canceled
    },
    {
      Company: "Company5",
      Country: "Country5",
      Assigned: "Assigned5",
      ProjectType: ProjectType.Company,
      ShipDate: Date.now(),
      Status: Status.Done
    },
    {
      Company: "Company6",
      Country: "Country6",
      Assigned: "Assigned6",
      ProjectType: ProjectType.Company,
      ShipDate: Date.now(),
      Status: Status.Done
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
