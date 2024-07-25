import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadsComponent } from './file-uploads.component';

describe('FileUploadsComponent', () => {
  let component: FileUploadsComponent;
  let fixture: ComponentFixture<FileUploadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileUploadsComponent]
    });
    fixture = TestBed.createComponent(FileUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
