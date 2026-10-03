export const links = {
  github: "https://github.com/logitlens",
  linkedin: "https://www.linkedin.com/in/mayank-paswan-a340bb216/",
  nutrilily: "https://whitelily.ai/",
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  description: string;
  summary: string;
  year: string;
  role: string;
  status: string;
  technologies: string[];
  featured: boolean;
  metric?: string;
  link?: string;
  problem: string;
  contribution: string[];
  impact?: string[];
  visual: "scan" | "agent" | "content" | "mcp" | "services" | "vision";
};

export const projects: Project[] = [
  {
    slug: "nutrilily", index: "01", title: "NutriLily", eyebrow: "AI product",
    description: "Food intelligence, powered by AI.",
    summary: "An AI-powered platform for understanding packaged food, ingredients, nutrition, and healthier alternatives.",
    year: "Current", role: "Product · Full-stack · AI engineering", status: "Live",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "MongoDB", "AI"], featured: true,
    link: links.nutrilily, visual: "scan",
    problem: "Food labels are dense and difficult to evaluate quickly. NutriLily turns product and ingredient information into a more understandable decision surface.",
    contribution: ["Built a consumer-facing product around barcode scanning and product analysis.", "Connected nutrition, ingredient, history, and health information in one product experience.", "Designed the system to surface practical alternatives rather than raw data alone."],
  },
  {
    slug: "agentic-hub", index: "02", title: "Global Agentic Hub", eyebrow: "Agentic AI · Enterprise systems",
    description: "Infrastructure for secure, observable agent interactions.",
    summary: "Enterprise agent infrastructure spanning gateway, gatekeeper, synchronous APIs, asynchronous messaging, and reasoning-trace workflows.",
    year: "2025 — Present", role: "SDE-II · Agentic AI", status: "In production development",
    technologies: ["Agentic AI", "Python", "FastAPI", "Azure", "AWS", "Event-driven"], featured: true, visual: "agent",
    problem: "Enterprise agents need controlled, reliable communication paths across request-response and event-driven workflows.",
    contribution: ["Worked on Agent Gateway and Agent Gatekeeper capabilities.", "Built around synchronous HTTP APIs and asynchronous event-driven messaging.", "Contributed to safe, high-level validation and routing of reasoning traces."],
  },
  {
    slug: "contenthubgpt", index: "03", title: "ContentHubGPT", eyebrow: "Enterprise AI product",
    description: "AI content generation connected to real commerce workflows.",
    summary: "A multi-brand AI content platform integrating PIM, CMS, and e-commerce systems with brand voice and access controls.",
    year: "2023 — 2025", role: "SDE-I · Product engineering", status: "Adopted by 5+ clients",
    technologies: ["Next.js", "React", "Material UI", "AI", "TypeScript", "RBAC"], featured: true,
    metric: "60–70% less manual effort", visual: "content",
    problem: "Commerce teams needed faster content production without losing brand consistency or the controls required by multi-organization software.",
    contribution: ["Built product capabilities for AI content generation and Brand Voice.", "Integrated PIM, CMS, and e-commerce workflows.", "Delivered organization, brand, role, and user-management experiences."],
    impact: ["Reduced manual content-generation effort by approximately 60–70%.", "Platform adopted by 5+ clients."],
  },
  {
    slug: "mcp-server", index: "04", title: "ContentHubGPT MCP Server", eyebrow: "AI developer infrastructure",
    description: "AI capabilities inside modern developer workflows.",
    summary: "A Model Context Protocol server connecting ContentHubGPT capabilities to tools for SEO, keywords, URL analysis, and content optimization.",
    year: "2024 — 2025", role: "Backend · Protocol integration", status: "Shipped",
    technologies: ["TypeScript", "Node.js", "MCP", "AI", "API integration"], featured: true, visual: "mcp",
    problem: "Useful AI capabilities become more valuable when developers can invoke them where work already happens.",
    contribution: ["Built an MCP server in TypeScript and Node.js.", "Exposed SEO analysis, keyword generation, website URL analysis, and optimization suggestions.", "Connected a product API to an emerging agent-tooling protocol."],
  },
  {
    slug: "food-delivery", index: "05", title: "Food Delivery System", eyebrow: "Distributed systems",
    description: "A microservices exercise in messaging, deployment, and visibility.",
    summary: "A food-delivery system combining a web interface, containerized services, asynchronous messaging, and a monitoring dashboard.",
    year: "Earlier work", role: "Full-stack engineering", status: "Project",
    technologies: ["React", "Material UI", "Microservices", "Docker", "RabbitMQ"], featured: false, visual: "services",
    problem: "Explore how independent services coordinate, fail, and remain observable in a realistic product domain.",
    contribution: ["Built a React and Material UI client.", "Structured backend capabilities as containerized microservices.", "Used RabbitMQ for messaging and added a monitoring surface."],
  },
  {
    slug: "laser-speckle", index: "06", title: "Laser Speckle Analysis", eyebrow: "Computer vision · Mobile",
    description: "Mobile capture and image-processing workflows.",
    summary: "A Flutter and Python system for processing laser-speckle imagery with batch upload workflows.",
    year: "Earlier work", role: "Mobile · Computer vision", status: "Project",
    technologies: ["Flutter", "Flask", "Python", "Image processing", "MVVM"], featured: false, visual: "vision",
    problem: "Make a specialized image-processing workflow usable from a mobile interface.",
    contribution: ["Built the mobile experience using Flutter and MVVM.", "Connected batch uploads to a Flask and Python image-processing service."],
  },
];

export const experience = [
  { company: "Publicis Sapient", role: "SDE-II · Agentic AI", period: "2025 — Present", detail: "Building enterprise agent infrastructure across gateways, controlled agent communication, event-driven workflows, and reasoning-trace processing." },
  { company: "Zorang Technology / GSPANN", role: "SDE-I", period: "2023 — 2025", detail: "Built ContentHubGPT, Brand Voice, access controls, product integrations, and an MCP server for AI-assisted content workflows." },
  { company: "TCS", role: "Software Developer Intern", period: "2022", detail: "Early professional software engineering experience." },
  { company: "Coviapp", role: "Frontend Intern", period: "2021", detail: "Worked on frontend product development." },
];

export const techGroups = [
  { name: "AI systems", items: ["Agentic AI", "LLM applications", "MCP", "A2A", "AI APIs", "Vision", "AI memory", "Vector search"], used: "Agentic Hub · NutriLily · MCP Server" },
  { name: "Backend", items: ["Python", "FastAPI", "Flask", "REST APIs", "WebSockets", "Event-driven architecture", "RabbitMQ", "Redis"], used: "Agentic Hub · NutriLily · Distributed Systems" },
  { name: "Frontend", items: ["Next.js", "React", "TypeScript", "Material UI", "Modern web applications"], used: "NutriLily · ContentHubGPT" },
  { name: "Cloud / infrastructure", items: ["AWS", "Azure", "Docker", "Cloud-native systems", "Observability", "Messaging"], used: "Agentic Hub · Distributed Systems" },
];
