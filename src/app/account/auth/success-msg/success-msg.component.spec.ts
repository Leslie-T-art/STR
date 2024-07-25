import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMsgComponent } from './success-msg.component';

describe('SuccessMsgComponent', () => {
  let component: SuccessMsgComponent;
  let fixture: ComponentFixture<SuccessMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessMsgComponent]
    });
    fixture = TestBed.createComponent(SuccessMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
