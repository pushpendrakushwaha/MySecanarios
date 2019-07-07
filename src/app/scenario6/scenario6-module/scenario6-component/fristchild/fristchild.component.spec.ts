import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FristchildComponent } from './fristchild.component';

describe('FristchildComponent', () => {
  let component: FristchildComponent;
  let fixture: ComponentFixture<FristchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FristchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FristchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
