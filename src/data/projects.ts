export interface Project {
  name: string;
  url: string;
  description: string;
}

export const projects: Project[] = [
  { 
    name: 'FileShare', 
    url: 'https://github.com/Erion14/FileShare', 
    description: 'File sharing project using IPFS, Next.js, and .NET for secure and decentralized storage.' 
  },
  { 
    name: 'Java E-commerce Backend', 
    url: 'https://github.com/Erion14/Java-E-commerce-Backend', 
    description: 'A backend for an e-commerce shop using Java and Object-Oriented principles.' 
  },
  { 
    name: 'Copilot Code Context', 
    url: 'https://github.com/Erion14/Copilot-Code-Context', 
    description: 'A VS Code extension to send clipboard code to GitHub Copilot as file context.' 
  },
  { 
    name: 'Twitter Unfollow Extension', 
    url: 'https://github.com/Erion14/twitter-unfollow', 
    description: 'A Chrome extension to manage Twitter followings.' 
  },
  { 
    name: 'LeetCode', 
    url: 'https://github.com/Erion14/LeetCode', 
    description: 'A collection of my LeetCode solutions.' 
  },
];
