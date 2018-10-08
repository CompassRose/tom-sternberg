import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTreeComponent } from './parent-tree.component';

describe('ParentTreeComponent', () => {
  let component: ParentTreeComponent;
  let fixture: ComponentFixture<ParentTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParentTreeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
