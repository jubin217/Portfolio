import { LucideIcon } from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'Language' | 'Framework' | 'Tool' | 'Concept';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  image: string;
  date: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}