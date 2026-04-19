import LoadingLayout from "@/components/ui/loading-layout";
import "./globals.css";
import { Cinzel, Inter } from "next/font/google";
import Head from "next/head";   
import type { Metadata } from "next";
import { generatePersonSchema } from "@/lib/seo-utils";

// You can change this to your custom favicon icon, title and description
export const metadata: Metadata = {
  metadataBase: new URL("https://rashedul-haque-rasel.vercel.app"),
  title: {
    default: "Rashedul Haque Rasel | Full Stack & MERN Developer from Bangladesh",
    template: "%s | Rashedul Haque Rasel",
  },
  description:
    "Portfolio of Rashedul Haque Rasel, an expert Full Stack Web Developer from Bangladesh specializing in MERN stack, Next.js, and modern web applications.",
  keywords: [
    "Rashedul Haque Rasel",
    "Rasel Developer",
    "Full Stack Developer Bangladesh",
    "MERN Stack Developer",
    "Frontend Developer",
    "Student Developer",
    "Best Developer in Bangladesh",
    "ScaleUp IT Company",
    "ScaleUp Ads Agency",
    "Web Developer Portfolio",
    "JavaScript Developer Portfolio",
  ],
  authors: [{ name: "Rashedul Haque Rasel" }],
  creator: "Rashedul Haque Rasel",
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://rashedul-haque-rasel.vercel.app",
    siteName: "Rashedul Haque Rasel Portfolio",
    title: "Rashedul Haque Rasel | Full Stack & MERN Developer",
    description: "Portfolio of Rashedul Haque Rasel, an expert Full Stack Web Developer from Bangladesh specializing in the MERN stack and Next.js.",
    // You can uncomment when actual images are available 
    // images: [{ url: '/api/og', width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashedul Haque Rasel | Full Stack Developer",
    description: "Portfolio of Rashedul Haque Rasel, an expert Full Stack Web Developer from Bangladesh specializing in the MERN stack and Next.js.",
    // images: ['/api/og'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
const inter = Inter({ subsets: ["latin"] });

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cinzel.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="83790042a2bda3cc"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePersonSchema()) }}
        />
        <LoadingLayout>
          {children}
        </LoadingLayout>
      </body>
    </html>
  );
}
