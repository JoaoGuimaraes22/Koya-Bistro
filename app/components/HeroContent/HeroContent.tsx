"use client";

import { useEffect, useState } from "react";

const UBER_EATS_URL =
  "https://www.ubereats.com/pt/store/koyas/WLAED_YDWRimdyCVf7RjiQ";

type HeroDict = {
  established: string;
  title: string;
  subtitle: string;
  viewMenu: string;
  reserveTable: string;
  orderPickup: string;
  orderDelivery: string;
};

type Props = {
  dict: HeroDict;
  locale: string;
};

export default function HeroContent({ dict, locale }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
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

      {/* Primary CTAs */}
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

      {/* Uber Eats Order Buttons */}
      <div
        className={`mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0 transition-all duration-700 ease-out delay-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <a
          href={`${UBER_EATS_URL}?mod=pickup`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          {dict.orderPickup}
        </a>
        <a
          href={UBER_EATS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h17.25M3.375 14.25V7.5a1.125 1.125 0 0 1 1.125-1.125h4.5"
            />
          </svg>
          {dict.orderDelivery}
        </a>
      </div>
    </div>
  );
}
