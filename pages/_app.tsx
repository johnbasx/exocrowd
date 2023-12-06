import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";

export default function App({ Component, pageProps }: AppProps) {
  //at the first render initialRenderComplete is false
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

  return (
    <>
      <NextNProgress
        height={6}
        color='#3b82f6'
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}
