import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import Head from "next/head";
import { ConfigContextProvider } from "@/store/context";

const DM_Sans_Font = DM_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={DM_Sans_Font.className}>
      <Head>
        <title>MovieBox</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover, explore, and save your favorite movies with MovieBox." />
        <meta name="keywords" content="MovieBox, movies" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <meta property="og:image" content="https://jemeni11-moviebox.vercel.app/android-chrome-512x512.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Discover, explore, and save your favorite movies with MovieBox." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:domain" content="vercel.app" />
        <meta name="twitter:image" content="https://jemeni11-moviebox.vercel.app/android-chrome-512x512.png" />
        <meta name="twitter:description" content="Discover, explore, and save your favorite movies with MovieBox." />
        <meta name="twitter:creator" content="@Jemeni11" />
      </Head>
      <ConfigContextProvider>
        <Component {...pageProps} />
      </ConfigContextProvider>
    </div>
  );
}
