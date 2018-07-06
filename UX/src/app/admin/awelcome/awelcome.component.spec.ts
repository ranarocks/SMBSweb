import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwelcomeComponent } from './awelcome.component';

describe('AwelcomeComponent', () => {
  let component: AwelcomeComponent;
  let fixture: ComponentFixture<AwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
