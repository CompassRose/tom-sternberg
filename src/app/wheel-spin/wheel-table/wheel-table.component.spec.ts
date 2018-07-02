import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelTableComponent } from './wheel-table.component';

describe('WheelTableComponent', () => {
  let component: WheelTableComponent;
  let fixture: ComponentFixture<WheelTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
