export type LearningLog = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  whatILearned: string[];
  whyItMatters: string;
  challenges: string[];
  nextSteps: string[];
  videoSlug?: string;
};

export type Project = {
  slug: string;
  title: string;
  status: "Upcoming" | "In Progress" | "Completed";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  services: string[];
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  steps: string[];
  lessons: string[];
  githubUrl?: string;
  youtubeUrl?: string;
  videoSlug?: string;
};

export type Video = {
  slug: string;
  title: string;
  youtubeId: string;
  description: string;
  relatedLabel: string;
  relatedHref: string;
};

export const learningLogs: LearningLog[] = [
  {
    slug: "aws-iam-foundations",
    title: "AWS IAM Foundations",
    date: "2026-04-29",
    category: "AWS",
    summary:
      "Practiced users, groups, roles, policies, and the difference between identity-based and resource-based permissions.",
    whatILearned: [
      "IAM permissions are easier to reason about when each policy has one clear purpose.",
      "Roles are the cleaner path for temporary access between AWS services.",
      "Least privilege needs testing, not guessing.",
    ],
    whyItMatters:
      "IAM is the front door of every AWS account, so strong permission design is a cloud engineering and security foundation.",
    challenges: [
      "Separating role trust policies from permission policies took repetition.",
      "Policy examples were easy to copy, but harder to explain line by line.",
    ],
    nextSteps: [
      "Build a small S3 access lab with a restricted IAM role.",
      "Use IAM Access Analyzer to review permissions.",
    ],
    videoSlug: "iam-foundations",
  },
  {
    slug: "linux-networking-basics",
    title: "Linux Networking Basics",
    date: "2026-04-28",
    category: "Linux",
    summary:
      "Reviewed IP addresses, DNS lookup tools, open ports, and basic troubleshooting commands on Linux.",
    whatILearned: [
      "Commands like ip, ss, curl, dig, and traceroute answer different parts of the connectivity question.",
      "DNS problems can look like application problems until you test name resolution directly.",
    ],
    whyItMatters:
      "Cloud workloads still run on networks and operating systems, so debugging starts with fundamentals.",
    challenges: [
      "It was tempting to jump straight to the cloud console before checking the host.",
      "Reading command output carefully mattered more than memorizing flags.",
    ],
    nextSteps: [
      "Create a repeatable network troubleshooting checklist.",
      "Practice with a private EC2 instance and security group rules.",
    ],
  },
  {
    slug: "security-groups-vs-nacls",
    title: "Security Groups vs Network ACLs",
    date: "2026-04-27",
    category: "Cloud Security",
    summary:
      "Compared stateful security groups with stateless network ACLs and mapped where each control applies in a VPC.",
    whatILearned: [
      "Security groups protect elastic network interfaces and track return traffic.",
      "Network ACLs apply at subnet level and need explicit inbound and outbound rules.",
    ],
    whyItMatters:
      "Knowing where traffic is allowed or blocked helps prevent exposed services and shortens incident response.",
    challenges: [
      "Remembering rule evaluation order required a diagram.",
      "Stateless outbound rules were easy to miss during testing.",
    ],
    nextSteps: [
      "Build a VPC lab with public and private subnets.",
      "Document packet flow from browser to EC2.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "static-website-on-s3-cloudfront",
    title: "Static Website on S3 and CloudFront",
    status: "In Progress",
    difficulty: "Beginner",
    services: ["S3", "CloudFront", "Route 53", "ACM"],
    description:
      "Host a secure static website with HTTPS, CDN caching, and a custom domain.",
    problem:
      "A personal site needs reliable hosting, fast global delivery, and HTTPS without managing servers.",
    solution:
      "Use S3 for object storage, CloudFront for edge delivery, ACM for certificates, and Route 53 for DNS.",
    architecture:
      "Browser requests resolve through Route 53, terminate TLS at CloudFront, and retrieve static assets from a private S3 origin.",
    steps: [
      "Create an S3 bucket for the site assets.",
      "Configure CloudFront with an origin access control.",
      "Attach an ACM certificate and custom domain.",
      "Set cache behavior and test invalidations.",
    ],
    lessons: [
      "Private origins are safer than public website buckets.",
      "DNS and certificate region details need careful attention.",
    ],
    githubUrl: "https://github.com/",
    youtubeUrl: "https://www.youtube.com/",
    videoSlug: "static-site-demo",
  },
  {
    slug: "vpc-web-app-lab",
    title: "VPC Web App Lab",
    status: "Upcoming",
    difficulty: "Intermediate",
    services: ["VPC", "EC2", "ALB", "Security Groups", "CloudWatch"],
    description:
      "Deploy a basic web app across public and private subnets with logging and network controls.",
    problem:
      "Applications need isolated network tiers, controlled ingress, and observability from the start.",
    solution:
      "Place the load balancer in public subnets, app instances in private subnets, and restrict access with security groups.",
    architecture:
      "Internet traffic reaches an ALB, forwards to private EC2 targets, and sends metrics and logs to CloudWatch.",
    steps: [
      "Design the VPC CIDR and subnet layout.",
      "Create route tables and internet gateway access.",
      "Launch EC2 targets in private subnets.",
      "Connect the ALB and verify health checks.",
    ],
    lessons: [
      "Network boundaries are easier to manage when named clearly.",
      "Health checks reveal routing and firewall mistakes quickly.",
    ],
  },
  {
    slug: "cloudtrail-security-monitoring",
    title: "CloudTrail Security Monitoring",
    status: "Completed",
    difficulty: "Advanced",
    services: ["CloudTrail", "CloudWatch", "SNS", "IAM", "S3"],
    description:
      "Capture AWS account activity and alert on sensitive IAM and root account events.",
    problem:
      "Security teams need visibility when privileged actions happen in an AWS account.",
    solution:
      "Centralize CloudTrail logs, create metric filters, and notify on high-risk events.",
    architecture:
      "CloudTrail writes events to S3 and CloudWatch Logs, metric filters match risky actions, and SNS sends alerts.",
    steps: [
      "Enable an organization or account-level trail.",
      "Store logs in a protected S3 bucket.",
      "Create CloudWatch metric filters for IAM changes.",
      "Wire alarms to an SNS topic.",
    ],
    lessons: [
      "Logging is only useful when alerts are specific enough to act on.",
      "Protecting the log bucket is part of the security control.",
    ],
    githubUrl: "https://github.com/",
  },
];

export const videos: Video[] = [
  {
    slug: "iam-foundations",
    title: "AWS IAM Foundations",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "A walkthrough of IAM users, groups, roles, policies, and why least privilege matters.",
    relatedLabel: "AWS IAM Foundations",
    relatedHref: "/learning/aws-iam-foundations",
  },
  {
    slug: "static-site-demo",
    title: "Static Website on S3 and CloudFront Demo",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "A project demo covering S3 hosting, CloudFront distribution, HTTPS, and DNS.",
    relatedLabel: "Static Website on S3 and CloudFront",
    relatedHref: "/projects/static-website-on-s3-cloudfront",
  },
];

export const roadmap = [
  {
    title: "Foundation",
    items: ["Linux basics", "Git and GitHub", "Networking fundamentals", "HTTP and DNS"],
  },
  {
    title: "AWS Core",
    items: ["IAM", "S3", "EC2", "VPC", "CloudWatch"],
  },
  {
    title: "Deployment",
    items: ["Static websites", "Load balancers", "Domains and HTTPS", "Basic CI/CD"],
  },
  {
    title: "Automation",
    items: ["Bash scripting", "Infrastructure as Code", "AWS CLI", "Repeatable labs"],
  },
  {
    title: "Security",
    items: ["Least privilege", "Logging and monitoring", "Network controls", "Incident basics"],
  },
  {
    title: "Advanced Projects",
    items: ["Multi-tier VPC app", "Security monitoring lab", "Serverless workflows", "Threat detection"],
  },
];
