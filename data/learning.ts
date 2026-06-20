export type LearningStatus = "Completed" | "In Progress" | "Planned";
export type LearningDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type LearningLog = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  status: LearningStatus;
  difficulty: LearningDifficulty;
  summary: string;
  keyTopics: string[];
  toolsUsed: string[];
  whatILearned: string[];
  whyItMatters: string;
  challenges: string[];
  mistakes: string[];
  builtTested: string[];
  nextSteps: string[];
  relatedProjects: string[];
  videoSlug: string;
};

export const learningLogs: LearningLog[] = [
  {
    id: "what-i-learned-about-s3",
    slug: "what-i-learned-about-s3",
    title: "What I Learned About S3",
    date: "2026-04-30",
    category: "AWS",
    status: "Completed",
    difficulty: "Beginner",
    summary:
      "S3 is object storage for files, backups, static websites, logs, and cloud assets, but permissions and public access need careful handling.",
    keyTopics: ["Object storage", "Buckets", "Permissions", "Static hosting"],
    toolsUsed: ["AWS Console", "Amazon S3", "IAM"],
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
    mistakes: [],
    builtTested: [
      "Created an S3 bucket and uploaded test files.",
      "Tested private vs public object access.",
      "Reviewed how a static website can use S3 with CloudFront.",
    ],
    nextSteps: [
      "Practice hosting a private S3 origin behind CloudFront.",
      "Review bucket policy examples and explain each permission line.",
    ],
    relatedProjects: ["aws-s3-static-website", "beauno-resort-s3-cloudfront"],
    videoSlug: "",
  },
  {
    id: "ec2-vs-s3",
    slug: "ec2-vs-s3",
    title: "EC2 vs S3",
    date: "2026-04-29",
    category: "AWS",
    status: "Completed",
    difficulty: "Beginner",
    summary:
      "EC2 gives you virtual servers for running workloads, while S3 gives you object storage for storing files and assets.",
    keyTopics: ["Compute", "Object storage", "Cloud architecture"],
    toolsUsed: ["AWS Console", "Amazon EC2", "Amazon S3"],
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
    mistakes: [],
    builtTested: [
      "Mapped a simple hosted app architecture using EC2 and S3 together.",
      "Compared what happens when an HTML file is hosted from S3 versus served from a web server on EC2.",
    ],
    nextSteps: [],
    relatedProjects: [],
    videoSlug: "",
  },
  {
    id: "iam-basics",
    slug: "iam-basics",
    title: "IAM Basics",
    date: "2026-04-28",
    category: "Cloud Security",
    status: "Completed",
    difficulty: "Beginner",
    summary:
      "IAM controls who can access AWS resources, what actions they can take, and under which conditions.",
    keyTopics: ["Users", "Groups", "Roles", "Policies", "Least privilege"],
    toolsUsed: ["AWS Console", "IAM"],
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
    mistakes: [],
    builtTested: [
      "Created an IAM policy for limited S3 access.",
      "Reviewed how an IAM role can be attached to an AWS service.",
      "Tested what happens when a permission is missing.",
    ],
    nextSteps: [
      "Practice writing smaller custom policies instead of using broad managed policies.",
    ],
    relatedProjects: ["aws-s3-static-website", "beauno-resort-s3-cloudfront"],
    videoSlug: "iam-foundations",
  },
  {
    id: "how-dns-works-with-hosted-apps",
    slug: "how-dns-works-with-hosted-apps",
    title: "How DNS Works With Hosted Apps",
    date: "2026-04-27",
    category: "Networking",
    status: "Completed",
    difficulty: "Beginner",
    summary:
      "DNS connects a domain name to the infrastructure hosting an app, such as a load balancer, CloudFront distribution, or server IP.",
    keyTopics: ["DNS records", "Domains", "HTTPS", "CloudFront", "TTL"],
    toolsUsed: ["DNS records", "CloudFront", "Route 53"],
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
    mistakes: [],
    builtTested: [
      "Drew a request flow for a domain pointing to a hosted cloud app.",
      "Compared DNS targets for EC2, CloudFront, and load balancers.",
      "Checked how HTTPS certificates fit into the hosting flow.",
    ],
    nextSteps: [],
    relatedProjects: ["beauno-resort-s3-cloudfront"],
    videoSlug: "",
  },
];
