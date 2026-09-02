import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/ui/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spec-Driven Development | From Vibe-Coding to AI Engineering",
  description:
    "Learn Spec-Driven Development — shape-spec, Clarification Gate, executable intent, and the lineage from SDLC to SDD.",
  openGraph: {
    title: "Spec-Driven Development",
    description: "From Vibe-Coding to AI Engineering — a living spec showcase.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="mx-auto min-h-[calc(100vh-8rem)] max-w-6xl px-4 py-10 sm:px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
