import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    red: {
      lighter: string;
      darker: string;
    };
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
    green: {
      darker: string;
      lighter: string;
    };
    navy: {
      darker: string;
      lighter: string;
    };
    pink: {
      darker: string;
      lighter: string;
    };
    blue: {
      darker: string;
      lighter: string;
    };
  }
}
