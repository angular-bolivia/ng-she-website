import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ngs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // this.onWindowScroll();
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');
  }

  ngOnDestroy(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (window.pageYOffset > 100) {
      var element = document.getElementById('navbar-top');
      if (element) {
        element.classList.remove('navbar-transparent');
        element.classList.add('bg-danger');
      }
    } else {
      var element = document.getElementById('navbar-top');
      if (element) {
        element.classList.add('navbar-transparent');
        element.classList.remove('bg-danger');
      }
    }
  }
}
