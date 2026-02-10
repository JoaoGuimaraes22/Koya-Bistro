import Image from "next/image";
import FadeIn from "../FadeIn/FadeIn";

type AboutDict = {
  label: string;
  title: string;
  imagePlaceholder: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
};

type Props = {
  dict: AboutDict;
};

export default function About({ dict }: Props) {
  return (
    <section id="about" className="py-16 sm:py-24 px-5 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Image */}
        <FadeIn direction="left">
          <div className="relative aspect-[3/2] md:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src="/img/about.png"
              alt="Koya's Café Bar Bistrô sign"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </FadeIn>

        {/* Text Content */}
        <FadeIn direction="right" delay={150}>
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-amber-500 mb-3 sm:mb-4">
              {dict.label}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-zinc-900 mb-4 sm:mb-6">
              {dict.title}
            </h2>
            <div className="space-y-3 sm:space-y-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
              <p>{dict.paragraph1}</p>
              <p>{dict.paragraph2}</p>
              <p>{dict.paragraph3}</p>
            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 border-t border-zinc-200 pt-6 sm:pt-8">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-serif text-zinc-900">
                  {dict.stat1Value}
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                  {dict.stat1Label}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-serif text-zinc-900">
                  {dict.stat2Value}
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                  {dict.stat2Label}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-serif text-zinc-900">
                  {dict.stat3Value}
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                  {dict.stat3Label}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
