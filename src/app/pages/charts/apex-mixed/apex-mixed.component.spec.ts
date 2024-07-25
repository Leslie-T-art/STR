import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexMixedComponent } from './apex-mixed.component';

describe('ApexMixedComponent', () => {
  let component: ApexMixedComponent;
  let fixture: ComponentFixture<ApexMixedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexMixedComponent]
    });
    fixture = TestBed.createComponent(ApexMixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
