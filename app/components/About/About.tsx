export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        {/* Image Placeholder */}
        <div className="relative aspect-[4/5] bg-zinc-200 rounded-2xl overflow-hidden">
          {/* Replace this div with a Next.js <Image /> when you have a real photo */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400">
            <svg
              className="w-16 h-16 mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
              />
            </svg>
            <p className="text-sm">Restaurant photo here</p>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-500 mb-4">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-zinc-900 mb-6">
            A Passion for Flavor
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed">
            <p>
              Founded in 2025, The Golden Fork was born from a simple belief:
              that great food starts with great ingredients. Every dish on our
              menu is crafted from locally sourced, seasonal produce — working
              directly with farmers and suppliers who share our commitment to
              quality.
            </p>
            <p>
              Our chef brings over 15 years of culinary experience from kitchens
              across Europe and Asia, blending classic techniques with bold,
              modern flavors. The result is a menu that feels both familiar and
              exciting.
            </p>
            <p>
              Whether you&apos;re joining us for a casual weeknight dinner or a
              special celebration, we want every visit to feel personal. Good
              food, warm service, and an atmosphere that makes you want to stay
              a little longer — that&apos;s what we&apos;re all about.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-zinc-200 pt-8">
            <div>
              <p className="text-3xl font-bold font-serif text-zinc-900">15+</p>
              <p className="text-sm text-zinc-500 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-serif text-zinc-900">50+</p>
              <p className="text-sm text-zinc-500 mt-1">Menu Items</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-serif text-zinc-900">12</p>
              <p className="text-sm text-zinc-500 mt-1">Local Suppliers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
