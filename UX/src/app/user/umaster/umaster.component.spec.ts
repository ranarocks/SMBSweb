import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmasterComponent } from './umaster.component';

describe('UmasterComponent', () => {
  let component: UmasterComponent;
  let fixture: ComponentFixture<UmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
