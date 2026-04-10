const assetBase = import.meta.env.BASE_URL || '/'

export const portfolioData = {
  name: 'Saroj',
  fullName: 'Saroj Mehta',
  title: 'IT Student | Aspiring Full Stack Developer',
  headline:
    'Designing premium web experiences with polished interfaces, secure workflows, and real product thinking.',
  intro:
    'I turn coursework, self-learning, and system ideas into recruiter-ready digital products with strong UI craft, thoughtful motion, and practical full-stack ambition.',
  location: 'Nepal',
  availability:
    'Open to internships, project collaborations, and junior developer opportunities',
  email: 'mehtasaroj122@gmail.com',
  cvPath: `${assetBase}Saroj-Mehta-CV.pdf`,
  statusPill: 'Available for 2026 internships',
  heroPhrases: [
    'I build modern web experiences.',
    'I design smooth glassmorphism interfaces.',
    'I engineer secure workflow-driven systems.',
    'I turn ideas into premium recruiter-ready products.',
  ],
  heroTags: ['React', 'Tailwind CSS', 'Framer Motion', 'Workflow Systems'],
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Impact', href: '#impact' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/mehtasaroj122',
      icon: 'github',
      value: 'github.com/mehtasaroj122',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saroj-mehta-75894634a/',
      icon: 'linkedin',
      value: 'linkedin.com/in/saroj-mehta-75894634a',
    },
    {
      label: 'Email',
      href: 'mailto:mehtasaroj122@gmail.com',
      icon: 'mail',
      value: 'mehtasaroj122@gmail.com',
    },
  ],
  heroStats: [
    {
      value: '01',
      label: 'Featured system thinking',
      description:
        'A flagship Library Management System designed around real admin, staff, and student flows.',
    },
    {
      value: '02',
      label: 'Secure architecture mindset',
      description:
        'Role-based access, CSRF awareness, and cleaner operational logic shape how I build.',
    },
    {
      value: '03',
      label: 'Recruiter-ready presentation',
      description:
        'Projects are packaged with clarity, polish, and strong storytelling for reviews and interviews.',
    },
  ],
  about: {
    story: [
      'I care about software that feels considered from the first impression to the final interaction. That means combining visual quality with practical engineering choices instead of treating design and logic as separate worlds.',
      'As an IT student, I am intentionally building beyond the typical beginner portfolio. I focus on interfaces that feel polished, systems that reflect real user workflows, and projects that show I can think about usability, structure, and trust at the same time.',
      'My long-term direction is full-stack development, with particular interest in React, modern frontend architecture, MERN growth, secure request handling, and the kind of product thinking that makes software easier to adopt and easier to explain.',
    ],
    signature: [
      {
        label: 'Current Focus',
        value: 'React interfaces, motion design, and recruiter-ready product polish',
      },
      {
        label: 'Working Style',
        value: 'Clear UX, clean structure, thoughtful detail, and continuous iteration',
      },
      {
        label: 'Career Goal',
        value: 'Grow into a high-value full stack developer building premium web products',
      },
    ],
    cards: [
      {
        title: 'Product-minded execution',
        description:
          'I like building around real user needs and believable workflows, so each project feels closer to an actual product than a classroom exercise.',
      },
      {
        title: 'Visual polish with purpose',
        description:
          'Spacing, motion, hierarchy, and responsiveness matter because they shape trust as much as code quality does.',
      },
      {
        title: 'Full-stack growth mindset',
        description:
          'I keep leveling up across frontend craft, backend fundamentals, security thinking, and the communication needed to present work professionally.',
      },
    ],
  },
  skills: [
    {
      title: 'Frontend Engineering',
      icon: 'interface',
      level: 92,
      summary:
        'Crafting responsive, high-contrast interfaces with premium presentation, clean composition, and smooth motion.',
      items: [
        'React',
        'Tailwind CSS',
        'JavaScript (ES6+)',
        'Responsive Design',
        'Framer Motion',
      ],
    },
    {
      title: 'Backend Logic',
      icon: 'server',
      level: 80,
      summary:
        'Designing workflow-aware application logic while growing toward stronger full-stack architecture and API fluency.',
      items: [
        'PHP',
        'Laravel Fundamentals',
        'Node.js Basics',
        'REST Concepts',
        'Request Handling',
      ],
    },
    {
      title: 'Data & Systems',
      icon: 'database',
      level: 84,
      summary:
        'Thinking in relationships, structure, and data flow so systems stay understandable as complexity grows.',
      items: [
        'MySQL',
        'DBMS Concepts',
        'Schema Design',
        'Query Logic',
        'Operational Data Flow',
      ],
    },
    {
      title: 'Security & Quality',
      icon: 'security',
      level: 85,
      summary:
        'Building with safer defaults and more trustworthy user flows through role separation and structured request handling.',
      items: [
        'RBAC',
        'CSRF Protection',
        'Form Validation',
        'Cleaner UX Flows',
        'Usability Thinking',
      ],
    },
    {
      title: 'Tooling & Growth',
      icon: 'growth',
      level: 88,
      summary:
        'Using modern tooling and continuous practice to raise both implementation quality and delivery confidence.',
      items: ['Git', 'GitHub', 'WSL', 'VS Code', 'Linux Basics', 'OOP', 'DSA'],
    },
  ],
  projects: {
    featured: {
      badge: 'Flagship Project',
      title: 'Library Management System',
      subtitle: 'A workflow-focused academic platform built beyond simple CRUD screens.',
      description:
        'This system was designed for real library operations, not just isolated forms. It supports admin, staff, and student roles through smoother AJAX-driven interactions, secure request handling, and workflows that match how a library actually runs.',
      metrics: [
        {
          label: 'User Roles',
          value: 'Admin / Staff / Student',
        },
        {
          label: 'UX Pattern',
          value: 'AJAX without reload',
        },
        {
          label: 'Security Lens',
          value: 'CSRF-aware requests',
        },
      ],
      features: [
        'AJAX-based interaction for faster updates without disruptive page reloads',
        'Role-based access control for admin, staff, and student workflows',
        'Structured book request, issue, return, and fine management flows',
        'Secure request handling with CSRF protection',
        'Real-world workflow logic aligned with day-to-day library operations',
        'Responsive interface designed for practical usability across screens',
      ],
      techStack: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'HTML', 'CSS'],
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/mehtasaroj122/LMS',
          external: true,
          style: 'primary',
        },
        {
          label: 'Request Walkthrough',
          href: '#contact',
          external: false,
          style: 'secondary',
        },
      ],
    },
    secondary: [
      {
        title: 'Premium Portfolio Experience',
        status: 'Live personal brand site',
        description:
          'This site is built as a cinematic single-page portfolio with glassmorphism, motion-led storytelling, recruiter-focused content, and smooth dark/light theming.',
        techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/mehtasaroj122/portfolio',
            external: true,
          },
          {
            label: 'Live',
            href: '#home',
            external: false,
          },
        ],
      },
      {
        title: 'Mini Task Tracker',
        status: 'State management practice',
        description:
          'A compact productivity build focused on CRUD flows, task organization, and clean interaction patterns while strengthening React state architecture.',
        techStack: ['React', 'Component Design', 'Forms', 'UI State'],
        links: [
          {
            label: 'Details',
            href: '#contact',
            external: false,
          },
        ],
      },
      {
        title: 'Student Management Dashboard',
        status: 'Dashboard concept build',
        description:
          'A modular dashboard concept built around record visibility, quick summaries, and reusable admin-facing interface patterns.',
        techStack: ['Dashboards', 'Role Views', 'Data Tables', 'Responsive Layout'],
        links: [
          {
            label: 'Details',
            href: '#contact',
            external: false,
          },
        ],
      },
    ],
  },
  timeline: [
    {
      stage: 'Stage 01',
      timeframe: 'Core foundation',
      title: 'Built strong software fundamentals',
      description:
        'Developed confidence in OOP, DBMS, DSA, version control, and Linux-based workflows to create a stronger base for building dependable software.',
    },
    {
      stage: 'Stage 02',
      timeframe: 'Real project execution',
      title: 'Moved into workflow-driven application building',
      description:
        'Pushed beyond basic forms by building a Library Management System with role-aware logic, AJAX interactions, and operational features grounded in actual use cases.',
    },
    {
      stage: 'Stage 03',
      timeframe: 'Communication and polish',
      title: 'Turned projects into presentation-ready work',
      description:
        'Started packaging work with clearer storytelling, better presentation, and stronger explanations so projects are easier to discuss with teachers, panels, and recruiters.',
    },
    {
      stage: 'Stage 04',
      timeframe: 'Current direction',
      title: 'Deepening into React and full-stack growth',
      description:
        'Now focused on sharper frontend craft, better component architecture, motion-rich UI, and the full-stack mindset required for scalable modern web experiences.',
    },
  ],
  highlights: [
    {
      metric: 'Workflow-first',
      title: 'Projects are mapped around real user operations',
      description:
        'I prefer believable systems with meaningful flows over isolated demo screens that look good but solve nothing.',
    },
    {
      metric: 'UI craftsmanship',
      title: 'Visual polish is part of the engineering standard',
      description:
        'Hierarchy, spacing, motion, responsiveness, and interaction quality all contribute to how trustworthy a product feels.',
    },
    {
      metric: 'Security awareness',
      title: 'Safer request handling is already part of my thinking',
      description:
        'I pay attention to role boundaries, CSRF protection, form handling, and cleaner operational logic while building.',
    },
    {
      metric: 'Career trajectory',
      title: 'Growing intentionally toward full-stack excellence',
      description:
        'Each project is another step toward becoming a developer who can ship polished, modern, high-value web products.',
    },
  ],
  contactMessage:
    'If you are looking for a motivated developer who cares about premium UI, real workflows, and steady full-stack growth, I would love to connect.',
  footerNote:
    'Designed and developed with React, Tailwind CSS, and Framer Motion for a premium recruiter-first portfolio experience.',
}
