import GlobalStyle from "styles/GlobalStyle";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import thumbnail from "public/img/thumbnail.png";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
// import * as gtag from "libs/gtag";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle>
        <Head>
          <title>Daoom</title>
        </Head>
        <Component {...pageProps} />
      </GlobalStyle>
    </RecoilRoot>
  );
}
