import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryStatusFormComponent } from './delivery-status-form.component';

describe('DeliveryStatusFormComponent', () => {
  let component: DeliveryStatusFormComponent;
  let fixture: ComponentFixture<DeliveryStatusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryStatusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
