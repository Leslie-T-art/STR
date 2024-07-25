import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexColumnComponent } from './apex-column.component';

describe('ApexColumnComponent', () => {
  let component: ApexColumnComponent;
  let fixture: ComponentFixture<ApexColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexColumnComponent]
    });
    fixture = TestBed.createComponent(ApexColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
