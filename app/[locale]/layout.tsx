import type { Metadata } from "next";
import { i18n } from "../../i18n-config";
import "../globals.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Koya's | Café Bar Bistrô | Carcavelos",
  description:
    "Comida caseira, pizzas no forno a lenha, cervejas artesanais e cocktails. Mercado de Carcavelos.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
