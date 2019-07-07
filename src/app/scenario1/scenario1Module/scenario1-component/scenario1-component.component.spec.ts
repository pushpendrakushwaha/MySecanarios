import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario1ComponentComponent } from './scenario1-component.component';

describe('Scenario1ComponentComponent', () => {
  let component: Scenario1ComponentComponent;
  let fixture: ComponentFixture<Scenario1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
