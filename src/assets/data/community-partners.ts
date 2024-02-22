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
];

export default communityPartners;
