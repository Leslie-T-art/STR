import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesComponent } from './utilities.component';

describe('UtilitiesComponent', () => {
  let component: UtilitiesComponent;
  let fixture: ComponentFixture<UtilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilitiesComponent]
    });
    fixture = TestBed.createComponent(UtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
