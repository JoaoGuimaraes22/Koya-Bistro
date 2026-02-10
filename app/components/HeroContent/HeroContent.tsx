"use client";

import { useEffect, useState } from "react";

type HeroDict = {
  established: string;
  title: string;
  subtitle: string;
  viewMenu: string;
  reserveTable: string;
};

type Props = {
  dict: HeroDict;
  locale: string;
};

export default function HeroContent({ dict, locale }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay so the animation is visible after page load
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-10">
      <p
        className={`text-xs sm:text-sm uppercase tracking-[0.3em] text-amber-400 mb-3 sm:mb-4 transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {dict.established}
      </p>
      <h1
        className={`text-4xl sm:text-5xl md:text-7xl font-bold font-serif mb-4 sm:mb-6 transition-all duration-700 ease-out delay-150 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {dict.title}
      </h1>
      <p
        className={`text-base sm:text-lg md:text-xl text-zinc-300 max-w-md sm:max-w-xl mx-auto px-2 transition-all duration-700 ease-out delay-300 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {dict.subtitle}
      </p>
      <div
        className={`mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0 transition-all duration-700 ease-out delay-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <a
          href={`/${locale}#menu`}
          className="rounded-full bg-amber-500 px-8 py-3.5 sm:py-3 text-sm font-semibold text-zinc-900 uppercase tracking-wide hover:bg-amber-400 transition-colors text-center"
        >
          {dict.viewMenu}
        </a>
        <a
          href={`/${locale}#contact`}
          className="rounded-full border border-white/30 px-8 py-3.5 sm:py-3 text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors text-center"
        >
          {dict.reserveTable}
        </a>
      </div>
    </div>
  );
}
