import { getDictionary } from "../../get-dictionary";
import type { Locale } from "../../i18n-config";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Menu from "../components/Menu/Menu";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      <Navbar dict={dict.navbar} locale={locale} />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-white text-center px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">
          {dict.hero.established}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">
          {dict.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-xl">
          {dict.hero.subtitle}
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#menu"
            className="rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-zinc-900 uppercase tracking-wide hover:bg-amber-400 transition-colors"
          >
            {dict.hero.viewMenu}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors"
          >
            {dict.hero.reserveTable}
          </a>
        </div>
      </section>

      <About dict={dict.about} />
      <Menu dict={dict.menu} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} navDict={dict.navbar} locale={locale} />
    </main>
  );
}
