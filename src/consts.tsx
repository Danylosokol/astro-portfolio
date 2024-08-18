import type { Hero, Metadata, Navbar, Skills, Socials } from "@types";

import logoImg from "@assets/img/components/logo.webp";
import profileImg from '@assets/img/pages/homepage/hero/profile-pic.webp'

export const HOME: Metadata = {
  title: "Danylo Sokol - Software Engineer",
  description:
    "Software Engineer with over 2 years' experience. First class honours degree in Computer Science. Specialised in React.js, TypeScript, Node.js and SQL for full stack web development. Dedicated to responsive design, web accessibility and optimisation.",
};

export const NAVBAR: Navbar = {
  logo: { src: logoImg.src, alt: "website logo" },
  links: [
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ],
};

export const SOCIALS: Socials = {
  email: {
    name: "danylo.sokol2504@gmail.com",
    href: "mailto:danylo.sokol2504@gmail.com",
    icon: "mdi:email",
  },
  github: {
    name: "GitHub",
    href: "https://github.com/Danylosokol",
    icon: "mdi:github",
  },
  facebook: {
    name: "Facebook",
    href: "https://facebook.com/danylo.sokol.5/",
    icon: "mdi:facebook",
  },
  linkedin: {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/danylo-sokol/",
    icon: "mdi:linkedin",
  },
  leetcode: {
    name: "LeetCode",
    href: "https://leetcode.com/u/DanyloSokol/",
    icon: "cib:leetcode",
  },
};

export const HERO: Hero = {
  title: "Software Engineer",
  description:
    "Experienced software engineer specialising in React, TypeScript, NextJS and NodeJS with a Bachelor's degree in Computer Science. Excited to contribute my skills and passion to your innovative projects.",
  location: "London UK",
  socials: SOCIALS,
  cv: {
    href: "https://drive.google.com/file/d/1p_d9vFu6bNtGD-2BG-Fc4G9iv6SDdBfb/view?usp=drive_link",
    name: "Resume",
  },
  image: {
    src: profileImg.src,
    alt: "Profile picture",
  },
};

export const SKILLS: Skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  " Material UI",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Redux",
  "React Router",
  "Next.js",
  "Node.js",
  "Express.js",
  "PHP",
  "Python",
  "Java",
  "SQL",
  "NoSQL",
  "OOP",
  "CI / CD",
  "REST",
  "Google Cloud Platform",
  "Vercel",
  "Firebase",
  "AWS",
  "Heroku",
  "Stripe",
  "Figma",
  "Chrome DevTools",
  "Git",
  "GitHub Actions",
  "Scrum",
];
