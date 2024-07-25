import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalComponent } from './vertical.component';

describe('VerticalComponent', () => {
  let component: VerticalComponent;
  let fixture: ComponentFixture<VerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalComponent]
    });
    fixture = TestBed.createComponent(VerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
