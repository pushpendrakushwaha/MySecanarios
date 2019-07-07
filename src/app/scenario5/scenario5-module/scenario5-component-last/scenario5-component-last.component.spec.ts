import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5ComponentLastComponent } from './scenario5-component-last.component';

describe('Scenario5ComponentLastComponent', () => {
  let component: Scenario5ComponentLastComponent;
  let fixture: ComponentFixture<Scenario5ComponentLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5ComponentLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5ComponentLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
