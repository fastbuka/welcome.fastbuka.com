import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/component/Header";
import { Theme } from "@radix-ui/themes";
import Footer from "@/component/Footer";
import FastbukaFAQ from "./Faq";
import Hero from "@/component/Hero";
import Marketing from "./AtStake";
import EarlyMember from "./EarlyMember";
import FeatureCard from "./WhyUs";
import Newsletter from "./Newsletter";
import LearnMore from "./LearnMore";
import Together from "./Together";

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
        <FeatureCard />
        <Marketing />
        <EarlyMember />
        <Together />
        <FastbukaFAQ />
        <Newsletter />
        <LearnMore />
        <Footer />
      </main>
    </div>
  );
}
