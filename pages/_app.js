import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useStore } from "react-redux";
import Loading from "../src/components/Loading";
import { storeWrapper } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #001D5E;
    --color-secundary: #FF901E;
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
  
  return (
    <PersistGate loading={null} persistor={store.__persistor}>
      <Loading />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PersistGate>     
  );
}

export default storeWrapper.withRedux(App);
