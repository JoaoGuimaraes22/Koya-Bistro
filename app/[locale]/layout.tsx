import type { Metadata } from "next";
import { i18n } from "../../i18n-config";
import "../globals.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "The Golden Fork | Fine Dining",
  description: "A modern dining experience with locally sourced ingredients.",
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
