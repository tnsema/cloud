// data/roles.ts

export const roles = [
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    level: "Junior → Mid",
    priority: "High",
    category: "Core Cloud",
    description: "Build, deploy, and manage cloud infrastructure and applications.",
    whyTarget: "Primary entry role into cloud engineering.",
    skills: [
      "AWS (EC2, S3, IAM)",
      "Linux",
      "Networking basics",
      "Git",
      "Basic CI/CD"
    ],
    responsibilities: [
      "Deploy applications to cloud",
      "Manage infrastructure",
      "Monitor systems",
      "Troubleshoot issues"
    ]
  },

  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    level: "Junior → Mid",
    priority: "High",
    category: "Automation",
    description: "Automate software delivery and infrastructure.",
    whyTarget: "High demand, overlaps with cloud roles.",
    skills: [
      "CI/CD (GitHub Actions, GitLab CI)",
      "Linux",
      "Docker (basic)",
      "AWS",
      "Scripting"
    ],
    responsibilities: [
      "Build pipelines",
      "Automate deployments",
      "Manage environments",
      "Improve delivery speed"
    ]
  },

  {
    id: "cloud-support",
    title: "Cloud Support Engineer",
    level: "Entry",
    priority: "Very High",
    category: "Support",
    description: "Support cloud systems, troubleshoot issues, assist customers.",
    whyTarget: "Easiest entry into cloud with real exposure.",
    skills: [
      "Linux",
      "Networking",
      "Basic AWS",
      "Troubleshooting"
    ],
    responsibilities: [
      "Investigate issues",
      "Support cloud users",
      "Debug systems",
      "Handle incidents"
    ]
  },

  {
    id: "systems-engineer",
    title: "Systems Engineer",
    level: "Entry → Mid",
    priority: "Very High",
    category: "Infrastructure",
    description: "Manage servers, operating systems, and infrastructure.",
    whyTarget: "Strong foundation for cloud roles.",
    skills: [
      "Linux",
      "Windows Server",
      "Networking",
      "Virtualization"
    ],
    responsibilities: [
      "Maintain servers",
      "Configure systems",
      "Ensure uptime",
      "Monitor performance"
    ]
  },

  {
    id: "infrastructure-engineer",
    title: "Infrastructure Engineer",
    level: "Entry → Mid",
    priority: "High",
    category: "Infrastructure",
    description: "Design and maintain infrastructure environments.",
    whyTarget: "Direct transition into cloud infrastructure roles.",
    skills: [
      "Networking",
      "Linux",
      "Cloud basics",
      "Virtualization"
    ],
    responsibilities: [
      "Design infrastructure",
      "Maintain systems",
      "Ensure reliability",
      "Support deployments"
    ]
  },

  {
    id: "site-reliability-engineer",
    title: "Site Reliability Engineer (SRE)",
    level: "Mid",
    priority: "Medium",
    category: "Reliability",
    description: "Ensure systems are reliable, scalable, and performant.",
    whyTarget: "High-paying but harder to enter.",
    skills: [
      "Linux",
      "Monitoring",
      "Cloud",
      "Automation",
      "Networking"
    ],
    responsibilities: [
      "Improve system reliability",
      "Handle outages",
      "Monitor performance",
      "Automate operations"
    ]
  },

  {
    id: "backend-developer",
    title: "Backend Developer (Cloud-focused)",
    level: "Entry → Mid",
    priority: "High",
    category: "Development",
    description: "Build backend systems that run in the cloud.",
    whyTarget: "Leverage your dev experience into cloud.",
    skills: [
      "Java / Node.js",
      "APIs",
      "Databases",
      "Basic AWS"
    ],
    responsibilities: [
      "Build APIs",
      "Integrate services",
      "Deploy to cloud",
      "Handle data processing"
    ]
  },

  {
    id: "platform-engineer",
    title: "Platform Engineer",
    level: "Mid",
    priority: "Medium",
    category: "Platform",
    description: "Build internal developer platforms and infrastructure.",
    whyTarget: "Advanced role after DevOps/cloud experience.",
    skills: [
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Cloud"
    ],
    responsibilities: [
      "Build platforms",
      "Standardize environments",
      "Enable developers",
      "Improve tooling"
    ]
  },

  {
    id: "cloud-security-engineer",
    title: "Cloud Security Engineer",
    level: "Mid",
    priority: "Future Goal",
    category: "Security",
    description: "Secure cloud systems and infrastructure.",
    whyTarget: "Your end goal.",
    skills: [
      "IAM",
      "Networking security",
      "Cloud security",
      "Monitoring",
      "Threat detection"
    ],
    responsibilities: [
      "Secure infrastructure",
      "Manage access",
      "Monitor threats",
      "Ensure compliance"
    ]
  },

  {
    id: "technical-support",
    title: "IT Technical Support",
    level: "Entry",
    priority: "Backup",
    category: "Support",
    description: "General IT support role.",
    whyTarget: "Fallback role to get into IT industry.",
    skills: [
      "Networking basics",
      "Troubleshooting",
      "Operating systems"
    ],
    responsibilities: [
      "Fix user issues",
      "Support systems",
      "Maintain IT environments"
    ]
  }
];

export type Role = (typeof roles)[number];

export const roleCategories = [
  "Core Cloud",
  "Automation",
  "Support",
  "Infrastructure",
  "Reliability",
  "Development",
  "Platform",
  "Security"
] as const;

export const rolePriorities = [
  "Very High",
  "High",
  "Medium",
  "Future Goal",
  "Backup"
] as const;