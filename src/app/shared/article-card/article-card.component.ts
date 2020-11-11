import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngs-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() date = '';
  @Input() link = '';
  @Input() imageSrc = 'assets/img/ng-bolivia.jpg';

  constructor() {}

  ngOnInit(): void {}
}
