import { DefaultTheme } from "styled-components";

const deviceSizes = {
  mobile: "415px",
  tablet: "767px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
};

export const theme: DefaultTheme = {
  red: {
    lighter: "#FF6B6B",
    darker: "#E83A14",
  },
  black: {
    veryDark: "#141414",
    darker: "#181818",
    lighter: "#2F2F2F",
  },
  white: {
    lighter: "#fff",
    darker: "#e5e5e5",
  },
  green: {
    lighter: "#6BCB77",
    darker: "#3CA169",
  },
  navy: {
    lighter: "#2b4570",
    darker: "#16213E",
  },
  pink: {
    lighter: "#F9C7CF",
    darker: "#E0BAD7",
  },
  blue: {
    lighter: "#4D96FF",
    darker: "#2155CD",
  },
  device,
};
