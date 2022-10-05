import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      heading_font: string;
      bodyFont: string;
    };

    colors: {
      // Colors Default
      black: string;
      white: string;
      backGroundColor: string;
      textColor: string;

      // Primary colors
      primary_100: string;
      primary_200: string;
      primary_300: string;
      primary_400: string;
      primary_500: string;
      primary_600: string;
      primary_700: string;
      primary_800: string;
      primary_900: string;

      // Secondary colors
      secondary_100: string;
      secondary_200: string;
      secondary_300: string;
      secondary_400: string;
      secondary_500: string;
      secondary_600: string;
      secondary_700: string;
      secondary_800: string;
      secondary_900: string;

      // Grey colors
      grey_100: string;
      grey_200: string;
      grey_300: string;
      grey_400: string;
      grey_500: string;
      grey_600: string;
      grey_700: string;
      grey_800: string;
      grey_900: string;

      // Alert colors
      colorRedLight: string;
      colorRedDark: string;
      colorGreenLight: string;
      colorGreenDark: string;
    };

    // Width
    width: {
      fluid_width: string;
      max_width: string;
      fixed_width: string;
    };

    // Breakpoints
    responsive: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    // Box Shadow
    shadow: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    // Transition
    transition: {
      slow: string;
    };

    // Text size
    text: {
      small: string;
      extra_small: string;
      letter_spacing: string;
    };

    // Border
    border: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
