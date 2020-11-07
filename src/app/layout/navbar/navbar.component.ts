import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  constructor() {}

  ngOnInit(): void {}
}
