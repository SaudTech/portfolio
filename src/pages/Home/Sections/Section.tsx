import React from "react";
import { cn } from "../../../utils/cn";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

// On xl screens each section fills the viewport and leaves room on the right for the dial.
const Section: React.FC<SectionProps> = ({ id, className, children }) => (
  <section
    id={id}
    className={cn(
      "flex snap-start scroll-mt-14 flex-col justify-center px-5 py-16 sm:px-10 xl:min-h-screen xl:scroll-mt-0 xl:py-20 xl:pl-20 xl:pr-[470px]",
      className
    )}
  >
    {children}
  </section>
);

interface EyebrowProps {
  index?: number;
  className?: string;
  children: React.ReactNode;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ index, className, children }) => (
  <div
    className={cn(
      "flex items-center gap-3 text-[13px] font-medium uppercase leading-none tracking-[.18em]",
      className
    )}
  >
    <span aria-hidden="true" className="h-px w-8 bg-accent" />
    {index !== undefined && (
      <span className="tabular-nums text-accent-ink">{String(index).padStart(2, "0")}</span>
    )}
    <span className="text-ink">{children}</span>
  </div>
);

export default Section;
