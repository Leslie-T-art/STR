import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { changelayoutTheme, changeMode, changeLayoutWidth, changeLayoutPosition, changeTopbar, changeSidebarSize, changeSidebarView, changeSidebarColor, changeSidebarImage, changeDataPreloader } from 'src/app/store/actions/layout-action';
import { RootReducerState, getLayoutState } from 'src/app/store/reducers';
import { LayoutState, initialState } from 'src/app/store/reducers/layout-reducers';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss']
})
export class VerticalComponent {

  isCondensed = false;
  dataloader: any;
  isLoading: any;
  initialAppState!: LayoutState;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<RootReducerState>) { }

  ngOnInit(): void {
    this.initialAppState = initialState;

    this.router.events.subscribe((event: any) => {
      if (document.documentElement.getAttribute('data-preloader') == 'enable') {
        if (event instanceof NavigationEnd) {
          // Update the attribute state based on the current route or any other conditions
          if (event.url !== '/disabled-route') {
            (document.getElementById("preloader") as HTMLElement).style.opacity = "1";
            (document.getElementById("preloader") as HTMLElement).style.visibility = "";
            setTimeout(() => {
              (document.getElementById("preloader") as HTMLElement).style.opacity = "0";
              (document.getElementById("preloader") as HTMLElement).style.visibility = "hidden";
            }, 1000);
          } else {
            (document.getElementById("preloader") as HTMLElement).style.opacity = "0";
            (document.getElementById("preloader") as HTMLElement).style.visibility = "hidden";
          }
        }
      }
    });
  }

  /**
  * On mobile toggle button clicked
  */
  onToggleMobileMenu() {
    const currentSIdebarSize = document.documentElement.getAttribute("data-sidebar-size");
    if (document.documentElement.clientWidth >= 767) {
      if (currentSIdebarSize == null) {
        (document.documentElement.getAttribute('data-sidebar-size') == null || document.documentElement.getAttribute('data-sidebar-size') == "lg") ? document.documentElement.setAttribute('data-sidebar-size', 'sm') : document.documentElement.setAttribute('data-sidebar-size', 'lg')
      } else if (currentSIdebarSize == "md") {
        (document.documentElement.getAttribute('data-sidebar-size') == "md") ? document.documentElement.setAttribute('data-sidebar-size', 'sm') : document.documentElement.setAttribute('data-sidebar-size', 'md')
      } else {
        (document.documentElement.getAttribute('data-sidebar-size') == "sm") ? document.documentElement.setAttribute('data-sidebar-size', 'lg') : document.documentElement.setAttribute('data-sidebar-size', 'sm')
      }
    }

    if (document.documentElement.clientWidth <= 767) {
      document.body.classList.toggle('vertical-sidebar-enable');
    }
    this.isCondensed = !this.isCondensed;
  }

  /**
   * on settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
    const rightBar = document.getElementById('theme-settings-offcanvas');
    if (rightBar != null) {
      rightBar.classList.toggle('show');
      rightBar.setAttribute('style', "visibility: visible;");

    }
  }
}
