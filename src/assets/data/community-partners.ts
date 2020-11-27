import { Person } from '../../app/core/models/person.model';

const communityPartners: Person[] = [
  {
    name: 'GP4Tech',
    shortName: 'GP4Tech',
    imageSrc: 'assets/img/communities/gp4tech.png',
    bio: `Comunidad con el fin de incentivar y motivar a más mujeres a participar del área de tecnología, mediante charlas y actividades, organizadas por Ingenieras Jala.`,
    socialLinks: [
      {
        icon: 'fab fa-facebook-f',
        link: 'https://www.facebook.com/GP4TechJala/',
      },
      {
        icon: 'fab fa-instagram',
        link: 'https://www.instagram.com/GP4Tech/',
      },
      {
        icon: 'fas fa-globe',
        link: 'https://gp4tech.com/',
      },
    ],
  },
    {
    name: 'Pyladies Cochabamba',
    shortName: 'Pyladies Cbba',
    imageSrc: 'assets/img/communities/pyladies.png',
    bio: `Comunidad dedicada a motivar el aprendizaje continuo de Python y todas sus áreas.`,
    socialLinks: [
      {
        icon: 'fab fa-facebook-f',
        link: 'https://www.facebook.com/PyladiesCbba',
      },
      {
        icon: 'fab fa-youtube',
        link: 'https://www.youtube.com/channel/UCBswMR-90vqUl4grmDXnu8Q',
      },
    ],
  },
  {
    name: 'Sociedad Científica de Estudiantes',
    shortName: 'Scesi',
    imageSrc: 'assets/img/communities/scesi.png',
    bio: `SCESI, es una sociedad que la componen estudiantes, que tienen como objetivo el realizar investigación en todo lo relacionado a las ciencias de la computación y ademas a la difusión del software libre.`,
    socialLinks: [
      {
        icon: 'fab fa-facebook-f',
        link: 'https://www.facebook.com/scesi/',
      },
      {
        icon: 'fas fa-globe',
        link: 'http://www.scesi.org/',
      },
    ],
  },
];

export default communityPartners;
