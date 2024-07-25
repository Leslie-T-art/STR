import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexRadialbarComponent } from './apex-radialbar.component';

describe('ApexRadialbarComponent', () => {
  let component: ApexRadialbarComponent;
  let fixture: ComponentFixture<ApexRadialbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexRadialbarComponent]
    });
    fixture = TestBed.createComponent(ApexRadialbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
