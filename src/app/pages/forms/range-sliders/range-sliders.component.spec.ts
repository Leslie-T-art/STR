import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSlidersComponent } from './range-sliders.component';

describe('RangeSlidersComponent', () => {
  let component: RangeSlidersComponent;
  let fixture: ComponentFixture<RangeSlidersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeSlidersComponent]
    });
    fixture = TestBed.createComponent(RangeSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
