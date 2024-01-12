import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaTagsUpdaterService {
  private readonly DEFAULT_TITLE = 'ng|she';
  private readonly DEFAULT_DESCRIPTION = `ng|she es un taller que busca que la industria TECH se beneficie
    con la inclusión de más personas en el área de la programación.`;

  constructor(private title: Title, private meta: Meta) {}

  updateMetaTags(
    title = this.DEFAULT_TITLE,
    description = this.DEFAULT_DESCRIPTION
  ): void {
    title = title === this.DEFAULT_TITLE ? title : `${title} - ng|she`;

    this.title.setTitle(title);
    this.meta.updateTag({
      name: 'og:title',
      content: title,
    });
    this.meta.updateTag({
      name: 'og:site_name',
      content: title,
    });
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
    this.meta.updateTag({
      name: 'og:description',
      content: description,
    });
  }
}
