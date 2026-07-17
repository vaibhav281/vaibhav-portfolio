// ============================================================
//  PORTFOLIO DATA — CMS Structured Source of Truth
// ============================================================

export const personalInfo = {
  name: "Vaibhav Chavan",
  firstName: "Vaibhav",
  title: "Frontend Developer",
  titles: [
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "UI Engineer",
  ],
  tagline: "Engineering predictable interfaces for complex systems.",
  email: "chavanvaibhav281@gmail.com",
  phone: "+91 9284512504",
  location: "Nashik, Maharashtra, India",
  github: "https://github.com/vaibhav281",
  linkedin: "https://www.linkedin.com/in/vaibhav-chavan281/",
  resumeLink: "/Vaibhav_Chavan_Resume.pdf",
  bio: "Frontend Developer with 2+ years of experience building scalable, high-performance web applications using React.js and Next.js. I specialize in bridging the gap between messy business requirements and resilient, high-performance systems. Recently focused on real-time systems, zero-knowledge architecture, and complex B2B workflow orchestration.",
  available: true,
};

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Systems Deployed", value: "6+" },
  { label: "Companies", value: "2" },
  { label: "CGPA", value: "8.02" },
];

export const skills = {
  frontend: [
    "React.js",
    "Next.js (App Router)",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS v4",
    "Material UI",
    "Framer Motion",
    "SWR / React Query",
  ],
  architecture: [
    "State Management",
    "Zero-Knowledge Security",
    "JWT Authentication",
    "REST API Orchestration",
    "Real-time Sockets",
    "IndexedDB Caching",
  ],
  tools: [
    "Git / GitHub",
    "Vite",
    "Figma",
    "AWS EC2",
    "Chrome DevTools",
    "AppSheet",
  ]
};

export const experience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "MegaConnect Technologies Pvt. Ltd.",
    period: "Aug 2024 – Nov 2024",
    duration: "4 months",
    location: "Remote",
    type: "Remote",
    points: [
      "Engineered responsive, role-based administration dashboards and platform management tools using React.js and Material UI.",
      "Architected frontend integration with core RESTful backend services, handling strict data validation and error recovery states.",
      "Optimized React component rendering performance, actively preventing unnecessary re-renders in heavy data tables.",
      "Modernized UI layouts across core workflows to improve usability for non-technical platform administrators."
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
      "Led end-to-end frontend development for production-grade web applications utilizing React.js and Next.js.",
      "Designed reusable UI architectures that decoupled state logic from presentation, accelerating feature delivery.",
      "Managed AWS EC2 deployments, resolving critical production issues and ensuring stable application releases.",
      "Collaborated in Agile (Scrum) environments to align engineering implementations directly with evolving business logic."
    ],
    tech: ["React.js", "Next.js", "AWS EC2", "Agile/Scrum"],
  },
];

