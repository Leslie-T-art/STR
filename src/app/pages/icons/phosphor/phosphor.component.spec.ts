import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhosphorComponent } from './phosphor.component';

describe('PhosphorComponent', () => {
  let component: PhosphorComponent;
  let fixture: ComponentFixture<PhosphorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhosphorComponent]
    });
    fixture = TestBed.createComponent(PhosphorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
