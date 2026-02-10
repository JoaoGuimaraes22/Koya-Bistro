"use client";

import { useState } from "react";

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

  const activeItems = dict.items[activeCategory] ?? [];

  return (
    <section id="menu" className="py-24 px-6 bg-zinc-50">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-500 mb-4">
            {dict.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-zinc-900">
            {dict.title}
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide transition-colors ${
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
              className="flex items-start justify-between gap-6 bg-white rounded-xl px-6 py-5"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {item.name}
                </h3>
                <p className="text-sm text-zinc-500 mt-1">{item.description}</p>
              </div>
              <p className="text-lg font-bold font-serif text-amber-600 shrink-0">
                €{item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
