// Portfolio Data - Sayduzzaman Rafsan

export const personalInfo = {
  firstName: "SAYDUZZAMAN",
  lastName: "RAFSAN",
  title: "Full-Stack Developer",
  subtitle:
    "Leveraging AI integration and a data-driven approach to build scalable, high-impact web solutions.",
  email: "sayduzzamanrafsan@gmail.com",
  phone: "+880 1916816993",
  location: "Mirpur, Dhaka, Bangladesh",
  about: [
    "Hi, I'm Sayduzzaman Rafsan — a Full-Stack Developer focused on engineering high-performance web apps with the Next.js / Node.js ecosystem. I build scalable, user-centric digital products and bridge the gap between clean architecture and delightful UX.",
    "I have experience building restaurant management systems, parcel delivery platforms, and large-scale university management systems, with a strong foundation in React, Next.js, Node.js, MongoDB and PostgreSQL.",
    "I love problem-solving, system-design thinking, and continuous learning. Open to freelance and remote opportunities where engineering quality and ownership matter.",
  ],
  tags: ["Problem Solving", "System Design Thinking", "AI-Driven Development"],
  availability: "Available for New Projects",
  rotatingRoles: [
    "Full-Stack Developer",
    "Next.js Engineer",
    "Problem Solver",
    "AI-Driven Builder",
  ],
  builds: ["Websites", "WebApps", "Dashboards", "Scalable-APIs"],
  expertise: [
    "Full-Stack Engineering",
    "Architecture & System Design",
    "AI Integration",
    "Database Management",
    "UI/UX Implementation",
    "Performance Optimization",
  ],
  coreSkills: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "Redux",
    "Tailwind",
  ],
  resumeLink:
    "https://drive.google.com/file/d/1KvJB4MuIYVBit584SNj_sxFGWqURwCxQ/view?usp=sharing",
  version: "1.0.0",
  stats: {
    experience: { label: "Years Exp.", value: "1+", percentage: 65 },
    projects: { label: "Projects Completed", value: "10+", percentage: 80 },
    clients: { label: "Companies Worked", value: "2+", percentage: 70 },
  },
  socialLinks: {
    github: "https://github.com/S-RAFSAN",
    linkedin: "https://www.linkedin.com/in/sayduzzaman-rafsan/",
    facebook: "https://www.facebook.com/rafsan.sayduzzaman/",
    instagram: "https://instagram.com",
  },
};

// Skill icons use publicly-hosted logos (devicon CDN) so no local assets needed.
// You can swap the `icon` URL with your own asset later.
const devicon = (slug: string, variant: string = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

export type SkillIcon = { name: string; icon: string };

export const skillIcons: SkillIcon[] = [
  { name: 'HTML5', icon: devicon('html5') },
  { name: 'CSS3', icon: devicon('css3') },
  { name: 'JavaScript', icon: devicon('javascript') },
  { name: 'TypeScript', icon: devicon('typescript') },
  { name: 'React', icon: devicon('react') },
  { name: 'Next.js', icon: devicon('nextjs', 'original-wordmark') },
  { name: 'Redux', icon: devicon('redux') },
  { name: 'Tailwind CSS', icon: devicon('tailwindcss', 'original') },
  { name: 'Bootstrap', icon: devicon('bootstrap') },
  { name: 'Node.js', icon: devicon('nodejs') },
  { name: 'Express', icon: devicon('express', 'original') },
  { name: 'MongoDB', icon: devicon('mongodb') },
  { name: 'PostgreSQL', icon: devicon('postgresql') },
  { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma/ffffff' },
  { name: 'Firebase', icon: devicon('firebase', 'plain') },
  { name: 'Git', icon: devicon('git') },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/ffffff' },
  { name: 'Nginx', icon: devicon('nginx') },
  { name: 'Linux', icon: devicon('linux', 'original') },
  { name: 'WordPress', icon: devicon('wordpress', 'plain') },
  { name: 'Figma', icon: devicon('figma') },
  { name: 'VS Code', icon: devicon('vscode') },
  { name: 'Cursor AI', icon: 'https://cdn.simpleicons.org/cursor/10b981' },
];

// Full-Stack arsenal split by category (for the "Mastering High-Load Stacks" section)
export const stack = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'Tailwind'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'WebSockets'],
  Databases: ['MongoDB', 'PostgreSQL', 'Prisma', 'Mongoose', 'Firebase'],
  DevOps: ['Git', 'GitHub', 'Vercel', 'Nginx', 'Linux', 'Cursor AI'],
} as const;

