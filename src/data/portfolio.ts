// Portfolio Data - Updated from CV

export const personalInfo = {
  firstName: 'SAYDUZZAMAN',
  lastName: 'RAFSAN',
  title: 'Full-Stack Developer',
  subtitle: 'Leveraging AI integration and a data-driven approach to build scalable, high-impact web solutions',
  email: 'sayduzzamanrafsan@gamil.com',
  phone: '+880 1916816993',
  location: 'Mirpur, Dhaka, Bangladesh',
  about: [
    "Motivated Full-Stack Developer specializing in Next.js and TypeScript, leveraging AI integration and a data-driven approach to build scalable, high-impact web solutions with clean, reliable code.",
    "I have experience building full-stack web applications including restaurant management systems, parcel delivery platforms, and large-scale university management systems. My expertise spans modern technologies like React, Next.js, Node.js, MongoDB, PostgreSQL, and Docker.",
    "Passionate about problem-solving, system design thinking, and delivering quality-focused solutions. I enjoy mentoring, continuous learning, and staying at the forefront of web development technologies.",
  ],
  tags: ['Problem Solving', 'System Design Thinking', 'AI-Driven Development'],
  stats: {
    experience: { label: 'Experience', value: '1+ Years', percentage: 70 },
    projects: { label: 'Projects Completed', value: '10+', percentage: 80 },
    clients: { label: 'Companies Worked', value: '2+', percentage: 85 },
  },
  socialLinks: {
    github: 'https://github.com/S-RAFSAN', // Update with your GitHub profile
    linkedin: 'https://www.linkedin.com/in/sayduzzaman-rafsan/', // Update with your LinkedIn profile
    facebook: 'https://www.facebook.com/rafsan.sayduzzaman/', // Update with your Facebook profile
    instagram: 'https://instagram.com',
  },
};

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
      { name: 'DBMS', level: 80 },
    ],
  },
  tools: {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git & Version Control', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Nginx', level: 70 },
      { name: 'Linux/Unix', level: 75 },
      { name: 'WordPress', level: 80 },
      { name: 'Cursor AI', level: 85 },
      { name: 'AI-Assisted Coding', level: 85 },
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
  'DBMS',
  'Docker',
  'Nginx',
  'Linux/Unix',
  'Git',
  'WordPress',
  'Cursor AI',
];

export const projects = [
  {
    title: 'PH: University Management System',
    description:
      'Designed and developed a large-scale university web system using Next.js, TypeScript, Redux, Node.js, Express, PostgreSQL, Prisma, and SQL, with Docker and Nginx supporting scalable deployment. Implemented AI-assisted features, advanced business logic, and role-based modules for students, faculty, and administration.',
    technologies: ['Next.js', 'TypeScript', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'Nginx'],
    image: '🎓',
    link: '#',
    github: '#',
  },
  {
    title: 'BISTRO: Restaurant Business Solution',
    description:
      'Built a full-stack Restaurant Management System using React, Next.js, Node.js, Express.js, MongoDB, and Firebase, with Tailwind CSS for a responsive and modern UI. Implemented core features including order management, menu control, user authentication, and real-time data handling.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS'],
    image: '🍽️',
    link: '#',
    github: '#',
  },
  {
    title: 'PRO-FAST: Parcel Delivery Platform',
    description:
      'Built a full-stack, customer-facing delivery application with React, Next.js, Node.js, Express.js, MongoDB, Firebase, and Tailwind CSS, prioritizing speed, usability, and mobile-first design. Focused on delivery workflow orchestration, including order assignment, status progression, and real-time notifications.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS'],
    image: '📦',
    link: '#',
    github: '#',
  },
  {
    title: 'ADN DIGINET Platform',
    description:
      'Built and maintained ADN DIGINET as a full-stack web platform, delivering scalable architecture, optimized performance, and CMS-driven content management for non-technical users. Developed during internship at ADN TELECOM.',
    technologies: ['Full-Stack', 'CMS', 'Performance Optimization'],
    image: '🌐',
    link: '#',
    github: '#',
  },
  {
    title: 'BAF Shaheen College System',
    description:
      'Developed the BAF Shaheen College Kurmitola system using a modern full-stack approach, enabling role-based teacher and student modules for secure result, grade, and academic record management. Built during internship at ADN TELECOM.',
    technologies: ['Full-Stack', 'Role-Based Access', 'Academic Management'],
    image: '🏫',
    link: '#',
    github: '#',
  },
  {
    title: 'UDOOTECH Corporate Website',
    description:
      'Developed UDOOTECH, a corporate digital services and solutions website using WordPress, focusing on responsive design, service presentation, and performance optimization. Built during tenure at UDOO TECHNOLOGY.',
    technologies: ['WordPress', 'Responsive Design', 'Performance Optimization'],
    image: '💼',
    link: '#',
    github: '#',
  },
  {
    title: 'UDOO CLOTHING E-Commerce',
    description:
      'Built UDOO CLOTHING from the root level as a complete e-commerce website, gaining hands-on experience in company setup, branding, product management, and business workflow implementation. Developed during tenure at UDOO TECHNOLOGY.',
    technologies: ['WordPress', 'E-Commerce', 'Product Management'],
    image: '🛍️',
    link: '#',
    github: '#',
  },
  {
    title: 'UDOO Research & Training Center',
    description:
      'Designed and managed UDOO Research & Training Center, a training-focused WordPress platform. Also worked as a mentor, teaching Computer Fundamentals and MS Office courses. Developed during tenure at UDOO TECHNOLOGY.',
    technologies: ['WordPress', 'Training Platform', 'Mentoring'],
    image: '📚',
    link: '#',
    github: '#',
  },
];

