import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { timer } from 'rxjs';

import { Organizer } from '../../core/models/organizer.model';

@Component({
  selector: 'ngs-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.scss'],
})
export class OrganizersComponent implements OnInit {
  @ViewChild('organizerModal') organizerModal: ModalDirective;
  selectedOrganizer: Organizer;
  organizers: Organizer[] = [
    {
      name: 'Griss Garcia',
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
      name: 'Lizzy Mendivil',
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
      name: 'Gaby Torrico',
      imageSrc: 'assets/img/organizers/gaby.jpg',
      bio: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  openOrganizerModal(organizer: Organizer): void {
    this.selectedOrganizer = organizer;

    timer(0).subscribe(() => this.organizerModal.show());
  }
}
