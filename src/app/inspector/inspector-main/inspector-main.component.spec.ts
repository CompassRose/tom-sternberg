import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorMainComponent } from './inspector-main.component';

describe('InspectorComponentComponent', () => {
  let component: InspectorMainComponent;
  let fixture: ComponentFixture<InspectorMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectorMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
