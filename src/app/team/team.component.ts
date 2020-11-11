import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { timer } from 'rxjs';

import { Organizer } from '../core/models/organizer.model';

@Component({
  selector: 'ngs-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  @ViewChild('organizerModal') organizerModal: ModalDirective;
  selectedOrganizer: Organizer;
  organizers: Organizer[] = [
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
    {
      name: 'Daniela Villalobos',
      shortName: 'Dani Villalobos',
      imageSrc: 'assets/img/organizers/dani.jpg',
      bio: `Technical Writer, con 4 años de experiencia, amante de los números y apasionada por la enseñanza, docente de varias
        materias de universidad, la mayoría relacionadas con números.`,
    },
    {
      name: 'Gustavo Pacchi Villarroel',
      shortName: 'Gustavo Pacchi',
      imageSrc: 'assets/img/organizers/gus.jpg',
      bio: `Entusiasta de los eventos de tecnología y el diseño, estudió ingeniería de sistemas, le gustan los libros, la
        actividad física y la salud mental.`,
      socialLinks: [
        {
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/guszUIUX',
        },
        {
          icon: 'fab fa-linkedin',
          link: 'https://www.linkedin.com/in/gustavo-pacchi-villarroel',
        },
        {
          icon: 'fab fa-github',
          link: 'https://github.com/gustavopacchi',
        },
      ],
    },
    {
      name: 'Mauricio Arce Torrez',
      shortName: 'Mauricio Arce',
      imageSrc: 'assets/img/organizers/mauri.jpg',
      bio: `Mauricio es un apasionado del desarrollo web y de participar en comunidades. Graduado de la carrera de Ingeniería de
        Sistemas, actualmente trabaja como desarrollador de software en Jalasoft. Es parte del equipo co-organizador de la
        comunidad Angular Bolivia, y miembro activo de las comunidades GP4Tech y Startup Weekend Cochabamba. Ha participado en
        varias actividades llevadas a cabo por las comunidades ya nombradas, además de otras como ser GDG Cochabamba y Women
        Techmakers Cochabamba, brindando su apoyo en tareas de desarrollo web y mentoría. En su tiempo libre, a Mauri le gusta
        mucho hacer rutas de XC en bicicleta de montaña.`,
      socialLinks: [
        {
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/combimauri',
        },
        {
          icon: 'fab fa-linkedin',
          link: 'https://www.linkedin.com/in/combimauri',
        },
        {
          icon: 'fab fa-github',
          link: 'https://github.com/combimauri',
        },
      ],
    },
    {
      name: 'Brian Dennis Vega Hidalgo',
      shortName: 'Brian Vega',
      imageSrc: 'assets/img/organizers/brian.jpg',
      bio: `Desarrollador mobile con más de 5 años de experiencia. Participante y organizador de las comunidades StartupWeekend y
        Flutter Bolivia. Le encantan los videojuegos y los juegos de mesa.`,
      socialLinks: [
        {
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/BrianDVegaH',
        },
        {
          icon: 'fab fa-linkedin',
          link: 'https://www.linkedin.com/in/brian-dennis-vega-hidalgo',
        },
        {
          icon: 'fab fa-github',
          link: 'https://github.com/DentVega',
        },
      ],
    },
    {
      name: 'Fernando Quinteros Gutierrez',
      shortName: 'Fernando Quinteros',
      imageSrc: 'assets/img/organizers/fer.jpg',
      bio: `Fernando es un estudiante del colegio San Agustín, entusiasmado por crear proyectos con tecnologías web y mobile. Le
        gusta poder compartir su conocimiento por diferentes medios como ser su blog personal o dando charlas técnicas.`,
      socialLinks: [
        {
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/devferx',
        },
        {
          icon: 'fab fa-linkedin',
          link: 'https://www.linkedin.com/in/devferx',
        },
        {
          icon: 'fab fa-github',
          link: 'https://github.com/devferx',
        },
      ],
    },
    {
      name: 'Ivo Rojas',
      shortName: 'Ivo Rojas',
      imageSrc: 'assets/img/organizers/ivo.jpg',
      bio: `Desarrollador de software, amante de la tecnología, naturaleza, artes visuales y el bienestar personal.`,
      socialLinks: [
        {
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/ircube',
        },
        {
          icon: 'fab fa-linkedin',
          link: 'https://www.linkedin.com/in/ivo-rojas-415aa244',
        },
        {
          icon: 'fab fa-github',
          link: 'https://github.com/ircube',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  openOrganizerModal(organizer: Organizer): void {
    this.selectedOrganizer = organizer;

    timer(0).subscribe(() => this.organizerModal.show());
  }
}
