import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSettingsFormComponent } from './project-settings-form.component';

describe('ProjectSettingsFormComponent', () => {
  let component: ProjectSettingsFormComponent;
  let fixture: ComponentFixture<ProjectSettingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSettingsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
