import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Golden Fork | Fine Dining",
  description: "A modern dining experience with locally sourced ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
