import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6ComponentComponent } from './scenario6-component.component';

describe('Scenario6ComponentComponent', () => {
  let component: Scenario6ComponentComponent;
  let fixture: ComponentFixture<Scenario6ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
