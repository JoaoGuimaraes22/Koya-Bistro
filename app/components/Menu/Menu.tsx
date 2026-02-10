"use client";

import { useState, useRef, useEffect } from "react";

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuDict = {
  label: string;
  title: string;
  categories: Record<string, string>;
  items: Record<string, MenuItem[]>;
};

type Props = {
  dict: MenuDict;
};

export default function Menu({ dict }: Props) {
  const categoryKeys = Object.keys(dict.categories);
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0]);
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (activeTabRef.current && tabsRef.current) {
      const container = tabsRef.current;
      const tab = activeTabRef.current;
      const scrollLeft =
        tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeCategory]);

  const activeItems = dict.items[activeCategory] ?? [];

  return (
    <section id="menu" className="py-16 sm:py-24 px-5 sm:px-6 bg-zinc-50">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-amber-500 mb-3 sm:mb-4">
            {dict.label}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-zinc-900">
            {dict.title}
          </h2>
        </div>

        {/* Category Tabs — horizontal scroll on mobile */}
        <div
          ref={tabsRef}
          className="flex gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0"
        >
          {categoryKeys.map((key) => (
            <button
              key={key}
              ref={activeCategory === key ? activeTabRef : null}
              onClick={() => setActiveCategory(key)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === key
                  ? "bg-amber-500 text-zinc-900"
                  : "bg-white text-zinc-500 hover:text-zinc-900 border border-zinc-200"
              }`}
            >
              {dict.categories[key]}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {activeItems.map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between gap-3 sm:gap-6 bg-white rounded-lg sm:rounded-xl px-4 sm:px-6 py-4 sm:py-5"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-lg font-semibold text-zinc-900">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-0.5 sm:mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
              <p className="text-sm sm:text-lg font-bold font-serif text-amber-600 shrink-0 pt-0.5">
                €{item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
