import { Component, HostListener } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { UntypedFormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { cloneDeep } from 'lodash';

// Get Data
import { filemanagerModel } from '../../../store/models/file-manager.model';
import { fliedata, folder, filerecent, fliefolder, access } from '../../../core/data/file-manager';

import { FileManagerService } from './file-manager.service';
import { RootReducerState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { fetchFileData } from 'src/app/store/actions/filemanager-action';
import { selectData } from 'src/app/store/selectors/filemanager.selector';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss'],
  providers: [FileManagerService, DecimalPipe]
})

// File Manager Component
export class FileManagerComponent {

  folderData: any;
  recentDatas: any;
  quickaccess: any;
  fileList!: Observable<filemanagerModel[]>;
  fliefolders: any;
  file: any;
  storageChart: any;

  files: File[] = [];
  selectedTab: any="Docs Type";
  allrecentData: any;
  endIndex: any = 6;

  isMenuOpen: boolean = false;

  constructor(private formBuilder: UntypedFormBuilder, private store: Store<{ data: RootReducerState }>) {
  }

  ngOnInit(): void {
    document.body.classList.add('file-detail-show');

    // Folder Data Fetch
    this.file = fliedata;
    this.folderData = folder;
    this.fliefolders = fliefolder;
    this.quickaccess = access;

    // Recent Data Fetch
    setTimeout(() => {
      this.store.dispatch(fetchFileData());
      this.store.select(selectData).subscribe(data => {
        this.recentDatas = data
        this.allrecentData = cloneDeep(data);
        this.recentDatas = this.allrecentData.slice(0, this.endIndex);
      })
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 500)

    // Chart Color Data Get Function
    this._storageChart('["--tb-secondary", "--tb-primary", "--tb-light","--tb-danger", "--tb-success"]');
  }

  // Page Changed
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.recentDatas = this.allrecentData.slice(startItem, endItem);
  }

  // File Upload
  imageURL: any;
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    let file: File = event.addedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      setTimeout(() => {
        // this.profile.push(this.imageURL)
      }, 100);
    }
    reader.readAsDataURL(file)
  }

  // Remove File
  onRemove() {
    this.imageURL = ''
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const emailMenuSidebar = document.querySelectorAll('.file-manager-wrapper');
    const emailMenuButtons = document.querySelectorAll('.file-menu-btn');
 
    emailMenuButtons.forEach((item: Element) => {
      if (item.contains(target)) {
        emailMenuSidebar.forEach((elm: Element) => {
          elm.classList.add('menubar-show');
          this.isMenuOpen = true;
        });
      } else {
        if (document.querySelector('.file-manager-wrapper')?.classList.contains('menubar-show') && !this.isMenuOpen) {
          document.querySelector('.file-manager-wrapper')?.classList.remove('menubar-show');
        }
        this.isMenuOpen = false;
      }
    });
  }

  openfileMenu() {
    document.querySelector('#categories-collapse')?.classList.toggle('show')
  }

  // Open Detail
  openDetail(id: any) {
    (document.querySelector('.file-manager-right-wrapper') as HTMLElement).style.display = 'block'
  }

  // Close Detail
  closeDetail() {
    (document.querySelector('.file-manager-right-wrapper') as HTMLElement).style.display = 'none'
  }

  ChangeSelect(tab: any, column: any) {
    this.selectedTab = tab
    this.onSort(column)
  }

  // Sort Data
  direction: any = 'asc';
  onSort(column: any) {
    if (this.direction == 'asc') {
      this.direction = 'desc'
    } else {
      this.direction = 'asc'
    }
    const sortedArray = [...this.recentDatas]; // Create a new array
    sortedArray.sort((a, b) => {
      const res = this.compare(a[column], b[column]);
      return this.direction === 'asc' ? res : -res;
    });
    this.recentDatas = sortedArray;
  }

  compare(v1: string | number, v2: string | number) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }

  // Chart Colors Set
  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
        if (color) {
          color = color.replace(" ", "");
          return color;
        }
        else return newValue;;
      } else {
        var val = value.split(',');
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }

  /**
* Storage Charts
*/
  private _storageChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.storageChart = {
      series: [67],
      chart: {
        height: 315,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: '65%',
            image: 'assets/images/comingsoon.png',
            imageWidth: 56,
            imageHeight: 56,
            imageClipped: false
          },
          dataLabels: {
            name: {
              show: false,
              color: '#fff'
            },
            value: {
              show: true,
              color: '#333',
              offsetY: 65,
              fontSize: '22px'
            }
          }
        }
      },
      fill: {
        type: 'image',
        image: {
          src: ['assets/images/small/img-8.jpg'],
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Volatility'],
    }
  }
}
