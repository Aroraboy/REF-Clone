import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "REF — Connecting Global Real Estate Professionals",
  description:
    "The Real Estate Forum (REF) is a chapter-based platform uniting cities, counties, developers, investors, builders, and service providers through curated in-person events and a smart AI-powered app.",
  metadataBase: new URL("https://reforum.net"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[color:var(--brand-ink)]">
        {children}
      </body>
    </html>
  );
}
