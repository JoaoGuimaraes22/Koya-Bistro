import type { Metadata, Viewport } from "next";
import { i18n } from "../../i18n-config";
import "../globals.css";

const siteUrl = "https://koya-bistro.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const meta = {
  en: {
    title: "Koya's | Café Bar Bistrô | Carcavelos",
    description:
      "Wood-fired pizzas, homemade tapas, craft beers & cocktails at Mercado de Carcavelos. Open every day 9 AM – midnight.",
  },
  pt: {
    title: "Koya's | Café Bar Bistrô | Carcavelos",
    description:
      "Pizzas no forno a lenha, petiscos caseiros, cervejas artesanais e cocktails no Mercado de Carcavelos. Aberto todos os dias das 9h à meia-noite.",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = meta[locale as keyof typeof meta] ?? meta.en;

  return {
    title: t.title,
    description: t.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        pt: "/pt",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `${siteUrl}/${locale}`,
      siteName: "Koya's Bistrô",
      locale: locale === "pt" ? "pt_PT" : "en_US",
      type: "website",
      images: [
        {
          url: "/img/hero.png",
          width: 1200,
          height: 630,
          alt: "Koya's — Café Bar Bistrô, Carcavelos",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/img/hero.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords:
      locale === "pt"
        ? [
            "restaurante carcavelos",
            "pizzas forno lenha",
            "mercado carcavelos",
            "bistrô carcavelos",
            "petiscos",
            "cocktails",
            "cervejas artesanais",
            "koyas",
          ]
        : [
            "restaurant carcavelos",
            "wood fired pizza",
            "mercado carcavelos",
            "bistro carcavelos",
            "tapas",
            "cocktails",
            "craft beer",
            "koyas",
          ],
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Koya's",
    description: locale === "pt" ? meta.pt.description : meta.en.description,
    url: `${siteUrl}/${locale}`,
    telephone: "+351962075610",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça Dr. Manuel Rebello de Andrade",
      addressLocality: "Carcavelos",
      postalCode: "2775-684",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6893279,
      longitude: -9.3320609,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "00:00",
    },
    servesCuisine: ["Portuguese", "Pizza", "Mediterranean"],
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "70",
      bestRating: "5",
    },
    image: `${siteUrl}/img/hero.png`,
    sameAs: ["https://www.instagram.com/koyas_bistro"],
  };

  return (
    <html lang={locale}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
