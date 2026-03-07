import { getDictionary } from "../../get-dictionary";
import type { Locale } from "../../i18n-config";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Menu from "../components/Menu/Menu";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import HeroContent from "../components/HeroContent/HeroContent";
import ParallaxHero from "../components/ParallaxHero/ParallaxHero";
import OrderBar from "../components/OrderBar/OrderBar";

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
      <section className="relative flex min-h-screen flex-col items-center justify-center text-white text-center px-5 sm:px-6 overflow-hidden">
        <ParallaxHero />
        <div className="absolute inset-0 bg-black/45" />
        <HeroContent dict={dict.hero} locale={locale} />
      </section>

      <About dict={dict.about} />
      <Menu dict={dict.menu} />
      <Contact dict={dict.contact} reservationDict={dict.reservation} />
      <Footer dict={dict.footer} navDict={dict.navbar} locale={locale} />

      {/* Sticky mobile order bar */}
      <OrderBar dict={dict.orderBar} />
    </main>
  );
}
