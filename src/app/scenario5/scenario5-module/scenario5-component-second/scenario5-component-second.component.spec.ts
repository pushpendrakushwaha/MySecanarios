import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5ComponentSecondComponent } from './scenario5-component-second.component';

describe('Scenario5ComponentSecondComponent', () => {
  let component: Scenario5ComponentSecondComponent;
  let fixture: ComponentFixture<Scenario5ComponentSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5ComponentSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5ComponentSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
