import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxsRadiosComponent } from './checkboxs-radios.component';

describe('CheckboxsRadiosComponent', () => {
  let component: CheckboxsRadiosComponent;
  let fixture: ComponentFixture<CheckboxsRadiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxsRadiosComponent]
    });
    fixture = TestBed.createComponent(CheckboxsRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
