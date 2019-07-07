import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario7ComponentComponent } from './scenario7-component.component';

describe('Scenario7ComponentComponent', () => {
  let component: Scenario7ComponentComponent;
  let fixture: ComponentFixture<Scenario7ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario7ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario7ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
