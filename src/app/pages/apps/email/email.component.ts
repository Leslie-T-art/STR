import { Component, HostListener, Renderer2, ViewChild } from '@angular/core';

// Email Data Get
import { primary } from '../../../core/data/email';

// Moadl Directive
import { ModalDirective } from 'ngx-bootstrap/modal';

// Ck Editer
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})

// Email Component
export class EmailComponent {

  public Editor = ClassicEditor;
  emailData: any;
  allemailData: any;
  emailIds: number[] = [];
  masterSelected!: boolean;
  cat: any;
  searchkey: any;

  isMenuOpen: boolean = false;

  @ViewChild('removeItemModal', { static: false }) removeItemModal?: ModalDirective;


  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    /**
   * Fetches the data
   */
    this.fetchData();
  }

  // CC BCC Collape
  collapse(id: any) {
    document.querySelector('#' + id)?.classList.toggle('show')
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.masterSelected = ev.target.checked;
    this.emailData.forEach((x: { state: any; }) => x.state = ev.target.checked)
    if (ev.target.checked) {
      (document.getElementById("email-topbar-actions") as HTMLElement).style.display = "block"
    }
    else {
      (document.getElementById("email-topbar-actions") as HTMLElement).style.display = "none"
    }
  }

  /**
* Fetches the data
*/
  private fetchData() {
    document.getElementById('emaildata')?.classList.add('d-none')
    setTimeout(() => {
      document.getElementById('emaildata')?.classList.remove('d-none')
      this.emailData = primary;
      this.allemailData = primary;
      // this.dataCount = this.emailDatas.length
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1000);
  }

  /**
* Category Filtering  
*/
  categoryFilter(e: any, name: any) {
    this.emailData = primary
    var removeClass = document.querySelectorAll('.mail-list a');
    removeClass.forEach((element: any) => {
      element.classList.remove('active');
    });
    e.target.closest('.mail-list a').classList.add('active')
    if (name == 'all') {
      this.emailData = this.emailData
    }
    else {
      this.emailData = this.emailData.filter((email: any) => {
        return email.tabtype === name;
      });
    }
  }

  /**
* Label Filtering  
*/
  labelsFilter(e: any, name: any) {
    this.emailData = primary
    var removeClass = document.querySelectorAll('.mail-list a');
    removeClass.forEach((element: any) => {
      element.classList.remove('active');
    });
    e.target.closest('.mail-list a').classList.add('active')
    this.emailData = this.emailData.filter((email: any) => {
      return email.labeltype === name;
    });
  }

  /**
* Chat Filtering  
*/
  userName: any
  profile: any = 'user-dummy-img.jpg';
  chatFilter(e: any, name: any, image: any) {
    const list = document.querySelector('.email-chat-list');
    const chatlist = list?.querySelectorAll('a');
    chatlist?.forEach((item: any) => {
      item.classList.remove('active')
    });
    e.target.closest('a').classList.add('active');

    (document.getElementById("emailchat-detailElem") as HTMLElement).style.display = "block";
    this.userName = name;
    this.profile = image ? image : 'user-dummy-img.jpg';
  }

  // Close Chat
  closeChat() {
    (document.getElementById("emailchat-detailElem") as HTMLElement).style.display = "none";
  }

  /**
* on settings button clicked from topbar
*/
  singleData: any = [];
  onSettingsButtonClicked(event: any, id: any) {
    this.singleData = this.emailData.filter((order: any) => {
      return order.id === id;
    });
    this.singleData.forEach((item: any) => {
      this.singleData = item;
    })
    document.body.classList.add('email-detail-show');
  }

  /**
* Hide the sidebar
*/
  public hide() {
    document.body.classList.remove('email-detail-show');
  }

  // Active Star
  activeStar(id: any, i: any) {
    if (this.emailData[i].tabtype != 'Starred') {
      this.cat = this.emailData[i].tabtype
      this.emailData[i].tabtype = 'Starred'
    } else {
      this.emailData[i].tabtype = this.cat
    }

    document.querySelector('.star_' + id)?.classList.toggle('active');
  }

  /***
    * send mail select multiple mail
    */
  selectMail(event: any, id: any) {
    var checkboxes: any = document.getElementsByName('checkall');
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        result = checkboxes[i].value;
        checkedVal.push(result);
      }
    }
    this.emailIds = checkedVal
    this.emailIds.length > 0 ? (document.getElementById("email-topbar-actions") as HTMLElement).style.display = "block" : (document.getElementById("email-topbar-actions") as HTMLElement).style.display = "none";
    this.masterSelected = this.emailIds.length > 0 ? true : false
  }

  /**
 * Confirmation mail model
 */
  confirm() {
    this.removeItemModal?.show();
    var checkboxes: any = document.getElementsByName('checkall');
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        result = checkboxes[i].value;
        checkedVal.push(result);
      }
    }
    this.emailIds = checkedVal
  }

  /***
   * Delete Mail
   */
  deleteData() {
    if (this.emailIds.length > 0) {
      this.emailIds.forEach((item: any) => {
        document.getElementById('chk-' + item)?.remove();
        for (var i = 0; i < this.emailData.length; i++) {
          if (this.emailData[i].id == item) {
            this.emailData[i].tabtype = 'Trash'
          }
        }
      });
      (document.getElementById("email-topbar-actions") as HTMLElement).style.display = "none";
    } else {
      for (var i = 0; i < this.emailData.length; i++) {
        if (this.emailData[i].id == this.singleData.id) {
          this.emailData.splice(i, 1)
          this.emailData = this.emailData
          document.body.classList.remove('email-detail-show');
        }
      }
    }
    this.removeItemModal?.hide();
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const emailMenuSidebar = document.querySelectorAll('.email-menu-sidebar');
    const emailMenuButtons = document.querySelectorAll('.email-menu-btn');

    emailMenuButtons.forEach((item: Element) => {
      if (item.contains(target)) {
        emailMenuSidebar.forEach((elm: Element) => {
          elm.classList.add('menubar-show');
          this.isMenuOpen = true;
        });
      } else {
        if (document.querySelector('.email-menu-sidebar')?.classList.contains('menubar-show') && !this.isMenuOpen) {
          document.querySelector('.email-menu-sidebar')?.classList.remove('menubar-show');
        }
        this.isMenuOpen = false;
      }
    });
  }


  // Search Mail
  searchMail() {
    if (this.searchkey) {
      this.emailData = this.allemailData.filter((el: any) => el.name.toLowerCase().includes(this.searchkey.toLowerCase()) || el.title.toLowerCase().includes(this.searchkey.toLowerCase()))
    } else {
      this.emailData = primary
    }
  }

  // mark as read
  markasRead() {
    console.log('hkjh')
    this.emailData.forEach((x: { readed: any; }) => x.readed = true)
  }

}
