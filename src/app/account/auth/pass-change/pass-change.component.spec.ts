import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassChangeComponent } from './pass-change.component';

describe('PassChangeComponent', () => {
  let component: PassChangeComponent;
  let fixture: ComponentFixture<PassChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassChangeComponent]
    });
    fixture = TestBed.createComponent(PassChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
