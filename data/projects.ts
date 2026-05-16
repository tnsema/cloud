// data/projects.ts

export const projects = [
  {
    id: "aws-s3-static-website",
    slug: "aws-s3-static-website",

    title: "Static Website Hosted on AWS S3",
    shortDescription: "A static website deployed using AWS S3 static website hosting.",
    status: "Completed", // Upcoming | In Progress | Completed
    difficulty: "Beginner", // Beginner | Intermediate | Advanced

    category: "Cloud Hosting",
    dateStarted: "2026-05-01",
    dateCompleted: "",

    liveDemoUrl: "",
    githubUrl: "",
    youtubePlaylistUrl: "",

    overview: {
      problem: "",
      solution: "",
      goal: "",
      targetUsers: "",
    },

    cloudServices: [
      "Amazon S3",
      "IAM",
      "Route 53",
      "CloudFront"
    ],

    toolsUsed: [
      "Next.js",
      "GitHub",
      "AWS Console"
    ],

    architecture: {
      description: "",
      diagramImage: "",
      requestFlow: [
        "User visits website",
        "DNS points domain to hosting service",
        "S3 serves static files"
      ],
    },

    implementationSteps: [
      {
        title: "Create S3 bucket",
        description: "",
        commands: [],
        screenshot: "",
      },
      {
        title: "Upload website files",
        description: "",
        commands: [],
        screenshot: "",
      }
    ],

    screenshots: [
      {
        title: "S3 bucket configuration",
        image: "",
        description: "",
      },
      {
        title: "Static website endpoint",
        image: "",
        description: "",
      }
    ],

    videos: [
      {
        title: "Project Demo",
        youtubeUrl: "",
        embedUrl: "",
        description: "",
      },
      {
        title: "What I Learned",
        youtubeUrl: "",
        embedUrl: "",
        description: "",
      }
    ],

    challenges: [
      {
        issue: "",
        cause: "",
        solution: "",
        lessonLearned: "",
      }
    ],

    mistakes: [
      {
        mistake: "",
        fix: "",
        lesson: "",
      }
    ],

    securityConsiderations: [
      {
        topic: "Public access",
        explanation: "",
        improvement: "",
      },
      {
        topic: "IAM permissions",
        explanation: "",
        improvement: "",
      }
    ],

    costConsiderations: [
      {
        service: "Amazon S3",
        estimatedCost: "",
        notes: "",
      },
      {
        service: "CloudFront",
        estimatedCost: "",
        notes: "",
      }
    ],

    lessonsLearned: [
      "",
      "",
      ""
    ],

    futureImprovements: [
      "Add CloudFront CDN",
      "Add HTTPS",
      "Automate deployment with GitHub Actions"
    ],

    relatedLearningLogs: [
      "what-i-learned-about-s3",
      "dns-basics-for-cloud-hosting"
    ],

    tags: [
      "AWS",
      "S3",
      "Static Hosting",
      "Cloud"
    ],
  },

  {
  id: "beauno-resort-s3-cloudfront",
  slug: "beauno-resort-s3-cloudfront",

  title: "Beauno Resort Website Hosted on AWS S3 and CloudFront",
  shortDescription:
    "A luxury resort static website deployed using Amazon S3 static hosting and CloudFront HTTPS delivery.",

  status: "Completed",
  difficulty: "Beginner",

  category: "Cloud Hosting",

  dateStarted: "2026-05-16",
  dateCompleted: "2026-05-16",

  liveDemoUrl: "https://d2nuu2lclhuan1.cloudfront.net/",
  githubUrl: "",
  youtubePlaylistUrl: "",

  overview: {
    problem:
      "The resort needed an online presence to showcase weddings, parties, ceremonies, and event hosting services.",

    solution:
      "A static website was created and deployed using Amazon S3 static website hosting and delivered securely through Amazon CloudFront over HTTPS.",

    goal:
      "The goal of the project was to learn AWS cloud hosting fundamentals including S3 static hosting, public bucket configuration, CloudFront CDN setup, and HTTPS delivery.",

    targetUsers:
      "Potential resort customers, wedding planners, event organizers, and portfolio reviewers/recruiters.",
  },

  cloudServices: [
    "Amazon S3",
    "Amazon CloudFront",
    "IAM"
  ],

  toolsUsed: [
    "HTML",
    "CSS",
    "JavaScript",
    "AWS Console"
  ],

  architecture: {
    description:
      "The website files are stored inside an Amazon S3 bucket configured for static website hosting. Amazon CloudFront is used as a CDN and HTTPS layer to securely distribute the website globally.",

    diagramImage: "",

    requestFlow: [
      "User opens website in browser",
      "Request reaches CloudFront distribution",
      "CloudFront forwards request to S3 static website endpoint",
      "S3 serves HTML, CSS, JavaScript, and image files",
      "CloudFront caches and delivers content over HTTPS"
    ],
  },

  implementationSteps: [
    {
      title: "Create S3 bucket",
      description:
        "Created an Amazon S3 bucket to host the Beauno Resort static website files.",

      commands: [],

      screenshot: "",
    },

    {
      title: "Upload website files",
      description:
        "Uploaded HTML, CSS, JavaScript, and image assets to the S3 bucket.",

      commands: [],

      screenshot: "",
    },

    {
      title: "Enable static website hosting",
      description:
        "Configured the S3 bucket for static website hosting using index.html as the default root document.",

      commands: [],

      screenshot: "",
    },

    {
      title: "Configure public access",
      description:
        "Updated bucket permissions and bucket policy to allow public read access to website files.",

      commands: [],

      screenshot: "",
    },

    {
      title: "Create CloudFront distribution",
      description:
        "Created a CloudFront distribution using the S3 website endpoint as the origin.",

      commands: [],

      screenshot: "",
    },

    {
      title: "Enable HTTPS delivery",
      description:
        "Configured CloudFront to redirect HTTP traffic to HTTPS for secure website access.",

      commands: [],

      screenshot: "",
    }
  ],

  screenshots: [
    {
      title: "S3 bucket configuration",
      image: "",
      description:
        "Amazon S3 bucket configured for static website hosting.",
    },

    {
      title: "Static website hosting settings",
      image: "",
      description:
        "S3 static website hosting enabled with index.html configured.",
    },

    {
      title: "CloudFront distribution",
      image: "",
      description:
        "CloudFront distribution connected to the S3 website endpoint.",
    },

    {
      title: "Live Beauno Resort website",
      image: "",
      description:
        "Final deployed website accessible through CloudFront HTTPS URL.",
    }
  ],

  videos: [
    {
      title: "Project Demo",
      youtubeUrl: "",
      embedUrl: "",
      description:
        "Demonstration of the deployed Beauno Resort website hosted on AWS.",
    },

    {
      title: "AWS S3 and CloudFront Setup",
      youtubeUrl: "",
      embedUrl: "",
      description:
        "Explanation of how S3 static hosting and CloudFront were configured.",
    }
  ],

  challenges: [
    {
      issue:
        "Website worked on the original browser but failed on other devices.",

      cause:
        "The S3 website endpoint was only accessible over HTTP and some devices/networks blocked insecure requests.",

      solution:
        "Implemented Amazon CloudFront to provide HTTPS delivery.",

      lessonLearned:
        "Modern browsers and devices often require HTTPS for reliable public access.",
    },

    {
      issue:
        "CloudFront returned a 504 Gateway Timeout error.",

      cause:
        "CloudFront attempted HTTPS communication with the S3 website endpoint.",

      solution:
        "Changed the CloudFront origin protocol policy to HTTP only.",

      lessonLearned:
        "S3 static website endpoints only support HTTP origins.",
    }
  ],

  mistakes: [
    {
      mistake:
        "Used the full URL including http:// when configuring the CloudFront origin.",

      fix:
        "Used only the domain name without the protocol or trailing slash.",

      lesson:
        "CloudFront origins require only the domain name.",
    },

    {
      mistake:
        "Initially assumed HTTPS was automatically supported by S3 static hosting.",

      fix:
        "Implemented CloudFront for HTTPS support.",

      lesson:
        "S3 static website hosting does not provide HTTPS directly.",
    }
  ],

  securityConsiderations: [
    {
      topic: "Public access",

      explanation:
        "The S3 bucket required public read access for website hosting.",

      improvement:
        "Restrict direct bucket access later and allow access only through CloudFront.",
    },

    {
      topic: "HTTPS delivery",

      explanation:
        "HTTP-only websites may expose traffic insecurely.",

      improvement:
        "CloudFront was added to enforce HTTPS for secure communication.",
    },

    {
      topic: "IAM permissions",

      explanation:
        "Administrative access should follow least privilege principles.",

      improvement:
        "Use dedicated IAM users and avoid root account usage.",
    }
  ],

  costConsiderations: [
    {
      service: "Amazon S3",

      estimatedCost:
        "Very low for small static websites with low traffic.",

      notes:
        "Costs depend on storage size and request volume.",
    },

    {
      service: "CloudFront",

      estimatedCost:
        "Low cost for lightweight portfolio traffic.",

      notes:
        "Charges are based on bandwidth usage and requests.",
    }
  ],

  lessonsLearned: [
    "Amazon S3 can host static websites efficiently.",
    "CloudFront provides HTTPS and CDN functionality for static websites.",
    "Proper bucket permissions are required for public hosting.",
    "CloudFront origin protocol settings are important when using S3 website endpoints.",
    "Static cloud hosting is inexpensive and suitable for beginner cloud projects."
  ],

  futureImprovements: [
    "Connect custom domain using Route 53",
    "Add AWS Certificate Manager SSL certificate",
    "Migrate frontend to Next.js static export",
    "Implement booking enquiry backend using Lambda and API Gateway",
    "Store booking requests in DynamoDB",
    "Automate deployment using GitHub Actions"
  ],

  relatedLearningLogs: [
    "what-i-learned-about-s3-static-hosting",
    "cloudfront-https-setup",
    "dns-and-static-hosting-basics"
  ],

  tags: [
    "AWS",
    "S3",
    "CloudFront",
    "Static Hosting",
    "CDN",
    "HTTPS",
    "Cloud",
    "Frontend Deployment"
  ],
},

  {
    id: "aws-scalling-app",
    slug: "aws-scalling-app",

    title: "University Registration Scalling System",
    shortDescription: "A system that scales well when the traffic increases.",
    status: "Upcoming", // Upcoming | In Progress | Completed
    difficulty: "Advanced", // Beginner | Intermediate | Advanced

    category: "Cloud Scalling",
    dateStarted: "2026-05-01",
    dateCompleted: "",

    liveDemoUrl: "",
    githubUrl: "",
    youtubePlaylistUrl: "",

    overview: {
      problem: "",
      solution: "",
      goal: "",
      targetUsers: "",
    },

    cloudServices: [
      "Amazon S3",
      "IAM",
      "Route 53",
      "CloudFront"
    ],

    toolsUsed: [
      "Next.js",
      "GitHub",
      "AWS Console"
    ],

    architecture: {
      description: "",
      diagramImage: "",
      requestFlow: [
        "User visits website",
        "DNS points domain to hosting service",
        "S3 serves static files"
      ],
    },

    implementationSteps: [
      {
        title: "Create S3 bucket",
        description: "",
        commands: [],
        screenshot: "",
      },
      {
        title: "Upload website files",
        description: "",
        commands: [],
        screenshot: "",
      }
    ],

    screenshots: [
      {
        title: "S3 bucket configuration",
        image: "",
        description: "",
      },
      {
        title: "Static website endpoint",
        image: "",
        description: "",
      }
    ],

    videos: [
      {
        title: "Project Demo",
        youtubeUrl: "",
        embedUrl: "",
        description: "",
      },
      {
        title: "What I Learned",
        youtubeUrl: "",
        embedUrl: "",
        description: "",
      }
    ],

    challenges: [
      {
        issue: "",
        cause: "",
        solution: "",
        lessonLearned: "",
      }
    ],

    mistakes: [
      {
        mistake: "",
        fix: "",
        lesson: "",
      }
    ],

    securityConsiderations: [
      {
        topic: "Public access",
        explanation: "",
        improvement: "",
      },
      {
        topic: "IAM permissions",
        explanation: "",
        improvement: "",
      }
    ],

    costConsiderations: [
      {
        service: "Amazon S3",
        estimatedCost: "",
        notes: "",
      },
      {
        service: "CloudFront",
        estimatedCost: "",
        notes: "",
      }
    ],

    lessonsLearned: [
      "",
      "",
      ""
    ],

    futureImprovements: [
      "Add CloudFront CDN",
      "Add HTTPS",
      "Automate deployment with GitHub Actions"
    ],

    relatedLearningLogs: [
      "what-i-learned-about-s3",
      "dns-basics-for-cloud-hosting"
    ],

    tags: [
      "AWS",
      "S3",
      "Static Hosting",
      "Cloud"
    ],
  }
];