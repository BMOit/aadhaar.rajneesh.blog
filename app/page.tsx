"use client";

import Image from "next/image";
import { useState } from "react";

function HeroImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative mb-10 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100 w-full"
      style={{ aspectRatio: "700 / 400" }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 transition-opacity duration-500 pointer-events-none ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src="/og.webp"
        draggable="false"
        className={`block w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        alt="UIDAI Data Hackathon 2026"
        width={700}
        height={400}
        priority
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

interface CardProps {
  title: string;
  description: string;
  linkText: string;
  href: string;
  download?: boolean;
  icon: React.ReactNode;
}

function Card({ title, description, linkText, href, download, icon }: CardProps) {
  return (
    <div className="group relative flex flex-col rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-colors duration-200 group-hover:bg-neutral-200">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">{title}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-4">
        {description}
      </p>
      <a
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
        href={href}
        {...(download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {linkText}
        <svg
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <HeroImage />
      <h1 className="pb-8 text-3xl font-semibold">UIDAI Data Hackathon 2026</h1>
      <div className="flex flex-col space-y-2">
        <p>
          <span className="font-semibold">Problem Statement</span>:
          Understanding repeated aadhar engagement patterns and their impact on
          users.
        </p>
        <p>
          <span className="font-semibold">Author</span>:{" "}
          <a
            href="https://linkedin.com/in/bmoit/"
            className="underline"
            target="_blank"
          >
            Rajneesh
          </a>
        </p>
        <p>
          <span className="font-semibold">Date of Submission</span>: 20th
          January, 2026{" "}
          <a
            className="text-[8.5px] italic underline"
            href="https://event.data.gov.in/challenge/uidai-data-hackathon-2026/"
          >
            More Info
          </a>
        </p>
      </div>
      <hr className="border-neutral-200 max-w-lg mx-auto my-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <Card
          title="Matplot Source Code"
          description="View the Python source code used for generating all visualizations in PNG and SVG formats."
          linkText="View Source"
          href="https://github.com/BMOit/UIDAI-Data-Hackathon-2026"
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          }
        />
        <Card
          title="Detailed Analysis"
          description="Download the comprehensive analysis document with visualizations and insights."
          linkText="Download PDF"
          href="/detailed-analysis.pdf"
          download
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          }
        />
      </div>
    </section>
  );
}
