import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickersComponent } from './pickers.component';

describe('PickersComponent', () => {
  let component: PickersComponent;
  let fixture: ComponentFixture<PickersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickersComponent]
    });
    fixture = TestBed.createComponent(PickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
