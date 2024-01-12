import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollTopService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router
  ) {}

  activateScrollTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(() => window.scroll(0, 0));
    }
  }
}
