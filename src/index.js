import React from "react";
import { createRoot } from "react-dom/client";
import { IconContext } from "react-icons";
import { RecoilRoot } from "recoil";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import App from "./App";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Gowun Dodum' !important;
  font-weight: bold ;
  
}
html{
  height: 100%;
}

body{
  background: linear-gradient(${(props) => props.theme.navy.darker}, 80%,
  ${(props) => props.theme.blue.lighter});
}
`;

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
          <Reset />
          <GlobalStyle />
          <App />
        </IconContext.Provider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
