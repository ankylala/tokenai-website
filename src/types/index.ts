export interface Product {
  id: string;
  name: string;
  slogan: string;
  description: string;
  features: string[];
  icon: string;
  link: string;
}

export interface Solution {
  id: string;
  industry: string;
  icon: string;
  scenarios: string[];
  description: string;
}

export interface Milestone {
  date: string;
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}
