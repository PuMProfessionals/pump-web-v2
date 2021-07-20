import Router from "next/router";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme, GlobalStyle } from "../theme";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";

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
