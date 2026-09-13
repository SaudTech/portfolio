import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

// index.html sets the first theme before paint (saved choice, else system setting).
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (private mode); the theme still applies for this visit.
    }
  };

  return { theme, toggleTheme };
};
