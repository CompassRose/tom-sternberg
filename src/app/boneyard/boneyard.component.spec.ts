import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoneyardComponent } from './boneyard.component';

describe('BoneyardComponent', () => {
  let component: BoneyardComponent;
  let fixture: ComponentFixture<BoneyardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoneyardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoneyardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
