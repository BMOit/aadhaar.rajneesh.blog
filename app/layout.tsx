import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "UIDAI Hackathon 2026 Project | Rajneesh",
  description: "Matplot Charts for detailed analysis. UIDAI Data Hackathon 2026 Project by Rajneesh",
  openGraph: {
    title: "UIDAI Hackathon 2026 Project | Rajneesh",
    description: "Matplot Charts for detailed analysis. UIDAI Data Hackathon 2026 Project by Rajneesh",
    images: [
      {
        url: "https://aadhaar.rajneesh.blog/og.png",
        width: 1200,
        height: 630,
        alt: "Matplot Charts of UIDAI Data Hackathon 2026 Project",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UIDAI Hackathon 2026 Project | Rajneesh",
    description: "Matplot Charts for detailed analysis. UIDAI Data Hackathon 2026 Project by Rajneesh",
    images: ["https://aadhaar.rajneesh.blog/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased max-w-2xl mx-4 mt-2 lg:mx-auto">
        <main className="flex-auto min-w-0 pt-5 md:pt-16 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
