export type LearningLog = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  whatILearned: string[];
  whyItMatters: string;
  challenges: string[];
  builtTested: string[];
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
    slug: "what-i-learned-about-s3",
    title: "What I Learned About S3",
    date: "2026-04-30",
    category: "AWS",
    summary:
      "S3 is object storage for files, backups, static websites, logs, and cloud assets, but permissions and public access need careful handling.",
    whatILearned: [
      "S3 stores objects inside buckets instead of running like a normal file server.",
      "Bucket policies, IAM policies, and public access settings all affect who can read or write objects.",
      "Versioning, encryption, and lifecycle rules make S3 useful for safer long-term storage.",
    ],
    whyItMatters:
      "S3 is used in many AWS projects, and one bad permission setting can expose private files or break an application.",
    challenges: [
      "I first treated S3 like a regular folder and forgot that object permissions are controlled separately.",
      "I had to slow down and check the difference between blocking public access and allowing CloudFront access.",
    ],
    builtTested: [
      "Created an S3 bucket and uploaded test files.",
      "Tested private vs public object access.",
      "Reviewed how a static website can use S3 with CloudFront.",
    ],
  },
  {
    slug: "ec2-vs-s3",
    title: "EC2 vs S3",
    date: "2026-04-29",
    category: "AWS",
    summary:
      "EC2 gives you virtual servers for running workloads, while S3 gives you object storage for storing files and assets.",
    whatILearned: [
      "EC2 is compute: it runs operating systems, apps, services, and scripts.",
      "S3 is storage: it stores objects and serves files when permissions allow it.",
      "A common cloud app can use EC2 for the backend and S3 for static assets, backups, or logs.",
    ],
    whyItMatters:
      "Choosing the wrong service can make a solution harder to manage, more expensive, or less secure.",
    challenges: [
      "I initially compared them like they were similar products, but they solve different problems.",
      "I had to think in terms of compute, storage, networking, and security boundaries.",
    ],
    builtTested: [
      "Mapped a simple hosted app architecture using EC2 and S3 together.",
      "Compared what happens when an HTML file is hosted from S3 versus served from a web server on EC2.",
    ],
  },
  {
    slug: "iam-basics",
    title: "IAM Basics",
    date: "2026-04-28",
    category: "Cloud Security",
    summary:
      "IAM controls who can access AWS resources, what actions they can take, and under which conditions.",
    whatILearned: [
      "Users, groups, roles, and policies are the core IAM building blocks.",
      "Roles are better than long-term access keys when AWS services need to talk to each other.",
      "Least privilege means giving only the permissions needed for a task.",
    ],
    whyItMatters:
      "IAM is one of the most important cloud security controls because permission mistakes can expose an entire AWS account.",
    challenges: [
      "Separating trust policies from permission policies took repetition.",
      "Policy examples were easy to copy but harder to explain line by line.",
    ],
    builtTested: [
      "Created an IAM policy for limited S3 access.",
      "Reviewed how an IAM role can be attached to an AWS service.",
      "Tested what happens when a permission is missing.",
    ],
    videoSlug: "iam-foundations",
  },
  {
    slug: "how-dns-works-with-hosted-apps",
    title: "How DNS Works With Hosted Apps",
    date: "2026-04-27",
    category: "Networking",
    summary:
      "DNS connects a domain name to the infrastructure hosting an app, such as a load balancer, CloudFront distribution, or server IP.",
    whatILearned: [
      "A records, CNAME records, and alias records point traffic to different kinds of targets.",
      "Hosted apps often use DNS with HTTPS certificates, CDNs, and load balancers.",
      "DNS changes can take time to propagate because records are cached using TTL values.",
    ],
    whyItMatters:
      "If DNS is wrong, users cannot reach the app even when the server, bucket, or load balancer is working correctly.",
    challenges: [
      "I confused where the domain is registered with where DNS records are managed.",
      "I had to trace the full path from browser to DNS record to hosting target.",
    ],
    builtTested: [
      "Drew a request flow for a domain pointing to a hosted cloud app.",
      "Compared DNS targets for EC2, CloudFront, and load balancers.",
      "Checked how HTTPS certificates fit into the hosting flow.",
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
    relatedLabel: "IAM Basics",
    relatedHref: "/learning/iam-basics",
  },
  {
    slug: "static-site-demo",
    title: "Static Website on S3 and CloudFront Demo",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "A project demo covering S3 hosting, CloudFront distribution, HTTPS, and DNS.",
    relatedLabel: "Static Website on S3 and CloudFront",
    relatedHref: "/projects/aws-s3-static-website",
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
