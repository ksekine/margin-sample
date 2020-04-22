import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { myTheme, device } from "./styles";

const MyGlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;

    @media ${device.tablet} {
      font-size: 16px;
    }
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI,
      Hiragino Kaku Gothic ProN, Hiragino Sans, ヒラギノ角ゴ ProN W3, Arial,
      メイリオ, Meiryo, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <MyGlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
