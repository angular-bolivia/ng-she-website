import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
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
    private element: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object,
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
    if (isPlatformBrowser(this.platformId) && this.enableCheck) {
      const blocks = this.element.nativeElement.querySelectorAll('pre code');

      if (blocks.length) {
        blocks.forEach((block) => {
          hljs.highlightBlock(block);
          hljs.lineNumbersBlock(block);
        });

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
