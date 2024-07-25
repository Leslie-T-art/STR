import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexBubbleComponent } from './apex-bubble.component';

describe('ApexBubbleComponent', () => {
  let component: ApexBubbleComponent;
  let fixture: ComponentFixture<ApexBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexBubbleComponent]
    });
    fixture = TestBed.createComponent(ApexBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
