import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTopbarComponent } from './horizontal-topbar.component';

describe('HorizontalTopbarComponent', () => {
  let component: HorizontalTopbarComponent;
  let fixture: ComponentFixture<HorizontalTopbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalTopbarComponent]
    });
    fixture = TestBed.createComponent(HorizontalTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
