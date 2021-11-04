import { useEffect } from "react";
import { Router } from "next/router";
import { useStore } from "react-redux";
import { storeWrapper } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

import Loading from "../src/components/Loading";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #001D5E;
    --color-secondary: #FF901E;
    --color-white: white;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function App({ Component, pageProps }) {

  const store = useStore();

  useEffect(() => {
    Router.events.on('routeChangeStart', NProgress.start());
    Router.events.on('routeChangeComplete', NProgress.done()); 
    Router.events.on('routeChangeError', NProgress.done());
  }, []);

  return (
    <PersistGate loading={null} persistor={store.__persistor}>
      <Loading />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <style global jsx>
        {`
          #nprogress {
            position: relative;
            z-index: 999999999;
          }
          #nprogress .bar {
            background: var(--color-primary);
            height: 3px;
          }
        `}
      </style>
    </PersistGate>
  );
}

export default storeWrapper.withRedux(App);
