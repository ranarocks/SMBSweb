import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmasterComponent } from './dashboardmaster.component';

describe('DashboardmasterComponent', () => {
  let component: DashboardmasterComponent;
  let fixture: ComponentFixture<DashboardmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
