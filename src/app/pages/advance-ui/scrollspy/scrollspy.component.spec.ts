import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollspyComponent } from './scrollspy.component';

describe('ScrollspyComponent', () => {
  let component: ScrollspyComponent;
  let fixture: ComponentFixture<ScrollspyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollspyComponent]
    });
    fixture = TestBed.createComponent(ScrollspyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
