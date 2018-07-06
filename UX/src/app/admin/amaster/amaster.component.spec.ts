import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmasterComponent } from './amaster.component';

describe('AmasterComponent', () => {
  let component: AmasterComponent;
  let fixture: ComponentFixture<AmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
