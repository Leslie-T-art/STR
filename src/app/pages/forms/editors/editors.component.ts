import { Component } from '@angular/core';
// Ck Editer
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor, TOOLBAR_FULL } from 'ngx-editor';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})
export class EditorsComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  editor: any = Editor;
  public Editor = ClassicEditor;
  toolbar: any = TOOLBAR_FULL;
  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Editors', active: true }
    ];

    this.editor = new Editor();
  }
}
