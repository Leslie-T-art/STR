import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexCandlestickComponent } from './apex-candlestick.component';

describe('ApexCandlestickComponent', () => {
  let component: ApexCandlestickComponent;
  let fixture: ComponentFixture<ApexCandlestickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexCandlestickComponent]
    });
    fixture = TestBed.createComponent(ApexCandlestickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
