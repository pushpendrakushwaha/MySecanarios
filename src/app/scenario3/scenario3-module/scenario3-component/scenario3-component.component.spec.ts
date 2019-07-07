import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario3ComponentComponent } from './scenario3-component.component';

describe('Scenario3ComponentComponent', () => {
  let component: Scenario3ComponentComponent;
  let fixture: ComponentFixture<Scenario3ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario3ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
