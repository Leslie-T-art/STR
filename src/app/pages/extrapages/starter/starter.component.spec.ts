import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterComponent } from './starter.component';

describe('StarterComponent', () => {
  let component: StarterComponent;
  let fixture: ComponentFixture<StarterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarterComponent]
    });
    fixture = TestBed.createComponent(StarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
