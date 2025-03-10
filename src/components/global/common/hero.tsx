import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Section } from "./section";

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
}

export default function Hero({ image, title, subtitle, className, children }: HeroProps) {
  return (
    <Section className={cn('p-6', className)}>
        <div
        className={cn(
          'relative flex flex-col items-start justify-center gap-5 overflow-hidden',
          'sm:items-center sm:gap-6 sm:rounded-lg sm:border sm:bg-card sm:px-8 sm:py-20 sm:shadow-tile lg:gap-8',
          "bg-cover bg-center bg-no-repeat",
        )}
        style={{ backgroundImage: `url(${image})` }}
      >
      {/* Overlay för bättre kontrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Innehåll i mitten */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl sm:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg sm:text-xl opacity-90">{subtitle}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
      </div>
    </Section>
  );
}
