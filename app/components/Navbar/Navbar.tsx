"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type NavbarDict = {
  home: string;
  about: string;
  menu: string;
  contact: string;
  reserve: string;
};

type Props = {
  dict: NavbarDict;
  locale: string;
};

export default function Navbar({ dict, locale }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: dict.home, href: `/${locale}#` },
    { label: dict.about, href: `/${locale}#about` },
    { label: dict.menu, href: `/${locale}#menu` },
    { label: dict.contact, href: `/${locale}#contact` },
  ];

  // Get the path without locale for switching
  const pathWithoutLocale = pathname.replace(/^\/(en|pt)/, "") || "/";
  const otherLocale = locale === "en" ? "pt" : "en";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href={`/${locale}`}
          className="font-serif text-2xl font-bold text-white"
        >
          The Golden Fork
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-wide text-zinc-300 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`/${locale}#contact`}
              className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-zinc-900 uppercase tracking-wide hover:bg-amber-400 transition-colors"
            >
              {dict.reserve}
            </a>
          </li>
          {/* Language Switcher */}
          <li>
            <a
              href={`/${otherLocale}${pathWithoutLocale}`}
              className="text-sm uppercase tracking-wide text-zinc-400 hover:text-white transition-colors border border-zinc-600 rounded-full px-3 py-1"
            >
              {otherLocale.toUpperCase()}
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 bg-zinc-900/95 backdrop-blur-sm px-6 py-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-wide text-zinc-300 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`/${locale}#contact`}
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-zinc-900 uppercase tracking-wide hover:bg-amber-400 transition-colors"
            >
              {dict.reserve}
            </a>
          </li>
          {/* Mobile Language Switcher */}
          <li>
            <a
              href={`/${otherLocale}${pathWithoutLocale}`}
              className="text-sm uppercase tracking-wide text-zinc-400 hover:text-white transition-colors border border-zinc-600 rounded-full px-4 py-1.5"
            >
              {otherLocale === "en" ? "English" : "Português"}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
