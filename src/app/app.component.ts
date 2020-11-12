import {
  Component,
  OnInit,
  HostListener,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

import * as AOS from 'aos';

import { ScrollTopService } from './core/services/scroll-top.service';

@Component({
  selector: 'ngs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    private scrollTopService: ScrollTopService
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.onWindowScroll();
    this.scrollTopService.activateScrollTop();

    if (isPlatformBrowser(this.platformId)) {
      const body = this.document.getElementsByTagName('body')[0];
      body.classList.add('index-page');
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      const body = this.document.getElementsByTagName('body')[0];
      body.classList.remove('index-page');
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (window.pageYOffset > 100) {
        const element = this.document.getElementById('navbar-top');

        if (element) {
          element.classList.remove('navbar-transparent');
          element.classList.add('bg-danger');
        }
      } else {
        const element = this.document.getElementById('navbar-top');

        if (element) {
          element.classList.add('navbar-transparent');
          element.classList.remove('bg-danger');
        }
      }
    }
  }
}
