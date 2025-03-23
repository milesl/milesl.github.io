import { merge, ThemeUIStyleObject } from "theme-ui"
import theme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index"

declare module "theme-ui" {
  interface Theme {
    copyButton?: ThemeUIStyleObject
    dividers?: ThemeUIStyleObject
  }
}

const mileslTheme = merge(theme, {
  colors: {
    text: "#2D2D2D",
    background: "#F5F5DC",
    primary: "#2E7D32",
    secondary: "#4CAF50",
    accent: "#0288D1",
    muted: "#BCAAA4",  // Soft brown for subtle elements
  }
});

export default mileslTheme;