import { Component, ViewChild } from '@angular/core';
import { kanbanService } from './kanban.service';
import { DecimalPipe } from '@angular/common';
import { Task } from '../../../store/models/kanban.model';
import { Observable } from 'rxjs';
import { kanbanData, member } from '../../../core/data/kanban';
import { DndDropEvent } from 'ngx-drag-drop';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RootReducerState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { addKanbanData, fetchKanbanData } from 'src/app/store/actions/kanban-action';
import { selectData } from 'src/app/store/selectors/kanban.selector';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-kanbanboard',
  templateUrl: './kanbanboard.component.html',
  styleUrls: ['./kanbanboard.component.scss'],
  providers: [kanbanService, DecimalPipe]
})

// Kanbanboard Component
export class KanbanboardComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  submitted = false;
  todoTasks!: Task[];
  inprogressTasks!: Task[];
  reviewsTasks!: Task[];
  doneTasks!: Task[];
  newTasks!: Task[];
  TaskList!: Observable<Task[]>;
  total: Observable<number>;
  alltask?: any;
  board: any;
  mebmerList: any;

  taskForm!: UntypedFormGroup;
  memberForm!: UntypedFormGroup;
  boardForm!: UntypedFormGroup;

  @ViewChild('creatertaskModal', { static: false }) creatertaskModal?: ModalDirective;
  @ViewChild('deleteRecordModal', { static: false }) deleteRecordModal?: ModalDirective;
  @ViewChild('addmemberModal', { static: false }) addmemberModal?: ModalDirective;
  @ViewChild('createboardModal', { static: false }) createboardModal?: ModalDirective;
  allTask: any;
  deletedTask: any;

  constructor(public service: kanbanService, private formBuilder: UntypedFormBuilder, private store: Store<{ data: RootReducerState }>) {
    this.TaskList = service.companies$;
    this.total = service.total$
  }

  ngOnInit(): void {

    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Tasks', active: true },
      { label: 'Kanban Board', active: true }
    ];

    /**
     * Form Validation
     */
    this.memberForm = this.formBuilder.group({
      id: [''],
      image: [''],
      name: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      title: ['', [Validators.required]],
      date: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });

    this.taskForm = this.formBuilder.group({
      id: [''],
      image: [''],
      name: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      category: ['', [Validators.required]],
      progress: ['', [Validators.required]]
    });

    this.boardForm = this.formBuilder.group({
      id: [''],
      board: ['', [Validators.required]],
      color: ['primary']
    })

    /**
    * Data Get Function
    */
    this._fetchData();
  }

  /**
  * Data Fetch
  */
  // 
  private _fetchData() {
    // all tasks
    this.store.dispatch(fetchKanbanData());
    this.store.select(selectData).subscribe(data => {
      this.allTask = data
      this.allTask = cloneDeep(data)
    });
    setTimeout(() => {
      // this.allTask = kanbanData
      this.mebmerList = member
      document.querySelectorAll('add-btn')
      document.getElementById('add-btn')?.classList.remove('d-none')
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1200);
  }

  /**
  * on dragging task
  * @param item item dragged
  * @param list list from item dragged
  */
  onDragged(item: any, list: any) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }


  /**
   * On task drop event
   */
  onDrop(event: DndDropEvent, filteredList?: any[], targetStatus?: string) {
    if (filteredList && event.dropEffect === 'move') {
      let index = event.index;
      if (typeof index === 'undefined') {
        index = filteredList.length;
      }
      filteredList.splice(index, 0, event.data);
    }
  }

  // Add More Data
  addMore(board: any) {
    this.board = board
    this.creatertaskModal?.show()
  }

  selectMember(id: any) {
    this.mebmerList[id].checked = true;
    if (this.mebmerList[id.checked] == true) {
      this.mebmerList[id].checked = false;
    }
  }

  // File Upload
  imageURL: any;
  fileChange(event: any) {
    let fileList: any = (event.target as HTMLInputElement);
    let file: File = fileList.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      document.querySelectorAll('#member-img').forEach((element: any) => {
        element.src = this.imageURL;
      });
    }

    reader.readAsDataURL(file)
  }

  // Add Member
  addMember() {
    if (this.memberForm.valid) {
      member.unshift({
        name: this.memberForm.get('name')?.value,
        avatarURL: this.imageURL
      })
      this.addmemberModal?.hide()
    }
  }

  // Add Board
  addBoard() {
    if (this.boardForm.valid) {
      const newData = {
        id: this.allTask.length,
        ...this.boardForm.value,
        color: 'primary',
        subItem: []
      }
      this.store.dispatch(addKanbanData({ newData }));
      // kanbanData.push({
      //   id: this.allTask.length,
      //   board: this.boardForm.get('board')?.value,
      //   color: 'primary',
      //   subItem: []
      // })
      this.createboardModal?.hide()
    }
  }

  deleteTask(task: any) {
    this.deletedTask = task
    this.deleteRecordModal?.show();
    console.log(task)
  }

  ConfirmDelete() {
    for (const taskGroup of this.allTask) {
      const index = taskGroup.subItem.findIndex((subTask: any) => subTask.id === this.deletedTask.id);
      if (index !== -1) {
        taskGroup.subItem.splice(index, 1);
        break; 
      }
    }
    this.deleteRecordModal?.hide();
  }
}
