import { ThemeProvider } from "styled-components";
import { baseTheme, GlobalStyle } from "../theme";

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
