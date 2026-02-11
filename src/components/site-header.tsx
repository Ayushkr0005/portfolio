"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  name: string;
  resumePath: string;
  navigation: NavItem[];
};

export function SiteHeader({ name, resumePath, navigation }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const onScroll = () => {
      const offset = window.scrollY + 140;
      let next = "#home";

      for (const section of sections) {
        if (offset >= section.offsetTop) {
          next = `#${section.id}`;
        }
      }

      setActiveHash(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navigation]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="top-header">
      <a href="#home" className="logo" onClick={closeMenu}>
        {name}
      </a>

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`top-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeHash === item.href ? "active" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Link href={resumePath} target="_blank" className="resume-link" onClick={closeMenu}>
          Resume
        </Link>

        <ThemeToggle />
      </nav>
    </header>
  );
}
