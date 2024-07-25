import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexTreemapComponent } from './apex-treemap.component';

describe('ApexTreemapComponent', () => {
  let component: ApexTreemapComponent;
  let fixture: ComponentFixture<ApexTreemapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexTreemapComponent]
    });
    fixture = TestBed.createComponent(ApexTreemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
