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
    "Experienced Software Engineer, AWS-certified, with a first-class CS degree, specialising on building full-stack scalable solutions with React.js, Node.js, and AWS that serve thousands of customers worldwide.",
  location: "London UK",
  socials: SOCIALS,
  cv: {
    href: "https://drive.google.com/file/d/1VwgmGHMVH5yUd1UT-A6gzzNx2BO4SPJU/view?usp=sharing",
    name: "Resume",
  },
  image: {
    src: profileImg.src,
    alt: "Profile picture",
  },
};

export const SKILLS: Skills = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "React.js",
  "Next.js",
  "Express.js",
  "Golang",
  "PHP",
  "Java",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Mongoose ODM",
  "AWS",
  "S3",
  "Step Functions",
  "DynamoDB",
  "CloudWatch",
  "SQS",
  "EventBridge",
  "Serverless",
  "Terraform",
  "Google Cloud Platform",
  "GCP App Engine",
  "CI/CD",
  "Github Actions",
  "Travis CI",
  "Docker",
  "REST",
  "OOP",
  "Microservices",
  "Unit Testing",
  "Jest",
  "GraphQL",
  "Tailwind CSS",
  "Material UI",
  "SCSS",
  "Theme UI",
  "Figma",
  "Chrome DevTools",
  "Git",
  "GitHub",
  "GitLab",
  "Vercel",
  "Stripe",
  "Calendly API",
  "Prismic",
  "Headless CMS",
  "WordPress",
  "Firebase",
];
