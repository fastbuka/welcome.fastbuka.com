import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Theme } from "@radix-ui/themes";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
    <Theme>
  <Component {...pageProps} />
  </Theme>
  </div>
  )
  ;
}
