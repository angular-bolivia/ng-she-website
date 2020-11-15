import { Component, OnInit, ViewChild } from '@angular/core';

import { Person } from '../../core/models/organizer.model';

@Component({
  selector: 'ngs-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.scss'],
})
export class OrganizersComponent implements OnInit {
  organizers: Person[] = [
    {
      name: 'Maria Griselda Garcia Flores',
      shortName: 'Griss Garcia',
      imageSrc: 'assets/img/organizers/griss.jpg',
      bio: `Ingeniera de sistemas con posgrado en gestión de tecnologías de la información. Desarrolladora web. Lead coorganizer de
        las comunidades: Angular Bolivia, GP4Tech. Women techmaker ambassador, facilitadora #IAmRemarkable. Entusiasta por el
        aprendizaje y la enseñanza. Le gusta ver series, viajar, participar en eventos de tecnología, enseñar programación y
        manejar bicicleta.`,
      socialLinks: [
        {
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/grissgarcia074',
        },
        {
          icon: 'fab fa-linkedin',
          link:
            'https://www.linkedin.com/in/maria-griselda-garcia-flores-b4518b184',
        },
        {
          icon: 'fab fa-github',
          link: 'https://github.com/mariagarciaflores',
        },
      ],
    },
    {
      name: 'Lizzy Mendivil Bejarano',
      shortName: 'Lizzy Mendivil',
      imageSrc: 'assets/img/organizers/lizzy.jpg',
      bio: `Frontend Developer en Jalasoft. Trainer en Fundación Jala. Lead en GP4Tech. Co-Organizer en Angular Bolivia. Le gusta
        compartir sus conocimientos como speaker en tech events y a través de su blog. Cuando no está desarrollando, le gusta
        crear y editar videos para su YouTube channel "La Vida de Li" o practicar mountain bike.`,
      socialLinks: [
        {
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/lizzymendivil',
        },
        {
          icon: 'fab fa-linkedin',
          link: 'https://www.linkedin.com/in/lizzymendivil',
        },
        {
          icon: 'fab fa-github',
          link: 'https://github.com/lizzymendivil',
        },
      ],
    },
    {
      name: 'Gabriela Torrico',
      shortName: 'Gaby Torrico',
      imageSrc: 'assets/img/organizers/gaby.jpg',
      bio: `Una chica extrovertida, amante de las redes sociales y la tecnología, apasionada por el desarrollo web. Disfruta mucho
        enseñar a los demás.`,
      socialLinks: [
        {
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/Gaby_Torrico',
        },
        {
          icon: 'fab fa-linkedin',
          link: 'https://www.linkedin.com/in/gabriela-torrico-33925416a',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
