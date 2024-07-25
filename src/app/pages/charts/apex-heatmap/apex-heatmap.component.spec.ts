import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexHeatmapComponent } from './apex-heatmap.component';

describe('ApexHeatmapComponent', () => {
  let component: ApexHeatmapComponent;
  let fixture: ComponentFixture<ApexHeatmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexHeatmapComponent]
    });
    fixture = TestBed.createComponent(ApexHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
