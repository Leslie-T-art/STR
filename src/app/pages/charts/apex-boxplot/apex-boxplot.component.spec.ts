import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexBoxplotComponent } from './apex-boxplot.component';

describe('ApexBoxplotComponent', () => {
  let component: ApexBoxplotComponent;
  let fixture: ComponentFixture<ApexBoxplotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexBoxplotComponent]
    });
    fixture = TestBed.createComponent(ApexBoxplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
