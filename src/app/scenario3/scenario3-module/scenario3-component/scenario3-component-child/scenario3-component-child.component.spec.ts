import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario3ComponentChildComponent } from './scenario3-component-child.component';

describe('Scenario3ComponentChildComponent', () => {
  let component: Scenario3ComponentChildComponent;
  let fixture: ComponentFixture<Scenario3ComponentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario3ComponentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario3ComponentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
