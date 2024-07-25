import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletComponent } from './leaflet.component';

describe('LeafletComponent', () => {
  let component: LeafletComponent;
  let fixture: ComponentFixture<LeafletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeafletComponent]
    });
    fixture = TestBed.createComponent(LeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
