import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario4ComponentChildComponent } from './scenario4-component-child.component';

describe('Scenario4ComponentChildComponent', () => {
  let component: Scenario4ComponentChildComponent;
  let fixture: ComponentFixture<Scenario4ComponentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario4ComponentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario4ComponentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
