import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleComboComponent } from './single-combo.component';

describe('SingleComboComponent', () => {
  let component: SingleComboComponent;
  let fixture: ComponentFixture<SingleComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
