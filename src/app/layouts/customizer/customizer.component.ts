import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';
import { RootReducerState, getLayoutTheme, getLayoutMode, getLayoutWith, getLayoutPosition, getTopbarColor, getSidebarSize, getSidebarView, getSidebarColor, getSidebarImage, getPreloader } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { changelayoutTheme, changeMode, changeLayoutWidth, changeLayoutPosition, changeTopbar, changeSidebarSize, changeSidebarView, changeSidebarColor, changeSidebarImage, changeDataPreloader } from 'src/app/store/actions/layout-action';
import { LayoutState } from 'src/app/store/reducers/layout-reducers';
import { initialState } from 'src/app/store/reducers/layout-reducers';
import * as ApexCharts from 'apexcharts';
@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})

// Right Sidebar Component
export class CustomizerComponent {

  rightsidebar: any;
  layout: string | undefined;
  mode: string | undefined;
  width: string | undefined;
  position: string | undefined;
  topbar: string | undefined;
  size: string | undefined;
  sidebarView: string | undefined;
  sidebar: string | undefined;
  attribute: any;
  sidebarImage: any;
  sidebarVisibility: any;
  preLoader: any;
  grd: any;

  state: any;

  initialAppState!: LayoutState;

  constructor(private eventService: EventService, private router: Router, private store: Store<RootReducerState>) { }

  ngOnInit(): void {

    // Subscribe to the state changes
    this.initialAppState = initialState;

    this.store.select('layout').subscribe((data) => {
      this.layout = data.LAYOUT_THEME;
      this.mode = data.LAYOUT_MODE;
      this.width = data.LAYOUT_WIDTH;
      this.position = data.LAYOUT_POSITION;
      this.topbar = data.TOPBAR;
      this.size = data.SIDEBAR_SIZE;
      this.sidebarView = data.SIDEBAR_VIEW;
      this.sidebar = data.SIDEBAR_COLOR;
      this.sidebarImage = data.SIDEBAR_IMAGE;
      this.preLoader = data.DATA_PRELOADER;
    })
    this.attribute = '';
    this.openEnd();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  //  Filter Offcanvas Set
  openEnd() {
    document.querySelector('.custom-offcanvas')?.classList.add('show')
    document.getElementById('backdrop')?.classList.add('show')
    setTimeout(() => {
      this.attribute = document.documentElement.getAttribute('data-layout')
      if (this.attribute == 'vertical') {
        var vertical = document.getElementById('customizer-layout01') as HTMLInputElement;
        if (vertical != null) {
          vertical.setAttribute('checked', 'true');
        }
      }
      if (this.attribute == 'horizontal') {
        const horizontal = document.getElementById('customizer-layout02');
        if (horizontal != null) {
          horizontal.setAttribute('checked', 'true');
        }
      }
      if (this.attribute == 'twocolumn') {
        const Twocolumn = document.getElementById('customizer-layout03');
        if (Twocolumn != null) {
          Twocolumn.setAttribute('checked', 'true');
        }
      }
      if (this.attribute == 'semibox') {
        const Twocolumn = document.getElementById('customizer-layout04');
        if (Twocolumn != null) {
          Twocolumn.setAttribute('checked', 'true');
        }
      }
    }, 100);
  }

  closeoffcanvas() {
    document.querySelector('.custom-offcanvas')?.classList.remove('show')
    document.getElementById('backdrop')?.classList.remove('show')
  }

  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(layout: string) {
    this.attribute = layout;
    this.store.dispatch(changelayoutTheme({ layout }));
    this.store.select(getLayoutTheme).subscribe((data) => {
      document.documentElement.setAttribute('data-layout', data);
    })
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  // Mode Change
  changeMode(mode: string) {
    this.mode = mode;
    this.store.dispatch(changeMode({ mode }));
    this.store.select(getLayoutMode).subscribe((mode) => {
      document.documentElement.setAttribute('data-bs-theme', mode)
    })
  }

  // Width Change
  changeWidth(layoutWidth: string, sidebarSize: string) {
    this.width = layoutWidth;
    this.store.dispatch(changeLayoutWidth({ layoutWidth }));
    this.store.select(getLayoutWith).subscribe((width) => {
      document.documentElement.setAttribute('data-layout-width', width);
    })
    document.documentElement.setAttribute('data-sidebar-size', sidebarSize);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }
  // Position Change
  changePosition(layoutPosition: string) {
    this.position = layoutPosition;
    this.store.dispatch(changeLayoutPosition({ layoutPosition }));
    this.store.select(getLayoutPosition).subscribe((position) => {
      document.documentElement.setAttribute('data-layout-position', position);
    })

  }

  // Topbar Change
  changeTopColor(topbarColor: string) {
    this.topbar = topbarColor;
    this.store.dispatch(changeTopbar({ topbarColor }));
    this.store.select(getTopbarColor).subscribe((color) => {
      document.documentElement.setAttribute('data-topbar', color);
    })

  }

  // Sidebar Size Change
  changeSidebarSize(sidebarSize: string) {
    this.size = sidebarSize;
    this.store.dispatch(changeSidebarSize({ sidebarSize }));
    this.store.select(getSidebarSize).subscribe((size) => {
      document.documentElement.setAttribute('data-sidebar-size', size);
    })
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  // Sidebar Size Change
  changeSidebar(sidebarView: string) {
    this.sidebarView = sidebarView;
    this.store.dispatch(changeSidebarView({ sidebarView }));
    this.store.select(getSidebarView).subscribe((sidebar) => {
      document.documentElement.setAttribute('data-layout-style', sidebar);
    })
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  // Sidebar Color Change
  changeSidebarColor(sidebarColor: string) {
    this.sidebar = sidebarColor;
    this.store.dispatch(changeSidebarColor({ sidebarColor }));
    this.store.select(getSidebarColor).subscribe((color) => {
      document.documentElement.setAttribute('data-sidebar', color);
    })
  }

  // Sidebar Image Change
  changeSidebarImage(sidebarImage: string) {
    this.sidebarImage = sidebarImage;
    this.store.dispatch(changeSidebarImage({ sidebarImage }));
    this.store.select(getSidebarImage).subscribe((img) => {
      document.documentElement.setAttribute('data-sidebar-image', img);
    })

  }

  // PreLoader Image Change
  changeLoader(Preloader: string) {
    this.preLoader = Preloader;
    this.store.dispatch(changeDataPreloader({ Preloader }));
    this.store.select(getPreloader).subscribe((loader) => {
      document.documentElement.setAttribute('data-preloader', loader);
      (document.getElementById("preloader") as HTMLElement).style.opacity = "1";
      (document.getElementById("preloader") as HTMLElement).style.visibility = "";

    })
    var preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(function () {
        (document.getElementById("preloader") as HTMLElement).style.opacity = "0";
        (document.getElementById("preloader") as HTMLElement).style.visibility = "hidden";
      }, 1000);
    }


  }

  // Add Active Class
  addActive(sidebarColor: any) {
    this.grd = sidebarColor;
    this.store.dispatch(changeSidebarColor({ sidebarColor }));
    this.store.select(getSidebarColor).subscribe((grdSidebar) => {
      document.documentElement.setAttribute('data-sidebar', grdSidebar)
    })
    document.getElementById('collapseBgGradient')?.classList.toggle('show');
    document.getElementById('collapseBgGradient1')?.classList.add('active');
  }

  // Remove Active Class
  removeActive() {
    this.grd = '';
    document.getElementById('collapseBgGradient1')?.classList.remove('active');
    document.getElementById('collapseBgGradient')?.classList.remove('show');
  }

}
