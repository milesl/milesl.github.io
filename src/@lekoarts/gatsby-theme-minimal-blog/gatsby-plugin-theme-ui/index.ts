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
    // Deep midnight blue for primary text - strong contrast on light backgrounds
    text: "#0D1321", 
    // Soft, pale sky blue for background - provides a light, airy feel
    background: "#E6F2FF", 
    // Deep space blue - primary color for key elements
    primary: "#1A4B84", 
    // Nebula-inspired blue-green for secondary elements
    secondary: "#2A6F97", 
    // Bright cosmic blue for accent, ensuring good contrast
    accent: "#4BA3C3", 
    // Soft, muted gray with a hint of blue - for subtle elements
    muted: "#7E8CAA",
  }
});

export default mileslTheme;
