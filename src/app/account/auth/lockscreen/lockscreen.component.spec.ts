import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockscreenComponent } from './lockscreen.component';

describe('LockscreenComponent', () => {
  let component: LockscreenComponent;
  let fixture: ComponentFixture<LockscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LockscreenComponent]
    });
    fixture = TestBed.createComponent(LockscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
