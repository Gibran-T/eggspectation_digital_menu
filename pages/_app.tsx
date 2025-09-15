// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { LanguageProvider } from "../context/LanguageContext"; // use o MESMO nome/caso do arquivo

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
