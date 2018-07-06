import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UregistrationComponent } from './uregistration.component';

describe('UregistrationComponent', () => {
  let component: UregistrationComponent;
  let fixture: ComponentFixture<UregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
