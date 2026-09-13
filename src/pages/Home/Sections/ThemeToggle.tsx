import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { cn } from "../../../utils/cn";
import type { Theme } from "./useTheme";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle, className }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    className={cn(
      "grid h-9 w-9 place-items-center rounded-full border border-rule-strong bg-paper text-ink transition-colors hover:border-ink hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
      className
    )}
  >
    {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
  </button>
);

export default ThemeToggle;
