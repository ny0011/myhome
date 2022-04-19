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
body{
  background-color: ${(props) => props.theme.navy.darker};
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
