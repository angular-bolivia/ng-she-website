import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    this.onWindowScroll();
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (window.pageYOffset > 100) {
      const element = document.getElementById('navbar-top');

      if (element) {
        element.classList.remove('navbar-transparent');
        element.classList.add('bg-danger');
      }
    } else {
      const element = document.getElementById('navbar-top');

      if (element) {
        element.classList.add('navbar-transparent');
        element.classList.remove('bg-danger');
      }
    }
  }
}
