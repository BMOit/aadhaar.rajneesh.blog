"use client";

import Image from "next/image";
import { useState } from "react";
import { Container, Button } from "@medusajs/ui";

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
}

function Card({ title, description, linkText, href, download }: CardProps) {
  return (
    <Container className="group flex flex-col h-full !bg-white !shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_2px_-1px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)]">
      <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">{title}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-4">
        {description}
      </p>
      <Button 
        className="
    bg-ui-contrast-bg-base
    text-ui-contrast-fg-primary

    border
    border-ui-contrast-border-base

    shadow-sm
    rounded-md

    hover:bg-ui-contrast-bg-hover
    active:bg-ui-contrast-bg-pressed

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-ui-contrast-ring
    focus-visible:ring-offset-2
    focus-visible:ring-offset-ui-bg-base

    transition-colors        "      asChild>
        <a
          href={href}
          {...(download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
        >
          {linkText}
        </a>
      </Button>
    </Container>
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
        />
        <Card
          title="Detailed Analysis"
          description="Download the comprehensive analysis document with visualizations and insights."
          linkText="Download PDF"
          href="/analysis.pdf"
          download
        />
      </div>
    </section>
  );
}
