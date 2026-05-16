import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteDescription =
  "Thobile Sema portfolio documenting cloud engineering, AWS projects, cloud security learning, roadmap notes, and practical infrastructure labs.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description: siteDescription,
  applicationName: "Thobile Sema Portfolio",
  authors: [{ name: "Thobile Sema" }],
  creator: "Thobile Sema",
  publisher: "Thobile Sema",
  keywords: [
    "Thobile Sema",
    "portfolio",
    "cloud engineer portfolio",
    "AWS portfolio",
    "cloud security",
    "cloud projects",
    "AWS projects",
    "S3",
    "CloudFront",
    "IAM",
    "EC2",
    "Linux",
    "networking",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Portfolio",
    description: siteDescription,
    url: "/",
    siteName: "Thobile Sema Portfolio",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Portfolio",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thobile Sema",
    url: siteUrl,
    email: "mailto:thobilesema@gmail.com",
    telephone: "0838133619",
    jobTitle: "Cloud Engineer in Progress",
    knowsAbout: [
      "AWS",
      "Cloud Engineering",
      "Cloud Security",
      "Linux",
      "Networking",
      "IAM",
      "Amazon S3",
      "CloudFront",
      "EC2",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
