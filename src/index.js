import React from "react";
import { createRoot } from "react-dom/client";
import { IconContext } from "react-icons";
import { QueryClient, QueryClientProvider } from "react-query";
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
html, body, #root{
  height: 100%;
  overflow: hidden;
}

#root{
  display: flex;
  flex-direction: column;
}

body{
  background: linear-gradient(${(props) => props.theme.navy.darker}, 80%,
  ${(props) => props.theme.blue.lighter});
}
`;
const queryClient = new QueryClient();
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
            <Reset />
            <GlobalStyle />
            <App />
          </IconContext.Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
