import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexLineComponent } from './apex-line.component';

describe('ApexLineComponent', () => {
  let component: ApexLineComponent;
  let fixture: ComponentFixture<ApexLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexLineComponent]
    });
    fixture = TestBed.createComponent(ApexLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
