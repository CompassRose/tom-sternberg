import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSaveItemsComponent } from './filter-save-items.component';

describe('FilterSaveItemsComponent', () => {
  let component: FilterSaveItemsComponent;
  let fixture: ComponentFixture<FilterSaveItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSaveItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSaveItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
