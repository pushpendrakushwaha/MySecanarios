import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario2ComponentComponent } from './scenario2-component.component';

describe('Scenario2ComponentComponent', () => {
  let component: Scenario2ComponentComponent;
  let fixture: ComponentFixture<Scenario2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
