import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5ComponentComponent } from './scenario5-component.component';

describe('Scenario5ComponentComponent', () => {
  let component: Scenario5ComponentComponent;
  let fixture: ComponentFixture<Scenario5ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
