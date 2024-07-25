import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexTimelineComponent } from './apex-timeline.component';

describe('ApexTimelineComponent', () => {
  let component: ApexTimelineComponent;
  let fixture: ComponentFixture<ApexTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexTimelineComponent]
    });
    fixture = TestBed.createComponent(ApexTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
