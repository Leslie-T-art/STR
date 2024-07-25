import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwostepComponent } from './twostep.component';

describe('TwostepComponent', () => {
  let component: TwostepComponent;
  let fixture: ComponentFixture<TwostepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwostepComponent]
    });
    fixture = TestBed.createComponent(TwostepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
