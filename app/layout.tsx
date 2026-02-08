import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Huge Solar Solutions | Solar Infrastructure & Energy Development",
    template: "%s | Huge Solar Solutions",
  },
  icons: {
    icon: "/brand/HUGELOGO.png",
    shortcut: "/brand/HUGELOGO.png",
    apple: "/brand/HUGELOGO.png",
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
        className={`${hankenGrotesk.variable} flex min-h-screen flex-col bg-[var(--bg)] antialiased text-[var(--text)]`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
