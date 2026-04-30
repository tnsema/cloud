// data/roadmap.ts

export const roadmap = [
  {
    id: "linux",
    title: "Linux (Foundation)",
    description: "Master Linux because most cloud systems run on it.",
    topics: [
      {
        title: "Core Navigation",
        items: [
          { title: "pwd, ls, cd", completed: true },
          { title: "cp, mv, rm, mkdir, touch", completed: true },
          { title: "cat, less, head, tail", completed: true }
        ]
      },
      {
        title: "File Permissions",
        items: [
          { title: "chmod (numeric and symbolic)", completed: false },
          { title: "chown, chgrp", completed: false },
          { title: "read, write, execute permissions", completed: false },
          { title: "user, group, others", completed: false }
        ]
      },
      {
        title: "Users & Groups",
        items: [
          { title: "useradd, usermod, passwd", completed: false },
          { title: "/etc/passwd and /etc/shadow", completed: false },
          { title: "group management", completed: false }
        ]
      },
      {
        title: "Processes & Services",
        items: [
          { title: "ps, top, htop", completed: false },
          { title: "kill, killall", completed: false },
          { title: "systemctl start/stop/restart", completed: false },
          { title: "service management", completed: false }
        ]
      },
      {
        title: "Networking Commands",
        items: [
          { title: "ip a, ifconfig", completed: true },
          { title: "ping, curl, wget", completed: true },
          { title: "netstat, ss", completed: false },
          { title: "check open ports", completed: false }
        ]
      },
      {
        title: "SSH",
        items: [
          { title: "ssh-keygen", completed: false },
          { title: "connect to remote servers", completed: true },
          { title: "secure SSH access", completed: false }
        ]
      }
    ]
  },

  {
    id: "networking",
    title: "Networking",
    description: "Understand how systems communicate. This is critical for cloud.",
    topics: [
      {
        title: "Fundamentals",
        items: [
          { title: "IP addresses (IPv4)", completed: true },
          { title: "public vs private IP", completed: true },
          { title: "ports (80, 443, 22)", completed: true }
        ]
      },
      {
        title: "Protocols",
        items: [
          { title: "HTTP vs HTTPS", completed: true },
          { title: "TCP vs UDP", completed: true },
          { title: "DNS basics", completed: true }
        ]
      },
      {
        title: "DNS",
        items: [
          { title: "A, CNAME, MX records", completed: true },
          { title: "domain resolution flow", completed: true },
          { title: "how browser reaches server", completed: true }
        ]
      },
      {
        title: "Subnetting",
        items: [
          { title: "CIDR notation", completed: false },
          { title: "subnets", completed: true },
          { title: "network ranges", completed: true }
        ]
      },
      {
        title: "Firewalls",
        items: [
          { title: "inbound vs outbound rules", completed: false },
          { title: "allow/deny traffic", completed: false }
        ]
      }
    ]
  },

  {
    id: "aws-core",
    title: "AWS Core",
    description: "Learn core AWS services and concepts.",
    topics: [
      {
        title: "Infrastructure",
        items: [
          { title: "Regions", completed: true },
          { title: "Availability Zones", completed: true },
          { title: "Edge locations", completed: true }
        ]
      },
      {
        title: "Core Services",
        items: [
          { title: "EC2 (compute)", completed: false },
          { title: "S3 (storage)", completed: true },
          { title: "RDS (database)", completed: false },
          { title: "VPC (networking)", completed: false },
          { title: "IAM (identity)", completed: false }
        ]
      },
      {
        title: "Concepts",
        items: [
          { title: "Shared Responsibility Model", completed: false },
          { title: "High availability", completed: false },
          { title: "Scalability", completed: false },
          { title: "Pay-as-you-go", completed: false }
        ]
      }
    ]
  },

  {
    id: "aws-practical",
    title: "AWS Practical",
    description: "Apply AWS knowledge in real scenarios.",
    topics: [
      {
        title: "EC2",
        items: [
          { title: "launch instances", completed: false },
          { title: "SSH access", completed: false },
          { title: "install web server", completed: false },
          { title: "deploy application", completed: false }
        ]
      },
      {
        title: "S3",
        items: [
          { title: "static hosting", completed: true },
          { title: "bucket policies", completed: false },
          { title: "public vs private access", completed: true }
        ]
      },
      {
        title: "VPC",
        items: [
          { title: "public vs private subnets", completed: false },
          { title: "internet gateway", completed: false },
          { title: "route tables", completed: false }
        ]
      },
      {
        title: "IAM",
        items: [
          { title: "roles vs users", completed: false },
          { title: "policy structure", completed: false },
          { title: "least privilege", completed: false }
        ]
      },
      {
        title: "Route 53",
        items: [
          { title: "DNS management", completed: false },
          { title: "domain routing", completed: false }
        ]
      }
    ]
  },

  {
    id: "cicd",
    title: "CI/CD",
    description: "Automate building and deployment of applications.",
    topics: [
      {
        title: "Concepts",
        items: [
          { title: "continuous integration", completed: true },
          { title: "continuous deployment", completed: true },
          { title: "pipeline stages", completed: true }
        ]
      },
      {
        title: "Tools",
        items: [
          { title: "GitHub Actions", completed: true },
          { title: "GitLab CI", completed: false }
        ]
      },
      {
        title: "Automation",
        items: [
          { title: "auto deploy to EC2", completed: false },
          { title: "auto deploy to S3", completed: false },
          { title: "environment variables", completed: false }
        ]
      }
    ]
  },

  {
    id: "iac",
    title: "Infrastructure as Code",
    description: "Manage infrastructure using code.",
    topics: [
      {
        title: "Tools",
        items: [
          { title: "Terraform", completed: false },
          { title: "CloudFormation", completed: false }
        ]
      },
      {
        title: "Concepts",
        items: [
          { title: "define infrastructure in code", completed: false },
          { title: "reusable modules", completed: false },
          { title: "automated provisioning", completed: false }
        ]
      }
    ]
  },

  {
    id: "architecture",
    title: "Architecture",
    description: "Design scalable and reliable systems.",
    topics: [
      {
        title: "Concepts",
        items: [
          { title: "high availability", completed: false },
          { title: "load balancing", completed: false },
          { title: "auto scaling", completed: false },
          { title: "fault tolerance", completed: false }
        ]
      },
      {
        title: "AWS Services",
        items: [
          { title: "ELB", completed: false },
          { title: "Auto Scaling Groups", completed: false },
          { title: "multi-AZ design", completed: false }
        ]
      }
    ]
  },

  {
    id: "security",
    title: "Cloud Security",
    description: "Secure cloud systems. This leads to cloud security engineering.",
    topics: [
      {
        title: "IAM",
        items: [
          { title: "roles vs users", completed: false },
          { title: "policy JSON", completed: false },
          { title: "least privilege", completed: false }
        ]
      },
      {
        title: "Network Security",
        items: [
          { title: "security groups", completed: false },
          { title: "NACLs", completed: false },
          { title: "private vs public", completed: false }
        ]
      },
      {
        title: "Data Security",
        items: [
          { title: "encryption at rest", completed: false },
          { title: "encryption in transit", completed: false }
        ]
      },
      {
        title: "Monitoring",
        items: [
          { title: "CloudWatch", completed: false },
          { title: "CloudTrail", completed: false }
        ]
      },
      {
        title: "Protection",
        items: [
          { title: "AWS WAF", completed: false },
          { title: "AWS Shield", completed: false }
        ]
      }
    ]
  }
];
