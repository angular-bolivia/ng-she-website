import {
  AfterViewChecked,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { filter } from 'rxjs/operators';

import { MetaTagsUpdaterService } from '../../core/services/meta-tags-updater.service';

declare const hljs: any;

@UntilDestroy()
@Component({
  selector: 'ngs-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ArticleComponent implements OnInit, AfterViewChecked {
  links: ScullyRoute[] = [];
  enableCheck: boolean;
  currentUrl: string;

  constructor(
    private router: Router,
    private scully: ScullyRoutesService,
    private metaUpdater: MetaTagsUpdaterService
  ) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;

    this.scully.available$.pipe(untilDestroyed(this)).subscribe((links) => {
      this.links = links;
      this.updateArticleData();
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(({ url }: NavigationEnd) => {
        this.currentUrl = url;
        this.updateArticleData();
      });
  }

  ngAfterViewChecked(): void {
    if (this.enableCheck) {
      const elements = document.querySelectorAll('pre code');

      if (elements.length) {
        elements.forEach((block) => hljs.highlightBlock(block));

        this.enableCheck = false;
      }
    }
  }

  private updateArticleData(): void {
    this.enableCheck = true;

    if (this.currentUrl && this.links?.length) {
      const currentLink = this.links.find(
        (link) => link.route === this.currentUrl
      );
      const { title, description } = currentLink;

      if (title && description) {
        this.metaUpdater.updateMetaTags(title, description);
      }
    }
  }
}
