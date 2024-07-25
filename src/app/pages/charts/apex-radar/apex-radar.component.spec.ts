import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexRadarComponent } from './apex-radar.component';

describe('ApexRadarComponent', () => {
  let component: ApexRadarComponent;
  let fixture: ComponentFixture<ApexRadarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexRadarComponent]
    });
    fixture = TestBed.createComponent(ApexRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
