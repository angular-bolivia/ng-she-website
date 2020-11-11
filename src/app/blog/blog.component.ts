import { Component, OnInit } from '@angular/core';

import { MetaTagsUpdaterService } from '../core/services/meta-tags-updater.service';

declare var ng: any;

@Component({
  selector: 'ngs-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  articles = [
    {
      title: 'Código de conducta',
      description: `ng|she tiene como objetivo engrandecer la comunidad de Angular, llevando a más
        personas a utilizar el framework por medio de un workshop introductorio de 4 horas de duración. Es un
        evento que reúne mentores y participantes para generar una red de conocimientos, donde se espera que en un
        futuro estos participantes se conviertan en nuevos mentores.`,
      date: '7 de Noviembre, 2020',
      link: '/blog/code-of-conduct',
    },
  ];

  constructor(private metaUpdater: MetaTagsUpdaterService) {}

  ngOnInit(): void {
    this.metaUpdater.updateMetaTags(
      'Blog',
      'Lee los últimos artículos relacionados al ng|she y sus políticas.'
    );
  }
}
