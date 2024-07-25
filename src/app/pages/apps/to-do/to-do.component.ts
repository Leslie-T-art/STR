import { Component, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormArray, Validators, UntypedFormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { cloneDeep } from 'lodash';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { todoList, AssignedData, projectList } from '../../../core/data/to-do';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { RootReducerState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { addTodoData, deleteTodoData, fetchTodoData, updateTodoData } from 'src/app/store/actions/to-do-action';
import { selectData, selectDataLoading } from 'src/app/store/selectors/to-do.selector';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})

// To Do Component
export class ToDoComponent {

  todoDatas: any;
  deleteId: any;
  assignList: any;
  todoForm!: UntypedFormGroup;
  submitted = false;
  projectData: any;
  term: any;

  @ViewChild('createProjectModal', { static: false }) createProjectModal?: ModalDirective;
  @ViewChild('createTask', { static: false }) createTask?: ModalDirective;
  @ViewChild('removeTaskItemModal', { static: false }) removeTaskItemModal?: ModalDirective;
  alltodoDatas: any;

  constructor(private formBuilder: UntypedFormBuilder, private datePipe: DatePipe, private store: Store<{ data: RootReducerState }>) { }


  ngOnInit(): void {

    this.projectData = projectList;
    // Fetch Data
    this.store.dispatch(fetchTodoData());
    this.store.select(selectDataLoading).subscribe(data => {
      if (data == false) {
        document.getElementById('elmLoader')?.classList.add('d-none')
      }
    })
    this.store.select(selectData).subscribe(data => {
      this.alltodoDatas = data
      this.todoDatas = cloneDeep(data)
    });

    setTimeout(() => {
      this.assignList = AssignedData;
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1000);

    /**
    * Form Validation
    */
    this.todoForm = this.formBuilder.group({
      id: [''],
      task: ['', [Validators.required]],
      status: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      subItem: [''],
      checked: [false],
    });

  }

  /**
 * Form data get
 */
  get form() {
    return this.todoForm.controls;
  }

  collapse(collapse: any) {
    document.getElementById(collapse)?.classList.toggle('show')
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.todoDatas, event.previousIndex, event.currentIndex);
  }

  // Checked Selected
  checkUncheckAll(e: any, id: any, i: any) {
    console.log(e.target.checked)
    if (e.target.checked == true) {
      this.todoDatas[i].checked = e.target.checked
      this.todoDatas[i].status = 'Completed'
    } else {
      console.log(this.todoDatas[i])
      this.todoDatas[i].checked = e.target.checked
      this.todoDatas[i].status = 'Inprogress'
    }
  }

  // Add Member
  assignmember: any = [];
  slectMember(id: any) {
    this.assignmember.push(this.assignList[id])
  }

  // Edit Data
  econtent?: any;
  editData(id: any) {
    this.submitted = false;
    this.createTask?.show()
    this.econtent = this.todoDatas[id];
    this.assignmember = this.econtent.subItem
    this.todoForm.controls['task'].setValue(this.econtent.task);
    this.todoForm.controls['dueDate'].setValue(this.econtent.dueDate);
    this.todoForm.controls['status'].setValue(this.econtent.status);
    this.todoForm.controls['priority'].setValue(this.econtent.priority);
    this.todoForm.controls['subItem'].setValue(this.econtent.subItem);
    this.todoForm.controls['id'].setValue(this.econtent.id);
  }

  /**
  * Save Todo data
  */
  saveTodo() {
    if (this.todoForm.valid) {
      if (this.todoForm.get('id')?.value) {
        if (this.todoForm.get('status')?.value == 'Completed') {
          this.todoForm.controls['checked'].setValue(true);
        }
        this.todoForm.controls['dueDate'].setValue(this.datePipe.transform(this.todoForm.get('dueDate')?.value, 'dd MMM, yyyy'));
        const updatedData = this.todoForm.value;
        this.store.dispatch(updateTodoData({ updatedData }));
      } else {
        const subItem = this.assignmember;
        this.todoForm.controls['checked'].setValue(false);
        this.todoForm.controls['id'].setValue((this.todoDatas.length + 1).toString());
        this.todoForm.controls['dueDate'].setValue(this.datePipe.transform(this.todoForm.get('dueDate')?.value, 'dd MMM, yyyy'));
        const newData = {
          ...this.todoForm.value,
          subItem
        }
        this.store.dispatch(addTodoData({ newData }));
      }
    }
    setTimeout(() => {
      this.todoForm.reset();
    }, 2000);
    this.createTask?.hide()
    this.submitted = true
  }




  /**
   * Delete Model Open
   */
  removeData(id: any) {
    this.deleteId = id;
    this.removeTaskItemModal?.show()
  }

  // Delete Data
  confirmDelete() {
    this.store.dispatch(deleteTodoData({ id: this.deleteId }));
    this.removeTaskItemModal?.hide()
  }

  // Location Filter
  taskFilter() {
    var status = (document.getElementById("choices-select-status") as HTMLInputElement).value;
    if (status) {
      this.todoDatas = cloneDeep(todoList.filter((data: any) => {
        return data.status === status;
      }));
    }
    else {
      this.todoDatas = cloneDeep(this.alltodoDatas)
    }
  }

  // Sort filter
  direction: any = 'asc';
  SortFilter(event: any) {
    if (this.direction == 'asc') {
      this.direction = 'desc'
    } else {
      this.direction = 'asc'
    }
    this.todoDatas.sort((a: any, b: any) => {
      const res = this.compare(a[event.target.value], b[event.target.value]);
      return this.direction === 'asc' ? res : -res;
    });
  }

  compare(v1: string | number, v2: string | number) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }

  // Search Data
  searchTerm() {
    if (this.term) {
      this.todoDatas = cloneDeep(todoList.filter((el: any) => el.task.toLowerCase().includes(this.term.toLowerCase())));
    } else {
      this.todoDatas = cloneDeep(this.alltodoDatas)
    }
  }
}