export const projects = [
  {
    id: 1,
    slug: "megaconnect-platform",
    title: "MegaConnect Platform",
    category: "Professional",
    status: "Production",
    year: "2024",
    duration: "4 months",
    role: "Frontend Developer",
    teamSize: "Startup Team",
    businessProblem: "Platform administrators needed a unified command center to manage subscription plans and operational data without relying on manual database interventions.",
    projectOverview: "A robust internal dashboard suite designed for subscription lifecycle management and system administration.",
    responsibilities: [
      "Developed the core UI architecture for the platform's admin panels.",
      "Integrated secure authentication and session management.",
      "Built dynamic, responsive data grids for subscription tracking."
    ],
    engineeringChallenges: [
      "Handling complex state management for multi-tiered subscription settings.",
      "Ensuring high performance when rendering large administrative datasets."
    ],
    architectureHighlights: [
      "Component-based architecture using React and Material UI.",
      "Centralized REST API orchestration layer."
    ],
    technicalHighlights: [
      "Responsive data tables with client-side sorting and filtering.",
      "Robust form validation for administrative actions."
    ],
    technologies: ["React.js", "Material UI", "JavaScript", "REST APIs"],
    keyFeatures: [
      "Subscription plan management",
      "Platform settings administration",
      "Role-based access control"
    ],
    performanceOptimizations: [],
    security: ["JWT based session management"],
    deployment: {},
    screenshots: ["/src/assets/megaconnect_arch.png"],
    gallery: [],
    documents: [],
    lessonsLearned: [],
    currentState: "Production system. Public access unavailable. Public website remains for visual reference.",
    liveUrl: "https://megaconnect.cloud/",
    github: null,
    featured: true
  },
  {
    id: 2,
    slug: "bharat-bidding",
    title: "Bharat Bidding",
    category: "Professional",
    status: "Production",
    year: "2024",
    duration: "6 months",
    role: "Primary Frontend Developer",
    teamSize: "Startup Team",
    businessProblem: "Industrial manufacturers lacked a transparent digital marketplace to verify suppliers, handle RFQs, and manage complex procurement bidding workflows.",
    projectOverview: "An expansive B2B industrial procurement marketplace built as a Next.js monorepo, orchestrating complex RFQ workflows across dedicated Buyer, Seller, and Admin applications.",
    responsibilities: [
      "Built distinct role-based dashboards (Buyer, Seller, Admin) from scratch.",
      "Implemented JWT authentication flows and protected routes across multiple Next.js applications.",
      "Integrated complex REST APIs orchestrating the 'Connects' token economy and bidding system."
    ],
    engineeringChallenges: [
      "Managing token persistence (localStorage vs sessionStorage) and interceptor logic across decoupled applications.",
      "Orchestrating state for multi-step RFQ generation and quotation submissions.",
      "Maintaining UI consistency across 4 independent Next.js projects pointing to a single backend."
    ],
    architectureHighlights: [
      "Next.js App Router monorepo consisting of 4 independent applications.",
      "Centralized Axios instance with automated JWT refresh interceptors.",
      "SWR implemented for caching and server data fetching."
    ],
    technicalHighlights: [
      "Custom JWT decode and expiration handling without third-party libraries.",
      "MUI custom theme configuration toggled via context providers.",
      "Credit deduction ('Connects') real-time tracking logic."
    ],
    technologies: ["Next.js 14", "Material UI", "JavaScript", "SWR", "Axios", "JWT"],
    keyFeatures: [
      "Buyer RFQ generation",
      "Seller bidding communication",
      "Token economy ('Connects')",
      "Admin moderation dashboard"
    ],
    performanceOptimizations: [
      "SWR data caching to minimize redundant network requests.",
      "App Router layout nesting to prevent full-page reloads."
    ],
    security: [
      "Role-specific JWT authorization.",
      "Automatic token refresh rotation via interceptors."
    ],
    deployment: {},
    screenshots: ["/src/assets/Bharatbidding_webpage.png"],
    gallery: [],
    documents: [],
    lessonsLearned: [
      "Next time, I would introduce Redux Toolkit or Zustand to prevent prop drilling in complex dashboard workflows.",
      "Routing architecture could be simplified to improve code splitting."
    ],
    currentState: "Production system. Public access unavailable.",
    liveUrl: null,
    github: null,
    featured: true
  },
  {
    id: 3,
    slug: "limitless-chats",
    title: "Limitless Chats",
    category: "Personal",
    status: "In Development",
    year: "2024",
    duration: "Ongoing",
    role: "Full Stack Architect",
    teamSize: "Solo",
    businessProblem: "Conventional messaging applications treat the server as a trusted entity, meaning user data and privacy are vulnerable to server compromise or data harvesting.",
    projectOverview: "A Zero-Knowledge real-time messaging architecture where the server handles signaling and routing but mathematically cannot decrypt user communications.",
    responsibilities: [
      "Architected the End-to-End Encryption protocol using the Web Crypto API.",
      "Implemented a Zero-Knowledge backend using Node.js and Socket.IO.",
      "Designed the IndexedDB local-first storage schema for persisting encrypted media and message histories."
    ],
    engineeringChallenges: [
      "Implementing the Double Ratchet protocol for Forward Secrecy purely in the browser.",
      "Managing memory overhead when decrypting and rendering large media blobs in real-time.",
      "Handling asynchronous IndexedDB transactions during high-frequency message syncing."
    ],
    architectureHighlights: [
      "Zero-Knowledge Server Architecture (Signaling only).",
      "Web Crypto API for native, dependency-free cryptography.",
      "Local-first state management reading directly from IndexedDB caches."
    ],
    technicalHighlights: [
      "X3DH Key Exchange and AES-256 Hybrid Encryption.",
      "IntersectionObserver-based lazy decryption for performance.",
      "Real-time Socket.IO message lifecycle tracking (sent, delivered, decrypted)."
    ],
    technologies: ["React.js", "Node.js", "Socket.IO", "IndexedDB", "Web Crypto API", "Signal Protocol"],
    keyFeatures: [
      "E2E Encrypted Messaging",
      "Secure 100MB File Sharing",
      "Edit/Delete Message Synchronization",
      "Local-first Offline Mode"
    ],
    performanceOptimizations: [
      "Lazy message decryption only when elements enter the viewport.",
      "Idle-time background video thumbnail generation.",
      "Automatic object URL cleanup to prevent memory leaks."
    ],
    security: [
      "Forward Secrecy and Post-Compromise Security.",
      "Server holds zero plaintext data.",
      "Curve25519 Identity Keys."
    ],
    deployment: {},
    screenshots: ["/src/assets/limitless_chats_arch.png"],
    gallery: [],
    documents: [],
    lessonsLearned: [
      "Web Crypto API is incredibly fast but managing key rotation requires a robust state machine to avoid race conditions."
    ],
    currentState: "Active development. Current UI is a temporary placeholder. Deployment pending architectural finalization.",
    liveUrl: null,
    github: "https://github.com/vaibhav281/limitless-chats",
    featured: true
  },
  {
    id: 4,
    slug: "wiko-india",
    title: "Wiko India",
    category: "Professional",
    status: "Production",
    year: "2023",
    duration: "8 months",
    role: "Frontend Developer (Internal Tools)",
    teamSize: "Engineering Team",
    businessProblem: "Agricultural export inspections required manual paperwork, leading to compliance delays, location spoofing risks, and fragmented operational transparency.",
    projectOverview: "A digital supply chain and inspection verification ecosystem. Built strictly internal administration and inspector dashboards for on-site agricultural verification.",
    responsibilities: [
      "Developed the Admin Dashboard for order management and inspector assignments.",
      "Built the mobile-responsive Inspector Dashboard for on-site data collection.",
      "Implemented Geolocation and multipart/form-data integrations for field reporting."
    ],
    engineeringChallenges: [
      "Handling intermittent network connections while uploading large multipart image files from rural inspection sites.",
      "Orchestrating multi-step complex forms with persistent state for long inspection reports."
    ],
    architectureHighlights: [
      "Role-based Access Control (RBAC) routing.",
      "Direct device-hardware API integration (Geolocation)."
    ],
    technicalHighlights: [
      "Dynamic form validation schemas based on master data (e.g. Packaging Materials).",
      "Real-time Toast notification queues for asynchronous API resolutions."
    ],
    technologies: ["React.js", "JavaScript", "Dashboard UI", "Geolocation API", "JWT"],
    keyFeatures: [
      "On-site Face & Location Verification",
      "Order Assignment Workflows",
      "Master Data Management (Packaging)"
    ],
    performanceOptimizations: [],
    security: ["Location verification enforcement"],
    deployment: {},
    screenshots: ["/src/assets/wiko_india_arch.png"],
    gallery: [],
    documents: [],
    lessonsLearned: [],
    currentState: "System in production. *Note: I was responsible for internal dashboards, not the public facing website.*",
    liveUrl: "https://wikoindia.com/",
    github: null,
    featured: false
  },
  {
    id: 5,
    slug: "fitraptors",
    title: "FitRaptors",
    category: "Professional",
    status: "Archived",
    year: "2023",
    duration: "3 months",
    role: "Frontend Developer",
    teamSize: "Startup Team",
    businessProblem: "A specialized fitness e-commerce brand needed a performant frontend to handle high-volume inventory visibility and streamlined checkout workflows.",
    projectOverview: "A fully responsive React e-commerce application focusing on checkout UX and inventory state management.",
    responsibilities: [
      "Developed the public-facing storefront and product catalog.",
      "Engineered the cart and checkout state machine.",
      "Ensured mobile-first responsiveness across the entire buying journey."
    ],
    engineeringChallenges: [
      "Synchronizing client-side cart state with backend inventory checks.",
      "Managing complex responsive layouts for product galleries."
    ],
    architectureHighlights: [
      "Component-driven catalog architecture."
    ],
    technicalHighlights: [
      "Client-side cart logic and local storage persistence.",
      "Optimized checkout form validations."
    ],
    technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"],
    keyFeatures: [
      "Product Inventory Management",
      "Order Workflow",
      "Responsive Checkout UX"
    ],
    performanceOptimizations: [],
    security: [],
    deployment: {},
    screenshots: ["/src/assets/fitraptors_arch.png"],
    gallery: [],
    documents: [],
    lessonsLearned: [],
    currentState: "Backend services decommissioned. Only static source code available.",
    liveUrl: null,
    github: null,
    featured: false
  },
  {
    id: 6,
    slug: "brick-breaker",
    title: "Brick Breaker",
    category: "Personal",
    status: "Live Prototype",
    year: "2023",
    duration: "1 month",
    role: "Developer",
    teamSize: "Solo",
    businessProblem: "An exploration into bypassing React's standard DOM reconciliation to build a 60fps render loop within a browser environment.",
    projectOverview: "A browser-based arcade game implementing raw game loop concepts (update/draw) wrapped within a React shell.",
    responsibilities: [
      "Implemented the game loop physics and collision detection.",
      "Built the state machine for levels, lives, and scoring."
    ],
    engineeringChallenges: [
      "Preventing React re-renders from destroying the 60fps game loop.",
      "Managing complex geometric collision math in JavaScript."
    ],
    architectureHighlights: [
      "Decoupled logical update ticks from rendering ticks."
    ],
    technicalHighlights: [
      "requestAnimationFrame loop integration.",
      "Dynamic level generation arrays."
    ],
    technologies: ["React.js", "JavaScript", "CSS3", "Game Dev"],
    keyFeatures: [
      "Physics Collision Detection",
      "Multi-level Progression",
      "Score & Lives Tracking"
    ],
    performanceOptimizations: [
      "Bypassed standard React state for high-frequency coordinate updates."
    ],
    security: [],
    deployment: {},
    screenshots: ["/src/assets/brick_breaker_arch.png"],
    gallery: [],
    documents: [],
    lessonsLearned: [],
    currentState: "Live prototype playable in browser.",
    liveUrl: "https://brick-breaker-game-eight.vercel.app/",
    github: "https://github.com/vaibhav281/brick-breaker-game",
    featured: false
  }
];

export const education = {
  degree: "Bachelor of Engineering in Information Technology",
  institution: "MVP's KBT College of Engineering",
  location: "Nashik, Maharashtra",
  year: "2022",
  cgpa: "8.02",
};
