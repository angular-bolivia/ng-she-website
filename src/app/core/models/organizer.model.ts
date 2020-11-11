interface SocialLink {
  icon: string;
  link: string;
}

export interface Organizer {
  name: string;
  shortName: string;
  imageSrc: string;
  bio: string;
  socialLinks?: SocialLink[];
}
