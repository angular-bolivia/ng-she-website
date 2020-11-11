import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngs-main-articles',
  templateUrl: './main-articles.component.html',
  styleUrls: ['./main-articles.component.scss'],
})
export class MainArticlesComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
