"use client";

type Theme = "light" | "dark";

const THEME_KEY = "ayush-portfolio-theme";

function getActiveTheme(): Theme {
  const current = document.documentElement.dataset.theme;
  return current === "light" ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem(THEME_KEY, theme);
}

export function ThemeToggle() {
  const handleToggle = () => {
    const nextTheme: Theme = getActiveTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleToggle}
      aria-label="Toggle light and dark mode"
    >
      <span className="theme-track" aria-hidden>
        <span className="theme-thumb" />
      </span>
      <span className="theme-label">Theme</span>
    </button>
  );
}
