import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasComponent } from './offcanvas.component';

describe('OffcanvasComponent', () => {
  let component: OffcanvasComponent;
  let fixture: ComponentFixture<OffcanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffcanvasComponent]
    });
    fixture = TestBed.createComponent(OffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
