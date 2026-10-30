export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface StackGroup {
  label: string;
  items: string[];
}

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Arquail',
    period: 'May 2026 — Now',
    highlights: [
      'Lead core backend architecture: production REST APIs, data schemas, and platform integrations.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Sonnix',
    period: 'Aug 2025 — Now',
    highlights: [
      'Guided backend architecture from design through production deployment, and keep it reliable.',
      'Containerized Docker services across isolated internal networks; watch high-concurrency paths for races and transactional consistency.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Quantix L.L.C',
    period: 'May 2024 — Mar 2026',
    highlights: [
      'Cut relational query times by 40% with index tuning and query optimization.',
      'Integrated Gemini (GCP) and OpenAI workflows into production APIs.',
      'Structured routing, middleware, and centralized error handling, plus docs and integration tests that shortened onboarding.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Freelance',
    period: 'Oct 2019 — Now',
    highlights: [
      'Full-stack client apps in .NET Core (Clean Architecture, integration tests) and TypeScript/React.',
      'Multi-stage Azure Pipelines with branch-to-environment promotion, Docker, Kubernetes/Kustomize, and SonarCloud.',
    ],
  },
];

export const education = {
  degree: 'BS, Computer Information & Technologies',
  school: 'RIT Kosovo',
  period: 'May 2026',
  note: 'GPA 3.82 / 4.00 · Dean’s List, 8 semesters',
};

export const stack: StackGroup[] = [
  { label: 'Languages', items: ['C#', '.NET', 'TypeScript', 'Node.js', 'Bun', 'Python', 'SQL'] },
  { label: 'Backend', items: ['ASP.NET Core', 'REST APIs', 'CQRS', 'Clean Architecture'] },
  { label: 'Data', items: ['PostgreSQL', 'SQL Server', 'EF Core', 'Redis'] },
  { label: 'Platform', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Azure Pipelines', 'SonarCloud', 'GCP'] },
  { label: 'Testing', items: ['Vitest', 'Testing Library', 'bun:test', '.NET integration tests'] },
  { label: 'AI tooling', items: ['Coding agents', 'MCP', 'Gemini', 'OpenAI'] },
];
