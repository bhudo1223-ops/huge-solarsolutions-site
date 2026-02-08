import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Huge Solar Solutions | Solar Infrastructure & Energy Development",
    template: "%s | Huge Solar Solutions",
  },
  description:
    "Commercial and institutional solar development. Preliminary feasibility evaluations for warehouses, schools, offices, retail, and multifamily.",
  openGraph: {
    title: "Huge Solar Solutions | Solar Infrastructure & Energy Development",
    description:
      "Commercial and institutional solar development. Preliminary feasibility evaluations for warehouses, schools, offices, retail, and multifamily.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-[var(--bg)] antialiased text-[var(--text)]`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
