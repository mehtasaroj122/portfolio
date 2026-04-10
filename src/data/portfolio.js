const assetBase = import.meta.env.BASE_URL || '/'

export const portfolioData = {
  name: 'Saroj Mehta',
  shortTitle: 'IT Student | Web Developer | Problem Solver',
  headline:
    'Building practical digital solutions with clean interfaces, secure workflows, and a strong full-stack learning mindset.',
  intro:
    'I am an IT student from Nepal focused on turning learning into real, presentation-ready projects. I enjoy building responsive web experiences, refining usability details, and strengthening the software foundations behind reliable products.',
  location: 'Nepal',
  availability: 'Open to internships, project collaborations, and professional opportunities',
  email: 'mehtasaroj122@gmail.com',
  cvPath: `${assetBase}Saroj-Mehta-CV.pdf`,
  heroPhrases: [
    'React interfaces',
    'secure workflows',
    'MERN fundamentals',
    'recruiter-ready projects',
  ],
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/mehtasaroj122',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saroj-mehta-75894634a/',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:mehtasaroj122@gmail.com',
      icon: 'mail',
    },
  ],
  heroStats: [
    {
      value: 'Practical Builds',
      label: 'Focused on projects that demonstrate real workflows and usable interfaces',
    },
    {
      value: 'AJAX-Driven UX',
      label: 'Comfortable designing smoother interactions without full page reloads',
    },
    {
      value: 'Secure Thinking',
      label: 'Applying RBAC, CSRF awareness, and structured operational logic',
    },
  ],
  about: {
    paragraphs: [
      'My approach to development is grounded in clarity, usability, and steady learning. I like transforming ideas into interfaces that feel clean, understandable, and purposeful instead of overloaded.',
      'As I grow into full-stack development, I am especially interested in React, MERN workflows, Git and GitHub collaboration, WSL productivity, and the software basics that make larger systems easier to reason about.',
      'I enjoy solving practical problems through software, whether that means shaping a better user flow, securing a form submission, or improving the way a workflow feels for students, staff, or administrators.',
    ],
    cards: [
      {
        title: 'Practical Problem Solving',
        description:
          'I build projects around realistic needs, not just isolated features, so the final product feels more useful and complete.',
      },
      {
        title: 'Clean Interface Thinking',
        description:
          'I care about readable layouts, responsive behavior, and user flows that stay intuitive even as the logic grows.',
      },
      {
        title: 'Growth Through Real Work',
        description:
          'Each project is a chance to sharpen development basics, presentation skills, and the confidence to explain technical decisions clearly.',
      },
    ],
  },
  skills: [
    {
      title: 'Frontend',
      summary:
        'Building responsive interfaces with clean structure, accessible spacing, and interaction-focused design.',
      items: ['HTML5', 'Tailwind CSS', 'JavaScript (ES6+)', 'React'],
    },
    {
      title: 'Backend',
      summary:
        'Working with practical server-side workflows while expanding into modern full-stack architecture.',
      items: ['PHP', 'Laravel fundamentals', 'Node.js basics', 'REST API concepts'],
    },
    {
      title: 'Database',
      summary:
        'Organizing application data around sensible models, relationships, and query-aware thinking.',
      items: ['MySQL', 'DBMS concepts', 'Schema design', 'Query handling'],
    },
    {
      title: 'Tools',
      summary:
        'Using professional tools that support version control, local development, and smoother iteration.',
      items: ['Git', 'GitHub', 'WSL', 'VS Code', 'Linux basics'],
    },
    {
      title: 'Concepts',
      summary:
        'Learning the software ideas that improve reliability, security, maintainability, and user experience.',
      items: [
        'AJAX',
        'OOP',
        'DSA',
        'RBAC',
        'CSRF protection',
        'Responsive design',
      ],
    },
  ],
  projects: {
    featured: {
      badge: 'Featured Project',
      title: 'Library Management System',
      description:
        'A workflow-focused library platform designed to support real academic operations for admin, staff, and student users. The project emphasizes smooth interaction, secure handling, and role-aware workflows instead of static pages.',
      features: [
        'AJAX-based interaction for faster updates without disruptive page reloads',
        'Role-based access control for admin, staff, and student workflows',
        'Book request handling and structured circulation workflow',
        'Issue, return, and fine management aligned with day-to-day operations',
        'Secure request handling with CSRF protection',
        'Responsive interface designed for practical usability',
      ],
      techStack: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'HTML', 'CSS'],
      links: [
        {
          label: 'View Repository',
          href: 'https://github.com/mehtasaroj122/LMS',
          external: true,
        },
        {
          label: 'Discuss This Project',
          href: '#contact',
          external: false,
        },
      ],
    },
    secondary: [
      {
        title: 'Personal Portfolio Website',
        status: 'Live-ready showcase',
        description:
          'This portfolio itself is built as a recruiter-friendly single-page experience with reusable sections, theme switching, smooth motion, and a clean content structure for CV use.',
        techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        link: 'https://github.com/mehtasaroj122/portfolio',
      },
      {
        title: 'Mini Task Tracker',
        status: 'Practice project',
        description:
          'A lightweight productivity concept focused on CRUD flows, task organization, and interface clarity while strengthening React state management patterns.',
        techStack: ['React', 'Component design', 'Forms', 'UI state'],
        link: '#contact',
      },
      {
        title: 'Student Management Dashboard',
        status: 'Concept expansion',
        description:
          'A dashboard-style concept for managing student records, quick summaries, and cleaner operational visibility through reusable UI modules.',
        techStack: ['Dashboards', 'Role views', 'Data tables', 'Responsive layout'],
        link: '#contact',
      },
    ],
  },
  timeline: [
    {
      stage: 'Foundation',
      title: 'Strengthened core software development basics',
      description:
        'Built confidence in OOP, DBMS, DSA, Git and GitHub workflows, Linux basics, and the structured thinking needed for dependable software.',
    },
    {
      stage: 'Project Build',
      title: 'Developed a workflow-driven Library Management System',
      description:
        'Moved beyond simple forms into role-based logic, AJAX interactions, request handling, and circulation-focused features that better reflect real use cases.',
    },
    {
      stage: 'Communication',
      title: 'Prepared projects for viva, presentations, and documentation',
      description:
        'Focused on explaining technical decisions clearly, improving project presentation, and making work easier to discuss with teachers and recruiters.',
    },
    {
      stage: 'Current Focus',
      title: 'Expanding deeper into React and MERN development',
      description:
        'Sharpening component architecture, modern frontend practices, and the full-stack mindset needed to build polished and scalable web experiences.',
    },
  ],
  highlights: [
    {
      title: 'Built real, workflow-aware web applications',
      description:
        'Projects are shaped around actual user tasks and operational logic, not just static screens.',
    },
    {
      title: 'Focused on user-friendly and secure design',
      description:
        'I pay attention to clarity, responsiveness, role separation, and safer request handling.',
    },
    {
      title: 'Comfortable with presentation and documentation',
      description:
        'I actively prepare projects for viva, walkthroughs, and portfolio-ready explanation.',
    },
    {
      title: 'Committed to full-stack growth',
      description:
        'My learning path keeps moving toward stronger React, MERN, and professional development habits.',
    },
  ],
  contactMessage:
    'If you are looking for a motivated student developer who cares about practical systems, clean presentation, and continuous growth, I would be glad to connect.',
  footerNote:
    'Designed and developed with React, Tailwind CSS, and Framer Motion for portfolio, CV, and internship use.',
}
