import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UwelcomeComponent } from './uwelcome.component';

describe('UwelcomeComponent', () => {
  let component: UwelcomeComponent;
  let fixture: ComponentFixture<UwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
