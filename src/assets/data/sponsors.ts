import { Person } from '../../app/core/models/person.model';

const sponsors: Person[] = [
  {
    name: 'Jala University',
    shortName: 'Jala University',
    imageSrc: 'assets/img/sponsors/jala-university.png',
    bio: `Buscamos transformar las economías de las regiones menos favorecidas a través de la industria del software, creando oportunidades profesionales con un impacto en la vida de las personas, las comunidades y las regiones, pensando en dejar un legado a las futuras generaciones.`,
    socialLinks: [
      {
        icon: 'fas fa-globe',
        link: 'https://jala.university/',
      },
    ],
  },
  {
    name: 'Platzi',
    shortName: 'Platzi',
    imageSrc: 'assets/img/sponsors/platzi.png',
    bio: `Platzi es una de las plataformas de educación profesional en línea más grandes de América Latina, fundada en 2011 por Freddy Vega y Christian Van der Henst. Hoy tenemos 3 millones de estudiantes activos en más de 140 países, miles de cursos y áreas de estudio enfocadas en el desarrollo de habilidades y conocimientos que requieren las grandes empresas del mundo.`,
    socialLinks: [
      {
        icon: 'fas fa-globe',
        link: 'https://platzi.com/',
      },
    ],
  },
];

export default sponsors;
