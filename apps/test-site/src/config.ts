import { defaultTheme, themeColorToHex } from "./theme";
import type { Theme } from "./theme";

export type Config = {
  "--p": string;
  "--s": string;
  "--a": string;
  "--n": string;
  "--b1": string;
  headerBackground: keyof Theme;
  headerGetStarted: keyof Theme;
  headerLinks: [string, string][];
};

const getThemeWithHexColors = (theme: Theme) => {
  const hexEntries = Object.entries(theme).map(([key, value]) => [
    key,
    themeColorToHex(value),
  ]);
  return Object.fromEntries(hexEntries);
};

export const defaultConfig: Config = {
  ...getThemeWithHexColors(defaultTheme),
  headerBackground: "--b1",
  headerGetStarted: "--s",
  headerLinks: [
    ["Home", "/"],
    ["About", "/about"],
    ["Contact", "/contact"],
    ["Blog", "/blog"],
  ],
};