export type StackKey = keyof typeof stack;

// Legacy categorised skills (kept for compatibility if you use them elsewhere)
export const skills = {
  frontend: {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Redux', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 },
    ],
  },
  backend: {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Prisma', level: 75 },
    ],
  },
  tools: {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git & Version Control', level: 90 },
      { name: 'Nginx', level: 70 },
      { name: 'Linux/Unix', level: 75 },
      { name: 'WordPress', level: 80 },
      { name: 'Cursor AI', level: 85 },
    ],
  },
};

export const techStack = [
  'JavaScript',
  'TypeScript',
  'Next.js',
  'React',
  'Redux',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'RESTful APIs',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'Nginx',
  'Linux/Unix',
  'Git',
  'WordPress',
  'Cursor AI',
];

export type Experience = {
  role: string;
  period: string;
  company: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Full-Stack Developer (Intern)',
    period: 'Jan 2025 — Present',
    company: 'ADN Telecom Ltd.',
    bullets: [
      'Building and maintaining ADN DIGINET as a full-stack platform — scalable architecture, CMS-driven content, and optimized performance.',
      'Shipped the BAF Shaheen College Kurmitola system with role-based teacher/student modules for secure academic record management.',
      'Collaborating with senior engineers on code reviews, deployments, and feature delivery pipelines.',
    ],
  },
  {
    role: 'Junior Developer & Mentor',
    period: 'Jun 2024 — Dec 2024',
    company: 'UDOO Technology',
    bullets: [
      'Developed UDOOTECH corporate site and built UDOO CLOTHING e-commerce end-to-end on WordPress.',
      'Designed and managed UDOO Research & Training Center platform.',
      'Mentored students on Computer Fundamentals and MS Office at UDOO RTC.',
    ],
  },
  {
    role: 'Freelance Full-Stack Developer',
    period: '2024 — Present',
    company: 'Self-employed',
    bullets: [
      'Delivering high-performance web solutions using Next.js, Node.js and TypeScript.',
      'Specialising in clean architecture, REST API design and AI-assisted development workflows.',
    ],
  },
];

export type Education = {
  period: string;
  degree: string;
  institution: string;
};

export const education: Education[] = [
  {
    period: '2022 — Present',
    degree: 'BSc in Computer Science & Engineering',
    institution: 'Daffodil International University',
  },
  {
    period: '2019 — 2021',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Government Science College, Dhaka',
  },
  {
    period: '2017 — 2019',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Mirpur High School',
  },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
  role?: string;
};

