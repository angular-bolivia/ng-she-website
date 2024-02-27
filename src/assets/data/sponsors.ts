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
  {
    name: 'Ucatec',
    shortName: 'Ucatec',
    imageSrc: 'assets/img/sponsors/ucatec.png',
    bio: `La Universidad UCATEC, ubicada en Cochabamba, se destaca como la pionera en formación de emprendedores a nivel nacional e internacional. Ofrece un modelo educativo innovador, SEPCO 5.0, que promueve el desarrollo pleno de habilidades a través de retos y métodos no convencionales, como visitas guiadas y trabajo multidisciplinario. Con un enfoque en competencias transversales, prepara a sus estudiantes para contribuir al desarrollo sostenible con propuestas creativas y técnicas.`,
    socialLinks: [
      {
        icon: 'fas fa-globe',
        link: 'https://ucatec.edu.bo/',
      },
    ],
  },
  {
    name: 'Kevin Farid',
    shortName: 'Kevin Farid',
    imageSrc: 'assets/img/sponsors/kevin-farid.jpeg',
    bio: `Kevin es Google Developer Expert en Angular, Frontend Engineer con mas de 5 años de experiencia, principalmente con Angular en ambientes bancarios, fintech y producto.`,
    socialLinks: [
      {
        icon: 'fab fa-twitter',
        link: 'https://twitter.com/kevindaviladev/',
      },
      {
        icon: 'fab fa-youtube',
        link: 'https://www.youtube.com/kevindaviladev',
      },
    ],
  },
];

export default sponsors;
