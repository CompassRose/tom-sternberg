import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldmapLocatorComponent } from './worldmap-locator.component';

describe('WorldmapLocatorComponent', () => {
  let component: WorldmapLocatorComponent;
  let fixture: ComponentFixture<WorldmapLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorldmapLocatorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldmapLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
