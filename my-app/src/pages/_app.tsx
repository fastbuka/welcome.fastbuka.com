import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Theme } from "@radix-ui/themes";
import Script from 'next/script';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
    <Theme>
    <Script 
  src="https://tally.so/widgets/embed.js" 
  strategy="lazyOnload"
/>
  <Component {...pageProps} />
  </Theme>
  </div>
  )
  ;
}
