import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnSidebarComponent } from './two-column-sidebar.component';

describe('TwoColumnSidebarComponent', () => {
  let component: TwoColumnSidebarComponent;
  let fixture: ComponentFixture<TwoColumnSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoColumnSidebarComponent]
    });
    fixture = TestBed.createComponent(TwoColumnSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
