import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProjectItem} from "../state/project.model";
import {Observable} from "rxjs";

@Injectable()
export class ProjectService {

  private projectsUrl = 'http://localhost:3000/projects';
  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };

  constructor(private http: HttpClient) {
  }


  getProjects(): Observable<ProjectItem[]> {
    return this.http.get<ProjectItem[]>(this.projectsUrl)
  }

  addProject(projectItem: ProjectItem): Observable<ProjectItem> {
    return this.http.post<ProjectItem>(this.projectsUrl, projectItem, this.httpOptions);
  }
}
