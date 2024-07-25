import { Component, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { ContactState } from 'src/app/store/reducers/contact-reducer';
import { Store } from '@ngrx/store';
import { addData, deleteContactData, fetchData, updateContactData } from 'src/app/store/actions/contact-action';
import { selectData } from 'src/app/store/selectors/contact.selector';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { RootReducerState } from 'src/app/store/reducers';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})

// Contacts Component
export class ContactsComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  contactForm!: UntypedFormGroup;
  submitted = false;

  contactData!: any;
  allcontactData!: any;
  masterSelected!: boolean;
  files: File[] = [];
  searchTerm!: string;
  searchResults!: any[];
  endIndex: any = 12;

  currentPage = 1;

  @ViewChild('addnew', { static: false }) addnew?: ModalDirective;
  @ViewChild('removeModal', { static: false }) removeModal?: ModalDirective;
  deleteId: any;

  constructor(private formBuilder: UntypedFormBuilder, private store: Store<{ data: RootReducerState }>) {
  }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Pages', active: true },
      { label: 'Contact', active: true }
    ];

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchData());
      this.store.select(selectData).subscribe(data => {
        this.contactData = data
        this.allcontactData = data
        this.contactData = this.allcontactData.slice(0, this.endIndex);
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 500)

    /**
     * Form Validation
     */
    this.contactForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      image: [''],
      designation: ['', [Validators.required]]
    });
  }

  // Page Changed
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.contactData = this.allcontactData.slice(startItem, endItem);
  }

  // Search Data
  performSearch(): void {
    this.searchResults = this.allcontactData.filter((item: any) => {
      return item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.designation.toLowerCase().includes(this.searchTerm.toLowerCase());
    })
    this.contactData = this.searchResults
  }

  // File Upload
  imageURL: string | undefined;
  fileChange(event: any) {
    let fileList: any = (event.target as HTMLInputElement);
    let file: File = fileList.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      document.querySelectorAll('#member-img').forEach((element: any) => {
        element.src = this.imageURL;
      });
      this.contactForm.controls['image'].setValue(this.imageURL);
    }

    reader.readAsDataURL(file)
  }

  /**
* Returns form
*/
  get form() {
    return this.contactForm.controls;
  }

  // Edit Contact
  editContact(id: any) {
    this.submitted = false;
    this.addnew?.show()
    var updatebtn = document.getElementById('add-btn') as HTMLAreaElement
    updatebtn.innerHTML = "Update";
    document.querySelectorAll('#member-img').forEach((element: any) => {
      element.src = this.contactData[id].image;
    });
    this.contactForm.patchValue(this.contactData[id])
  }

  // Add New Contact
  AddContact() {
    if (this.contactForm.valid) {
      if (this.contactForm.get('id')?.value) {
        const updatedData = this.contactForm.value;
        this.store.dispatch(updateContactData({ updatedData }));
        this.showAlert('Updated!', 'contact has been updated.');

      } else {
        this.contactForm.controls['id'].setValue((this.contactData.length + 1).toString());
        const newData = this.contactForm.value;
        this.store.dispatch(addData({ newData }));
        this.showAlert('Added!', 'contact has been Added.');
      }
    }
    this.addnew?.hide()
    document.querySelectorAll('#member-img').forEach((element: any) => {
      element.src = 'assets/images/users/user-dummy-img.jpg';
    });
    this.contactForm.reset()
    this.submitted = true
  }



  // Remove Conatct id
  removeContact(id: any) {
    this.deleteId = id;
    this.removeModal?.show()
  }

  // Delete Contact
  confirmDelete() {
    this.store.dispatch(deleteContactData({ id: this.deleteId }));
    this.removeModal?.hide()
    this.showAlert('Deleted!', 'contact has been delete successfully.');
  }

  // Show Success Alert
  showAlert(title: any, text: any) {
    let timerInterval: any;
    Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonColor: '#299cdb',
      timer: 1000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  }

  // Sort filter
  direction: any = 'asc';
  SortFilter(event: any) {
    if (this.direction == 'asc') {
      this.direction = 'desc'
    } else {
      this.direction = 'asc'
    }
    this.contactData.sort((a: any, b: any) => {
      const res = this.compare(a[event.target.value], b[event.target.value]);
      return this.direction === 'asc' ? res : -res;
    });
  }

  compare(v1: string | number, v2: string | number) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }
}
