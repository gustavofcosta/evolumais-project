import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  // Fonts
  fonts: {
    heading_font: "Roboto Condensed",
    bodyFont: "Cabin",
  },

  colors: {
    // Colors Default
    black: "#222",
    white: "#FFFF",
    backGroundColor: "#f1f5f9",
    textColor: "#1e293b",

    // Primary colors
    primary_100: "#ccd4d8",
    primary_200: "#99aab0",
    primary_300: "#667f89",
    primary_400: "#335561",
    primary_500: "#002a3a",
    primary_600: "#00222e",
    primary_700: "#001923",
    primary_800: "#001117",
    primary_900: "#00080c",

    // Secondary colors
    secondary_100: "#fdd6d9",
    secondary_200: "#fbadb2",
    secondary_300: "#f9858c",
    secondary_400: "#f75c65",
    secondary_500: "#f5333f",
    secondary_600: "#c42932",
    secondary_700: "#931f26",
    secondary_800: "#621419",
    secondary_900: "#310a0d",

    // Grey colors
    grey_100: "#f1f5f9",
    grey_200: "#e2e8f0",
    grey_300: "#cbd5e1",
    grey_400: "#94a3b8",
    grey_500: "#64748b",
    grey_600: "#475569",
    grey_700: "#334155",
    grey_800: "#1e293b",
    grey_900: "#1e293b",

    // Alert colors
    colorRedLight: "#f8d7da",
    colorRedDark: "#842029",
    colorGreenLight: "#d1e7dd",
    colorGreenDark: "#0f5132",
  },

  // Width
  width: {
    fluid_width: "500px",
    max_width: "1200px",
    fixed_width: "500px",
  },

  // Breakpoints
  responsive: {
    sm: "@media (min-width: 640px)",
    md: "@media (min-width: 768px)",
    lg: "@media (min-width: 1024px)",
    xl: "@media (min-width: 1280px)",
  },

  // Box Shadow
  shadow: {
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1) 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },

  // Transition
  transition: {
    slow: "0.3s ease-in-out all",
  },

  // Text size
  text: {
    small: "0.875rem",
    extra_small: "0.7em",
    letter_spacing: "1px",
  },

  // Border
  border: {
    sm: "0.50rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
};
