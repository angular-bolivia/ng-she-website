import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [BlogComponent, ArticleComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule],
})
export class BlogModule {}
