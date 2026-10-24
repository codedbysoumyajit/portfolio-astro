// Central configuration for the portfolio site
// Edit this file to update all content across the site

export interface SiteConfig {
  name: string;
  wordmark: string;
  title: string;
  description: string;
  url: string;
  domain: string;
  locale: string;
  author: string;
  email: string;
  location: string;
  role: string;
  availability: {
    enabled: boolean;
    message: string;
  };
  resume: {
    enabled: boolean;
    url: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
  currentlyExploring: string[];
  nav: { label: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  name: "Soumyajit Das",
  wordmark: "soumyajit.dev",
  title: "Soumyajit Das — Full Stack Developer",
  description:
    "Full-stack developer building useful software, developer tools, web applications, and privacy-focused products.",
  url: "https://codedbysoumyajit.dev",
  domain: "codedbysoumyajit.dev",
  locale: "en_US",
  author: "Soumyajit Das",
  email: "codedbysoumyajit@proton.me",
  location: "India",
  role: "Full Stack Developer",
  availability: {
    enabled: true,
    message: "Open to opportunities",
  },
  resume: {
    enabled: false,
    url: "/resume.pdf",
  },
  social: {
    github: "https://github.com/codedbysoumyajit",
    linkedin: "https://linkedin.com/in/codedbysoumyajit",
  },
  currentlyExploring: [
    "Cloud-native architecture",
    "Container orchestration with Kubernetes",
    "Networking fundamentals & protocols",
    "DevOps practices and CI/CD pipelines",
  ],
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};

export interface Project {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  color: string;
}

export const projects: Project[] = [
  {
    name: "ZeroK Vault",
    slug: "zerok-vault",
    tagline: "Privacy-first password manager",
    description:
      "A self-hostable, privacy-focused password manager built around client-side encryption. Credentials never leave the browser unencrypted — the server only stores ciphertext it cannot read.",
    technologies: ["Go", "MongoDB", "JavaScript"],
    highlights: [
      "Argon2id key derivation",
      "AES-256-GCM encryption",
      "Zero-knowledge architecture",
      "Self-hostable",
    ],
    github: "https://github.com/codedbysoumyajit/zerok-vault",
    demo: null,
    featured: true,
    color: "cyan",
  },
  {
    name: "Phoenix Drive",
    slug: "phoenix-drive",
    tagline: "Self-hosted cloud storage & workspace",
    description:
      "A premium, secure, self-hosted cloud storage and file sharing workspace modeled after Google Drive and designed using Material You design principles. Built on a modern full-stack architecture with Next.js, Express, and MongoDB, it provides in-transit file encryption, direct drag-and-drop file ingestion, dynamic light/dark styling, and sharing features.",
    technologies: ["Next.js", "Express", "MongoDB", "Node.js"],
    highlights: [
      "Material You design principles",
      "In-transit file encryption",
      "Drag-and-drop ingestion",
      "Dynamic light/dark styling",
      "Self-hosted cloud storage",
    ],
    github: "https://github.com/codedbysoumyajit/Phoenix-Drive",
    demo: null,
    featured: true,
    color: "violet",
  },
  {
    name: "Neurova AI",
    slug: "neurova-ai",
    tagline: "AI conversations",
    description:
      "A privacy-first AI chat application supporting multiple language models. Conversations and user profiles are stored locally, keeping data on the device where it belongs.",
    technologies: ["React Native", "Expo"],
    highlights: [
      "Multi-model support",
      "Local user profiles",
      "Privacy-first design",
      "Cross-platform mobile",
    ],
    github: "https://github.com/codedbysoumyajit/neurova-ai",
    demo: null,
    featured: true,
    color: "indigo",
  },
  {
    name: "KernelView",
    slug: "kernelview",
    tagline: "System info at a glance",
    description:
      "A Go-based CLI tool for displaying system information and providing interactive terminal dashboards. Designed for developers and sysadmins who want quick insights into system state.",
    technologies: ["Go"],
    highlights: [
      "Interactive TUI dashboard",
      "System metrics display",
      "Lightweight CLI",
      "Cross-platform",
    ],
    github: "https://github.com/codedbysoumyajit/KernelView-Go",
    demo: null,
    featured: true,
    color: "emerald",
  },
];

export interface SkillGroup {
  label: string;
  skills: string[];
  icon: string;
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Go", "Python"],
    icon: "code",
  },
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Astro"],
    icon: "layout",
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
    icon: "server",
  },
  {
    label: "Data",
    skills: ["MongoDB", "SQLite"],
    icon: "database",
  },
  {
    label: "Systems & Tools",
    skills: ["Linux", "Git", "GitHub", "Docker"],
    icon: "terminal",
  },
  {
    label: "Exploring",
    skills: ["Cloud Computing", "Networking", "DevOps"],
    icon: "compass",
  },
];

export interface Certification {
  name: string;
  issuer: string;
  badge: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    name: "Python for Data Science",
    issuer: "IBM",
    badge:
      "https://www.credly.com/badges/17f94fe9-0245-46b3-bc20-faaea8aa1bbe/public_url",
    color: "cyan",
  },
  {
    name: "Data Analysis with Python",
    issuer: "IBM",
    badge:
      "https://www.credly.com/badges/d7e47c75-2435-421c-8b14-aa369493fba2/public_url",
    color: "violet",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco",
    badge:
      "https://www.credly.com/badges/fa1bb045-90ba-4fcb-adf4-16140ed7cc8d/public_url",
    color: "indigo",
  },
  {
    name: "Introduction to Linux",
    issuer: "Linux Foundation",
    badge:
      "https://www.credly.com/badges/2e2fa9b9-4dd0-4aab-9263-7ed362f2bd19/public_url",
    color: "emerald",
  },
];
