// ============================================================
//  PORTFOLIO DATA — Single source of truth for all content
// ============================================================

export const personalInfo = {
  name: "Vaibhav Dilip Chavan",
  firstName: "Vaibhav",
  title: "Frontend Developer",
  titles: [
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "UI Engineer",
  ],
  tagline: "Building scalable, high-performance web applications",
  email: "chavanvaibhav281@gmail.com",
  phone: "+91 9284512504",
  location: "Nashik, Maharashtra, India",
  github: "https://github.com/vaibhav281",
  linkedin: "#", // TODO: add LinkedIn URL
  resumeLink: "/Vaibhav_Chavan_Resume.pdf",
  bio: "Frontend Developer with 2+ years of experience building scalable, high-performance web applications using React.js and Next.js. Strong expertise in UI architecture, performance optimization, and REST API integration. Recently expanded into AI-assisted full-stack development — leveraging modern encryption concepts, real-time systems, and AI tools to accelerate development and system design.",
  available: true,
};

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Shipped", value: "6+" },
  { label: "Companies", value: "2" },
  { label: "CGPA", value: "8.02" },
];

export const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Material UI",
    "Bootstrap",
    "Responsive Design",
    "REST API Integration",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io",
    "REST APIs",
    "Basic SQL",
    "MERN Stack",
  ],
  tools: [
    "Git",
    "GitHub",
    "Vite",
    "Figma",
    "Jira",
    "AWS EC2",
    "Playwright",
    "AppSheet",
    "Chrome DevTools",
    "VS Code",
  ],
  ai: [
    "ChatGPT",
    "Google Gemini",
    "Prompt Engineering",
    "AI-Assisted Development",
  ],
};

export const experience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "MegaConnect Technologies Pvt. Ltd.",
    period: "Aug 2024 – Nov 2024",
    duration: "4 months",
    location: "Remote · Karnataka, India",
    type: "Remote",
    points: [
      "Designed and delivered responsive, role-based dashboards and admin panels using React.js and Material UI for subscription and platform management.",
      "Integrated frontend modules with RESTful backend services, ensuring consistent data flow, state handling, and error management.",
      "Optimized component architecture and rendering performance, improving cross-browser compatibility and device responsiveness.",
      "Contributed to UI modernization initiatives, enhancing layout consistency, usability, and user engagement across core workflows.",
    ],
    tech: ["React.js", "Material UI", "REST APIs", "JavaScript"],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Creddos",
    period: "Dec 2022 – Aug 2024",
    duration: "1 year 8 months",
    location: "Nashik, India",
    type: "On-site",
    points: [
      "Delivered end-to-end frontend development for multiple production-grade web applications using React.js and Next.js, from requirements to deployment.",
      "Engineered reusable, component-based UI architectures, improving maintainability and accelerating feature delivery cycles.",
      "Deployed, monitored, and maintained applications on AWS EC2, supporting stable releases and minimizing production issues.",
      "Collaborated with cross-functional teams in Agile (Scrum) environments to deliver user-centric solutions aligned with business objectives.",
    ],
    tech: ["React.js", "Next.js", "AWS EC2", "Agile/Scrum"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Limitless Chats",
    tagline: "Secure Real-Time Messaging Platform",
    description:
      "A real-time chat application with end-to-end encryption using the Signal Protocol. Designed with a Zero-Knowledge backend — the server cannot access user data.",
    tech: ["MERN Stack", "Socket.io", "AES-GCM", "Signal Protocol", "IndexedDB"],
    highlights: [
      "E2E encryption using Signal Protocol (X3DH, Double Ratchet)",
      "Zero-Knowledge backend — no server access to user data",
      "IndexedDB caching and Blob-based rendering for performance",
      "Real-time message lifecycle tracking (sent, delivered, decrypted)",
    ],
    github: "#",
    live: "#",
    featured: true,
    type: "Personal",
  },
  {
    id: 2,
    name: "Bharat Bidding",
    tagline: "B2B Industrial Bidding Marketplace",
    description:
      "A Next.js-based industrial B2B bidding platform with Material UI, enabling real-time bidding access and streamlined marketplace interactions through intuitive UI design.",
    tech: ["Next.js", "Material UI", "React.js", "REST APIs"],
    highlights: [
      "Real-time B2B bidding system",
      "Role-based user management",
      "Intuitive marketplace UI",
      "Full mobile responsive experience",
    ],
    github: null,
    live: null,
    privateRepo: true,
    liveUnavailable: true,
    featured: true,
    type: "Professional",
  },

  {
    id: 4,
    name: "FitRaptors",
    tagline: "E-commerce Platform",
    description:
      "A responsive React.js e-commerce platform for fitness accessories with inventory visibility, order workflows, and an improved checkout experience.",
    tech: ["React.js", "JavaScript", "CSS3", "REST APIs"],
    highlights: [
      "Product inventory management",
      "Complete order workflow",
      "Improved checkout UX",
      "Mobile-first responsive design",
    ],
    github: null,
    live: null,
    privateRepo: true,
    liveUnavailable: true,
    featured: false,
    type: "Professional",
  },
  {
    id: 5,
    name: "Wiko India",
    tagline: "Export & Import Management Platform",
    description:
      "React.js dashboards for agricultural trade transaction management, compliance tracking, and reporting for export-import stakeholders.",
    tech: ["React.js", "JavaScript", "Dashboard UI", "Data Visualization"],
    highlights: [
      "Agricultural trade dashboards",
      "Compliance tracking system",
      "Reporting and analytics",
      "Operational transparency tooling",
    ],
    github: null,
    live: null,
    privateRepo: true,
    liveUnavailable: true,
    featured: false,
    type: "Professional",
  },
  {
    id: 6,
    name: "Brick Breaker",
    tagline: "Browser-Based React Game",
    description:
      "A browser-based brick breaker game built with React featuring multiple levels, dynamic gameplay, score tracking, and a lives system.",
    tech: ["React.js", "JavaScript", "CSS3", "Game Dev"],
    highlights: [
      "Multiple dynamic game levels",
      "Score and lives tracking",
      "Smooth React game loop",
      "Fully responsive controls",
    ],
    github: "#",
    live: "#",
    featured: false,
    type: "Personal",
  },
];

export const education = {
  degree: "Bachelor of Engineering in Information Technology",
  institution: "MVP's KBT College of Engineering",
  location: "Nashik, Maharashtra",
  year: "2022",
  cgpa: "8.02",
};
