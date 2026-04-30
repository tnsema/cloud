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
  }
];