export const projects: Project[] = [
  {
    title: 'PH: University Management System',
    role: 'Full Stack Developer',
    description:
      'Large-scale university web system with role-based modules for students, faculty and administration. Built with Next.js, TypeScript, Redux, Node, Express, PostgreSQL, Prisma and Nginx, with AI-assisted features and advanced business logic.',
    technologies: ['Next.js', 'TypeScript', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Nginx'],
    image: '🎓',
    link: 'https://ph-client.vercel.app',
    github: '#',
  },
  {
    title: 'BISTRO: Restaurant Business Solution',
    role: 'Full Stack Developer',
    description:
      'Full-stack restaurant management system with order management, menu control, authentication and real-time data. Built with React, Next.js, Node, Express, MongoDB, Firebase and Tailwind CSS.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS'],
    image: '🍽️',
    link: 'https://bristo-restaurant.vercel.app/',
    github: '#',
  },
  {
    title: 'PRO-FAST: Parcel Delivery Platform',
    role: 'Full Stack Developer',
    description:
      'Customer-facing delivery app prioritising speed, usability and mobile-first design. Focused on delivery workflow orchestration, order assignment, status progression and real-time notifications.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS'],
    image: '📦',
    link: 'https://zap-shift-client-delta.vercel.app/',
    github: '#',
  },
  {
    title: 'ADN DIGINET Platform',
    role: 'Full Stack Developer (Intern)',
    description:
      'Built and maintained ADN DIGINET as a full-stack web platform: scalable architecture, optimized performance and CMS-driven content management for non-technical users.',
    technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'CMS'],
    image: '🌐',
    link: 'https://adndiginet.com/',
    github: '#',
  },
  {
    title: 'BAF Shaheen College System',
    role: 'Full Stack Developer (Intern)',
    description:
      'Modern full-stack system for BAF Shaheen College Kurmitola — role-based teacher/student modules for secure result, grade and academic-record management.',
    technologies: ['Full-Stack', 'Role-Based Access', 'Academic Management'],
    image: '🏫',
    link: 'https://www.bafsk.edu.bd/',
    github: '#',
  },
  {
    title: 'UDOOTECH Corporate Website',
    role: 'WordPress Developer',
    description:
      'Corporate digital services and solutions website built with WordPress — responsive design, service presentation and performance optimisation.',
    technologies: ['WordPress', 'Responsive Design', 'Performance Optimization'],
    image: '💼',
    link: 'https://udootech.com/',
    github: '#',
  },
  {
    title: 'UDOO CLOTHING E-Commerce',
    role: 'WordPress Developer',
    description:
      'Complete e-commerce platform built from scratch — hands-on experience in branding, product management and business workflow implementation.',
    technologies: ['WordPress', 'E-Commerce', 'Product Management'],
    image: '🛍️',
    link: 'https://udooclothing.com/',
    github: '#',
  },
  {
    title: 'UDOO Research & Training Center',
    role: 'Developer & Mentor',
    description:
      'Training-focused WordPress platform. Also worked as a mentor teaching Computer Fundamentals and MS Office courses at UDOO RTC.',
    technologies: ['WordPress', 'Training Platform', 'Mentoring'],
    image: '📚',
    link: 'https://udoortc.com/',
    github: '#',
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  description: string;
};

export const certificates: Certificate[] = [
  {
    title: 'Complete Web Development Course',
    issuer: 'Programming Hero',
    year: '2024',
    description:
      'In-depth MERN-stack program covering React, Next.js, Node.js, Express, MongoDB and real-world project architecture.',
  },
  {
    title: 'Next.js & TypeScript Mastery',
    issuer: 'Self-paced / Open-Source',
    year: '2024',
    description:
      'Deep dive into Next.js App Router, server components, data fetching patterns, and type-safe full-stack architecture with TypeScript.',
  },
  {
    title: 'Database Design & SQL Fundamentals',
    issuer: 'University Coursework',
    year: '2023',
    description:
      'Relational database design, normalization, indexing and advanced SQL — applied with PostgreSQL and Prisma in production projects.',
  },
  {
    title: 'AI-Assisted Development with Cursor',
    issuer: 'Community / Practice',
    year: '2025',
    description:
      'Workflow mastery for shipping features faster using Cursor AI, prompt-driven development and code-review automation.',
  },
];

export type Blog = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
};

export const blogs: Blog[] = [
  {
    title: 'Building Scalable Next.js Apps: Lessons from a University System',
    excerpt:
      'What I learned shipping a large-scale Next.js + PostgreSQL + Prisma platform — caching, role-based access, and keeping the DX sharp.',
    date: '2 months ago',
    readTime: '5 Min Read',
    link: '#',
  },
  {
    title: 'Why Every Developer Should Embrace AI-Assisted Coding in 2026',
    excerpt:
      'How Cursor, Copilot and LLM-driven workflows changed the way I plan, write and refactor code — without losing engineering rigour.',
    date: '3 months ago',
    readTime: '4 Min Read',
    link: '#',
  },
  {
    title: 'From WordPress to Full-Stack: My Journey as a Developer',
    excerpt:
      'A candid story of going from PHP/WordPress sites to engineering real-time full-stack applications with TypeScript and Node.',
    date: '4 months ago',
    readTime: '3 Min Read',
    link: '#',
  },
];
