"use client";

import { useState } from "react";

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuCategory = {
  category: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    category: "Starters",
    items: [
      {
        name: "Truffle Burrata",
        description:
          "Creamy burrata with black truffle, heirloom tomatoes, and aged balsamic.",
        price: "16",
      },
      {
        name: "Crispy Calamari",
        description: "Lightly fried with lemon aioli and pickled peppers.",
        price: "14",
      },
      {
        name: "Roasted Beet Salad",
        description:
          "Golden and red beets, goat cheese, candied walnuts, citrus vinaigrette.",
        price: "13",
      },
      {
        name: "French Onion Soup",
        description: "Slow-cooked onions, rich beef broth, gruyère crouton.",
        price: "12",
      },
    ],
  },
  {
    category: "Mains",
    items: [
      {
        name: "Pan-Seared Salmon",
        description:
          "Atlantic salmon, crushed potatoes, asparagus, dill beurre blanc.",
        price: "32",
      },
      {
        name: "Braised Short Rib",
        description:
          "12-hour braised beef, creamy polenta, roasted root vegetables.",
        price: "36",
      },
      {
        name: "Wild Mushroom Risotto",
        description:
          "Arborio rice, porcini and chanterelle mushrooms, parmesan, truffle oil.",
        price: "26",
      },
      {
        name: "Grilled Lamb Chops",
        description:
          "Herb-crusted New Zealand lamb, mint chimichurri, roasted garlic mash.",
        price: "38",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Crème Brûlée",
        description:
          "Classic vanilla bean custard with a caramelized sugar crust.",
        price: "12",
      },
      {
        name: "Chocolate Fondant",
        description:
          "Warm dark chocolate cake with a molten center, vanilla gelato.",
        price: "14",
      },
      {
        name: "Lemon Tart",
        description: "Tangy lemon curd, shortbread crust, torched meringue.",
        price: "11",
      },
    ],
  },
  {
    category: "Drinks",
    items: [
      {
        name: "House Red Wine",
        description: "A rotating selection of bold, full-bodied reds.",
        price: "14",
      },
      {
        name: "Espresso Martini",
        description: "Vodka, fresh espresso, coffee liqueur, vanilla syrup.",
        price: "16",
      },
      {
        name: "Sparkling Water",
        description: "San Pellegrino, 750ml.",
        price: "6",
      },
      {
        name: "Seasonal Cocktail",
        description: "Ask your server about this month's signature creation.",
        price: "18",
      },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Starters");

  const activeItems =
    menuData.find((cat) => cat.category === activeCategory)?.items ?? [];

  return (
    <section id="menu" className="py-24 px-6 bg-zinc-50">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-500 mb-4">
            What We Serve
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-zinc-900">
            Our Menu
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {menuData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide transition-colors ${
                activeCategory === cat.category
                  ? "bg-amber-500 text-zinc-900"
                  : "bg-white text-zinc-500 hover:text-zinc-900 border border-zinc-200"
              }`}
            >
              {cat.category}
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
                ${item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
