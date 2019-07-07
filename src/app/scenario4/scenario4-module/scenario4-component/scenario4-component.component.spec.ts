import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario4ComponentComponent } from './scenario4-component.component';

describe('Scenario4ComponentComponent', () => {
  let component: Scenario4ComponentComponent;
  let fixture: ComponentFixture<Scenario4ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario4ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
