import { createGlobalStyle, ThemeProvider } from "styled-components";
import Loading from "../src/components/Loading";
import { storeWrapper } from "../src/redux/store"; 

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
  return (
    <>
    
    <Loading />
      <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
    </>
  );
}

export default storeWrapper.withRedux(App);