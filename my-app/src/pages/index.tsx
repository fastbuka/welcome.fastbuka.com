import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/component/Header";
import { Theme } from "@radix-ui/themes";
import Footer from "@/component/Footer";
import FastbukaFAQ from "./Faq";
import Hero from "@/component/Hero";

// Import Satoshi fonts
const satoshiFont = localFont({
  src: "../fonts/Satoshi-Regular.woff",
  variable: "--font-satoshi",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Fast Buka",
  description: "FastBuka – Order meals and pay with tokens",
};

export default function Home() {
  return (
    <div
      className={`${satoshiFont.variable} ${satoshiFont.variable}`}
    >
      <main className="">
        <Header />
        <Hero />
        <FastbukaFAQ />
        <Footer />
      </main>
    </div>
  );
}
