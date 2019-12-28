import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProjectItem} from "./interfaces/project-interfaces";
import {Observable} from "rxjs";

@Injectable()
export class ProjectService {

  private projectsUrl = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) {
  }


  getProjects() : Observable<ProjectItem[]>{
    debugger
    return this.http.get<ProjectItem[]>(this.projectsUrl)
  }
}
