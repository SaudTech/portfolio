import React from "react";
import { cn } from "../../../utils/cn";
import { SECTIONS } from "./content";
import ThemeToggle from "./ThemeToggle";
import type { Theme } from "./useTheme";

interface SpeedometerNavProps {
  active: number;
  onSelect: (index: number) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

// Dial geometry, in a 440 x 720 frame. Each tick and its label sit on one ray from the center.
const W = 440;
const H = 720;
const CX = 0;
const CY = 360;
const R_ARC = 280;
const R_OFF = 300;
const R_ON = 322;
const R_LABEL = 338;
const ANGLES = [-62, -21, 21, 62];

const pointAt = (deg: number, r: number) => {
  const a = (deg * Math.PI) / 180;
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)];
};

const SpeedometerNav: React.FC<SpeedometerNavProps> = ({ active, onSelect, theme, onToggleTheme }) => (
  <>
    {/* Desktop: fixed dial on the right edge of the 1280px frame */}
    <div
      className="fixed top-6 z-20 hidden xl:block"
      style={{ right: "max(24px, calc((100vw - 1280px) / 2 + 24px))" }}
    >
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </div>
    <nav
      aria-label="Sections"
      className="pointer-events-none fixed top-1/2 z-10 hidden -translate-y-1/2 xl:block"
      style={{
        right: "max(0px, calc((100vw - 1280px) / 2))",
        height: "min(720px, 100vh)",
        aspectRatio: `${W} / ${H}`,
      }}
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d={`M ${CX},${CY - R_ARC} A ${R_ARC},${R_ARC} 0 0 1 ${CX},${CY + R_ARC}`}
          fill="none"
          className="stroke-rule-dial"
          strokeWidth={1}
        />
        {SECTIONS.map((section, i) => {
          const on = i === active;
          const [x1, y1] = pointAt(ANGLES[i], R_ARC);
          const [x2, y2] = pointAt(ANGLES[i], R_ON);
          return (
            <line
              key={section.id}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth={on ? 2.5 : 1.5}
              // The dash length grows the tick outward when active, so the change can animate.
              strokeDasharray={`${(on ? R_ON : R_OFF) - R_ARC} ${R_ON}`}
              className={cn(
                "pointer-events-auto cursor-pointer transition-[stroke,stroke-dasharray] duration-[350ms]",
                on ? "stroke-accent" : "stroke-tick"
              )}
              onClick={() => onSelect(i)}
            />
          );
        })}
      </svg>
      {SECTIONS.map((section, i) => {
        const on = i === active;
        const [x, y] = pointAt(ANGLES[i], R_LABEL);
        return (
          <button
            key={section.id}
            type="button"
            aria-current={on ? "location" : undefined}
            onClick={() => onSelect(i)}
            className={cn(
              "group pointer-events-auto absolute flex -translate-y-1/2 items-baseline gap-2 whitespace-nowrap py-2 pr-2 text-sm leading-none tracking-[.06em] transition-colors duration-[350ms]",
              on ? "font-medium text-ink" : "text-muted hover:text-ink"
            )}
            style={{ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` }}
          >
            <span className={cn("text-[11px] tabular-nums", on ? "text-accent-ink" : "text-muted-2")}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {section.label}
          </button>
        );
      })}
    </nav>

    {/* Smaller screens: sticky top bar */}
    <nav aria-label="Sections" className="sticky top-0 z-20 border-b border-rule bg-paper/95 backdrop-blur xl:hidden">
      <div className="flex items-center gap-4 px-5 py-2.5 sm:px-10">
        <div className="flex flex-1 gap-6 overflow-x-auto">
          {SECTIONS.map((section, i) => {
            const on = i === active;
            return (
              <button
                key={section.id}
                type="button"
                aria-current={on ? "location" : undefined}
                onClick={() => onSelect(i)}
                className={cn(
                  "whitespace-nowrap border-b-2 py-1.5 text-[13px] leading-none tracking-[.06em] transition-colors",
                  on ? "border-accent font-medium text-ink" : "border-transparent text-muted"
                )}
              >
                {section.label}
              </button>
            );
          })}
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} className="flex-none" />
      </div>
    </nav>
  </>
);

export default SpeedometerNav;
