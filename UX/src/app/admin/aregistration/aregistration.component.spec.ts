import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AregistrationComponent } from './aregistration.component';

describe('AregistrationComponent', () => {
  let component: AregistrationComponent;
  let fixture: ComponentFixture<AregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
