export interface Project {
  name: string;
  url: string;
  description: string;
  language: string;
  year: number;
}

export const projects: Project[] = [
  {
    name: 'Burrow',
    url: 'https://github.com/Erion14/burrow',
    description: 'Phone remote for omp coding agents over Tailscale: prompt them, answer their questions, review their diffs.',
    language: 'TypeScript',
    year: 2026,
  },
  {
    name: 'nugetwatch',
    url: 'https://github.com/Erion14/nugetwatch',
    description: 'Single static Go binary that scans restored .NET projects for vulnerable NuGet packages, transitive ones included.',
    language: 'Go',
    year: 2026,
  },
  {
    name: 'EddyAI',
    url: 'https://github.com/Erion14/EddyAI',
    description: 'Full-stack AI image generation app with a Next.js frontend and an ASP.NET Core + PostgreSQL backend.',
    language: 'C# / Next.js',
    year: 2026,
  },
  {
    name: 'FileShare',
    url: 'https://github.com/Erion14/FileShare',
    description: 'File sharing using IPFS, Next.js, and .NET for secure and decentralized storage.',
    language: 'TypeScript',
    year: 2025,
  },
  {
    name: 'Copilot Code Context',
    url: 'https://github.com/Erion14/Copilot-Code-Context',
    description: 'VS Code extension that sends clipboard code to GitHub Copilot as real file context.',
    language: 'TypeScript',
    year: 2025,
  },
  {
    name: 'Twitter Unfollow',
    url: 'https://github.com/Erion14/twitter-unfollow',
    description: 'Chrome extension that batch-unfollows accounts by verification and follow-back criteria.',
    language: 'JavaScript',
    year: 2025,
  },
  {
    name: 'Java E-commerce Backend',
    url: 'https://github.com/Erion14/Java-E-commerce-Backend',
    description: 'Backend for an e-commerce shop built on object-oriented Java.',
    language: 'Java',
    year: 2024,
  },
  {
    name: 'LeetCode',
    url: 'https://github.com/Erion14/LeetCode',
    description: 'A collection of my LeetCode solutions.',
    language: 'Java',
    year: 2024,
  },
];
