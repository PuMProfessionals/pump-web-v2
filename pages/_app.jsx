import Router from "next/router";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme, GlobalStyle } from "../theme";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import "../theme/css/Carousel.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fec63d" />
        <meta name="msapplication-TileColor" content="#0d1d3f" />
        <meta name="theme-color" content="#0d1d3f" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pumprofessionals.org" />
        <meta property="og:title" content="PuMP" />
        <meta
          property="og:description"
          content="A registered charity dedicated to connecting aspiring students to health sciences opportunities."
        />
        <meta property="og:image" content="https://pumprofessionals.org/meta.png" />
      </Head>
      <ThemeProvider theme={baseTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
