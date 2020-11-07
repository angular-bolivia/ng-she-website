import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngs-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ArticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
