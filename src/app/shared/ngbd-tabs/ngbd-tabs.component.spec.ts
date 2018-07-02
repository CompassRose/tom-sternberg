import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdTabsComponent } from './ngbd-tabs.component';

describe('NgbdTabsComponent', () => {
  let component: NgbdTabsComponent;
  let fixture: ComponentFixture<NgbdTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
