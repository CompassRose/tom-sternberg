import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtreeComponent } from './dtree.component';

describe('DtreeComponent', () => {
  let component: DtreeComponent;
  let fixture: ComponentFixture<DtreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DtreeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
