interface SocialLink {
  icon: string;
  link: string;
}

export interface Person {
  name: string;
  shortName: string;
  imageSrc: string;
  bio: string;
  socialLinks?: SocialLink[];
}
