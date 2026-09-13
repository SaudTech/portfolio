import React, { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const GAP = 8;
const EDGE = 12;

interface TermProps {
  tip: string;
  children: React.ReactNode;
}

// A word with a dotted underline that shows a tooltip right away on hover, focus, or tap.
// The tooltip renders in a portal so clamped or overflow-hidden parents cannot cut it off.
const Term: React.FC<TermProps> = ({ tip, children }) => {
  const id = useId();
  const anchorRef = useRef<HTMLSpanElement>(null);
  const tipRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  useLayoutEffect(() => {
    if (!open) {
      setPos(null);
      return;
    }
    const anchor = anchorRef.current?.getClientRects()[0];
    const box = tipRef.current?.getBoundingClientRect();
    if (!anchor || !box) return;
    const centered = anchor.left + anchor.width / 2 - box.width / 2;
    const left = Math.min(Math.max(centered, EDGE), window.innerWidth - box.width - EDGE);
    const above = anchor.top - box.height - GAP;
    setPos({ left, top: above >= EDGE ? above : anchor.bottom + GAP });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [open]);

  return (
    <>
      <span
        ref={anchorRef}
        tabIndex={0}
        aria-describedby={open ? id : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="cursor-help underline decoration-muted-2/60 decoration-dotted decoration-1 underline-offset-4 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {children}
      </span>
      {open &&
        createPortal(
          <span
            ref={tipRef}
            id={id}
            role="tooltip"
            className="pointer-events-none fixed z-50 w-max max-w-[min(260px,calc(100vw-24px))] rounded-md bg-ink px-2.5 py-1.5 font-sans text-xs font-normal normal-case leading-snug tracking-normal text-paper shadow-lg"
            style={{ left: pos?.left ?? 0, top: pos?.top ?? 0, visibility: pos ? "visible" : "hidden" }}
          >
            {tip}
          </span>,
          document.body
        )}
    </>
  );
};

export type Tech = string | { label: string; tip: string };

export const TechList: React.FC<{ items: Tech[]; separator?: string }> = ({ items, separator = " · " }) => (
  <>
    {items.map((item, i) => (
      <React.Fragment key={typeof item === "string" ? item : item.label}>
        {i > 0 && separator}
        {typeof item === "string" ? item : <Term tip={item.tip}>{item.label}</Term>}
      </React.Fragment>
    ))}
  </>
);

export default Term;
