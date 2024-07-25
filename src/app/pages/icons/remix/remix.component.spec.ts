import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemixComponent } from './remix.component';

describe('RemixComponent', () => {
  let component: RemixComponent;
  let fixture: ComponentFixture<RemixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemixComponent]
    });
    fixture = TestBed.createComponent(RemixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
