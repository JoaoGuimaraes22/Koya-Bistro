import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-white text-center px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">
          Est. 2025
        </p>
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">
          The Golden Fork
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-xl">
          A modern dining experience with locally sourced ingredients and bold
          flavors.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#menu"
            className="rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-zinc-900 uppercase tracking-wide hover:bg-amber-400 transition-colors"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors"
          >
            Reserve a Table
          </a>
        </div>
      </section>
      {/* About Section */}
      <About />
      {/* Menu Section */}
      <Menu />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </main>
  );
}
