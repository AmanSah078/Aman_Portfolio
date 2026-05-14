import {
  Award,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Layers3,
  Network,
  Presentation,
  Route,
  ServerCog,
  ShieldCheck,
  Store,
  TerminalSquare,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react'

export const projects = [
  {
    id: 'genzera',
    label: 'Hero Project',
    name: 'GenZERA',
    descriptor: 'Student Learning and Skill Ecosystem Platform',
    summary:
      'A full ecosystem platform designed around students, mentors, academic resources, authenticated roles, services, and marketplace-style growth loops.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Spring Boot', 'MySQL', 'JWT Authentication'],
    highlights: [
      { icon: GraduationCap, title: 'Mentorship Ecosystem', detail: 'Structured guidance flows for students and domain experts.' },
      { icon: ShieldCheck, title: 'Role-Based Auth', detail: 'JWT-backed secure access for platform users and admins.' },
      { icon: Store, title: 'Marketplace System', detail: 'Service discovery, student resources, and academic utilities.' },
      { icon: Network, title: 'Student Network', detail: 'Community-oriented discovery and collaboration layers.' },
    ],
    metrics: ['JWT Security', 'Spring Boot Core', 'MySQL Data Layer'],
  },
  {
    id: 'career-ai',
    label: 'AI Product',
    name: 'AI Career Guidance Platform',
    descriptor: 'Intelligent Career Roadmap and Recommendation Engine',
    summary:
      'An AI-assisted experience that turns student context into personalized guidance, roadmaps, and career recommendations using prompt-driven intelligence.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Cohere API'],
    highlights: [
      { icon: BrainCircuit, title: 'AI Recommendations', detail: 'Context-aware responses shaped around career goals.' },
      { icon: Route, title: 'Roadmap Generation', detail: 'Step-by-step direction for skills, projects, and learning.' },
      { icon: TerminalSquare, title: 'Prompt Engineering', detail: 'Structured prompts for useful and focused outputs.' },
      { icon: Layers3, title: 'Assistant UI', detail: 'Conversational interface with intelligent response states.' },
    ],
    metrics: ['Cohere API', 'Roadmap Logic', 'Prompt System'],
  },
]

export const skillSystems = [
  {
    title: 'Backend & Core CS',
    icon: ServerCog,
    tone: 'from-electric-300/25 to-aurora-blue/10',
    skills: ['Core Java', 'Advanced Java', 'Data Structures & Algorithms', 'JDBC', 'Servlets', 'JSP', 'Spring Boot', 'Node.js'],
  },
  {
    title: 'Full Stack Development',
    icon: Code2,
    tone: 'from-white/18 to-electric-400/10',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React', 'Responsive UI'],
  },
  {
    title: 'AI & Generative AI',
    icon: BrainCircuit,
    tone: 'from-aurora-violet/24 to-electric-300/10',
    skills: ['LLM APIs (Cohere)', 'Prompt Engineering', 'RAG', 'LangChain', 'Supervised Learning'],
  },
  {
    title: 'Database Systems',
    icon: Database,
    tone: 'from-electric-500/22 to-white/8',
    skills: ['MySQL', 'Schema Design',],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    tone: 'from-white/14 to-aurora-violet/12',
    skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Eclipse IDE'],
  },
]

export const achievements = [
  {
    title: 'Sparkle 2K26',
    result: '1st Prize',
    icon: Trophy,
    story: 'App Development, AI Project, Ideapreneur, Hackathon. Recognized for competitive execution and standout delivery.',
  },
  {
    title: '30-Hour Hackathon',
    result: 'Participant',
    icon: Code2,
    story: 'Developed a Team Task Manager under intense time constraints during an intense 30-hour hackathon in Apr-2025.',
  },
  {
    title: 'Odisha Wildlife Conclave',
    result: '1st Prize',
    icon: Award,
    story: 'Won in a high-visibility platform requiring clarity, research, and communication strength for Project Presentation.',
  },
  {
    title: 'Debate Competitions (2023 - 2025)',
    result: '1st Prize',
    icon: Users,
    story: 'Built a track record of public speaking, argument structure, and composed communication across multiple events.',
  },
  {
    title: 'Metaverse Presentation (2025)',
    result: 'Best Presenter',
    icon: Presentation,
    story: 'Presented emerging technology concepts with technical confidence and audience awareness.',
  },
  {
    title: 'OCI AI Foundations',
    result: 'Certified',
    icon: BrainCircuit,
    story: 'Oracle Cloud Infrastructure Certified. Validated AI fundamentals for modern AI-powered application building.',
  },
]

export const engineeringSignals = [
  { label: 'System thinking', value: 'API-first product flow' },
  { label: 'Security instinct', value: 'JWT and role-aware access' },
  { label: 'Build rhythm', value: 'Prototype, test, refine' },
  { label: 'Product taste', value: 'Clean UX around real use cases' },
  { label: 'Code identity', value: 'Backend core with AI product edge' },
]

export const buildLoop = [
  { icon: GitBranch, label: 'Design the flow' },
  { icon: Code2, label: 'Build the system' },
  { icon: ShieldCheck, label: 'Secure the path' },
  { icon: Database, label: 'Shape the data' },
  { icon: BrainCircuit, label: 'Add intelligence' },
]
