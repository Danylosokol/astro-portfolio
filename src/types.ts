export type Metadata = {
  title: string;
  description: string;
}

export type Link = {
  name: string;
  href: string;
  icon?: string; 
}

export type Image = {
  src: string;
  alt: string;
}

export type Navbar = {
  logo: Image;
  links: Link[];
}

export type Socials = {
  email: Link;
  github: Link;
  facebook: Link;
  linkedin: Link;
  leetcode: Link;
};

export type Hero = {
  title: string;
  description: string;
  location: string;
  socials: Socials;
  cv: Link;
  image: Image;
};

export type Skills = string[]