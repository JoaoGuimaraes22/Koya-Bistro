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
        {/* Image Placeholder */}
        <div className="relative aspect-[3/2] md:aspect-[4/5] bg-zinc-200 rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400">
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3"
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
            <p className="text-sm">{dict.imagePlaceholder}</p>
          </div>
        </div>

        {/* Text Content */}
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
      </div>
    </section>
  );
}
