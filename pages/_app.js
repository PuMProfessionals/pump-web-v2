import Router from "next/router";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme, GlobalStyle } from "../theme";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
<<<<<<< HEAD
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
=======
import "react-toastify/dist/ReactToastify.css";
>>>>>>> 266e01cb15aafadf8f7840778d13782e64978ad2

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>PuMP</title>
        {/* TODO: add meta tags */}
      </Head>
      <ThemeProvider theme={baseTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
