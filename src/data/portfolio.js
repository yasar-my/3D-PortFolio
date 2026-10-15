// Centralized content — edit this file to update the entire site.

export const profile = {
  name: "Yasar M",
  role: "Full Stack Developer",
  tagline: "Building resilient backends and expressive interfaces.",
  location: "Kodikurichi, Tenkasi",
  email: "yasarm8675@gmail.com",
  phone: "+91 9087023639",
  availability: "Immediate Joiner",
  looking: ["Development", "Testing", "DevOps"],
  summary:
    "Full Stack Developer skilled in Java, Spring Boot, Node.js, Express.js, Angular, React.js, and MySQL. Experienced in developing RESTful APIs, building responsive frontend interfaces, implementing secure backend services, and integrating relational databases. Familiar with microservices architecture, JWT authentication, API testing, and version control.",
  links: {
    github: "https://github.com/yasar-my",
    linkedin: "https://www.linkedin.com/in/yasar-m-39a7b7356/",
    oldPortfolio: "https://yasar-portfolio-swart.vercel.app/",
  },
  resume: "/Yasar_M_Resume.pdf",
};

// The stack, ordered bottom → top, the way a request actually travels.
export const stackLayers = [
  {
    id: "db",
    label: "Database",
    detail: "MySQL — schema design, joins, indexing",
    tags: ["MySQL", "JPA", "Hibernate"],
  },
  {
    id: "backend",
    label: "Backend",
    detail: "Spring Boot and Node.js backend services",
    tags: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Spring Security",
      "Microservices",
    ],
  },
  {
    id: "api",
    label: "API Layer",
    detail: "REST endpoints, authentication, and API testing",
    tags: ["REST APIs", "JWT", "Postman"],
  },
  {
    id: "frontend",
    label: "Frontend",
    detail: "Responsive interfaces built with modern frontend frameworks",
    tags: ["Angular", "React.js", "TypeScript", "JavaScript", "Git"],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: [
      "Java (Core & Advanced)",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Frameworks & Runtime",
    items: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "Node.js",
      "Express.js",
      "Angular",
      "React.js",
      "Microservices",
    ],
  },
  {
    title: "Data & Auth",
    items: [
      "MySQL",
      "REST APIs",
      "JWT Authentication",
      "Cloudinary",
    ],
  },
  {
    title: "Tooling",
    items: ["Git", "GitHub", "Postman", "Maven", "VS Code"],
  },
  {
    title: "Currently Upskilling",
    items: [
      "JUnit & Mockito",
      "Docker",
      "CI/CD — GitHub Actions",
      "AWS — EC2, S3, RDS",
    ],
  },
];

export const projects = [
  {
    id: "feast-fete",
    name: "Feast & Fete",
    tag: "Catering Booking Platform",
    period: "Mar – May 2026",
    description:
      "A full-stack catering booking platform connecting customers with event organizers. Independent Auth, Profile, and Booking microservices sit behind an API gateway, with JWT-secured, role-based access for Admin, Organizer, and Customer.",
    highlights: [
      "8 documented REST endpoints, 9+ test cases at 100% pass rate",
      "Razorpay payment integration with real-time status tracking",
      "Cloudinary-backed organizer galleries and profile media",
      "Role-based access control across Admin, Organizer, Customer",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Microservices",
      "React.js",
      "MySQL",
      "JWT",
      "Razorpay",
      "Cloudinary",
    ],
    github: "https://github.com/yasar-my/feast-fete.git",
    demo: "https://feast-fete.vercel.app/",
  },
  {
    id: "marvel-xmen",
    name: "Marvel & X-Men Cinematic Timeline",
    tag: "Cinematic Movie Universe Explorer",
    period: "Personal Project",
    description:
      "An immersive frontend built with React and Vite for exploring Marvel and X-Men movies, characters, and trailers — with an interactive chronological timeline instead of a plain listing page.",
    highlights: [
      "Dynamic movie detail routes with characters, trailers, and metadata",
      "Search and filter by universe, category, year, and character",
      "Framer Motion transitions, card tilt, and scroll reveals",
      "Centralized data layer — one file updates the entire site",
    ],
    stack: [
      "React.js",
      "Vite",
      "React Router",
      "Framer Motion",
      "JavaScript",
    ],
    github:
      "https://github.com/yasar-my/marvel-xmen-cinematic-timeline.git",
    demo: "https://marvel-xmen-cinematic-universe.vercel.app/",
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Reno Infomatics Pvt Ltd",
    period: "September 2026 – Present",
    points: [
      "Developed responsive and reusable web application components using Angular and TypeScript, following structured frontend development practices.",
      "Designed and developed RESTful APIs using Node.js and Express.js to implement backend functionality and enable seamless client-server communication.",
      "Integrated Angular frontend components with backend APIs and implemented MySQL database operations, including CRUD functionality and SQL queries.",
      "Performed API testing and debugging using Postman, resolved frontend-backend integration issues, and used Git for version control and code management.",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "Angular",
      "TypeScript",
      "MySQL",
      "REST APIs",
      "Postman",
      "Git",
    ],
  },
  {
    role: "Associate Backend Developer Intern",
    company: "CodeTikki",
    period: "March 2026 – June 2026",
    project: "Student Micro Loan Platform",
    points: [
      "Designed backend microservices for a phased disbursement system — Wallet Credit live, UPI Transfer planned — balancing regulatory compliance with operational risk.",
      "Built a rule-based eligibility and credit evaluation engine using platform activity data, including quiz scores, streaks, and engagement, as a creditworthiness proxy.",
      "Developed the repayment lifecycle — Active → Due → Overdue → Closed — with automated reminders and late-fee handling.",
      "Implemented fraud detection covering duplicate accounts and suspicious activity flags.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Sriram Nallamani Yadava College",
  location: "Kodikurichi, Tenkasi",
  period: "June 2023 – May 2026",
  detail: "CGPA: 7.93 / 10",
};

export const certifications = [
  {
    name: "Spring 5 Basics with Spring Boot",
    issuer: "Infosys Springboard",
    date: "March 18, 2025",
    image: "/certificates/spring-boot.jpg",
  },
  {
    name: "Hibernate Framework Basics",
    issuer: "Infosys Springboard",
    date: "March 18, 2025",
    image: "/certificates/hibernate.jpg",
  },
  {
    name: "Java SE 8 Features",
    issuer: "Infosys Springboard",
    date: "March 18, 2025",
    image: "/certificates/java-se8.jpg",
  },
  {
    name: "Apache Maven",
    issuer: "Infosys Springboard",
    date: "March 18, 2025",
    image: "/certificates/apache-maven.jpg",
  },
  {
    name: "Introduction to Agile Methodology",
    issuer: "Infosys Springboard",
    date: "September 27, 2024",
    image: "/certificates/agile.jpg",
  },
];