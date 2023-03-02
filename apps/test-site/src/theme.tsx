import Color from "color";

export type ThemeColor = `${number} ${number}% ${number}%`;
export type ThemeKey = `--${string}`;

export const defaultTheme = {
  "--p": "198.44 93.204% 59.608%",
  "--s": "234.45 89.474% 73.922%",
  "--a": "328.85 85.621% 70%",
  "--n": "217.24 32.584% 17.451%",
  "--b1": "222.22 47.368% 11.176%",
} satisfies Record<ThemeKey, ThemeColor>;

export type Theme = typeof defaultTheme;

export const setTheme = (theme: typeof defaultTheme) => {
  Object.entries(theme).forEach(([property, value]) => {
    document.querySelector("body")!.style.setProperty(property, value);
  });
};

export const colorBackgroundMap = {
  "--s": "bg-secondary",
  "--p": "bg-primary",
  "--a": "bg-accent",
  "--n": "bg-neutral",
  "--b1": "bg-base-100",
} satisfies Record<keyof Theme, `bg-${string}`>;

export const colorButtonMap = {
  "--s": "btn-secondary",
  "--p": "btn-primary",
  "--a": "btn-accent",
  "--n": "btn-neutral",
  "--b1": "btn-base-100",
} satisfies Record<keyof Theme, `btn-${string}`>;

export const themeColorToHex = (color: ThemeColor) => {
  try {
    return Color(`hsl(${color})`).hex();
  } catch {
    throw new Error(`Invalid theme color: ${color}`);
  }
};

export const hexToThemeColor = (hex: string) => {
  try {
    return Color(hex)
      .hsl()
      .toString()
      .replaceAll(",", "")
      .replace("hsl(", "")
      .replace(")", "") as ThemeColor;
  } catch {
    throw new Error(`Invalid hex color: ${hex}`);
  }
};

// test themes

const darkTheme = {
  "--p": "262.35 80.315% 50.196%",
  "--pc": "0 0% 100%",
  "--s": "315.75 70.196% 50%",
  "--sc": "0 0% 100%",
  "--a": "174.69 70.335% 40.98%",
  "--ac": "0 0% 100%",
  "--n": "218.18 18.033% 11.961%",
  "--nf": "222.86 17.073% 8.0392%",
  "--nc": "220 13.376% 69.216%",
  "--b1": "220 17.647% 20%",
  "--b2": "220 17.241% 17.059%",
  "--b3": "218.57 17.949% 15.294%",
  "--bc": "220 13.376% 69.216%",
};
const coffeeTheme = {
  "--p": "29.583 66.667% 57.647%",
  "--s": "182.4 24.752% 19.804%",
  "--a": "194.19 74.4% 24.51%",
  "--n": "300 20% 5.8824%",
  "--b1": "306 18.519% 10.588%",
  "--bc": "36.667 8.3333% 42.353%",
  "--in": "171.15 36.527% 67.255%",
  "--su": "92.5 25% 62.353%",
  "--wa": "43.125 100% 68.627%",
  "--er": "9.7561 95.349% 74.706%",
};

const blackTheme = {
  "--p": "0 1.9608% 20%",
  "--s": "0 1.9608% 20%",
  "--a": "0 1.9608% 20%",
  "--b1": "0 0% 0%",
  "--b2": "0 0% 5.098%",
  "--b3": "0 1.9608% 10%",
  "--n": "0 1.2987% 15.098%",
  "--nf": "0 1.9608% 20%",
  "--in": "240 100% 50%",
  "--su": "120 100% 25.098%",
  "--wa": "60 100% 50%",
  "--er": "0 100% 50%",
};

const nightTheme = {
  "--p": "198.44 93.204% 59.608%",
  "--s": "234.45 89.474% 73.922%",
  "--a": "328.85 85.621% 70%",
  "--n": "217.24 32.584% 17.451%",
  "--nf": "217.06 30.357% 21.961%",
  "--b1": "222.22 47.368% 11.176%",
  "--in": "198.46 90.204% 48.039%",
  "--su": "172.46 66.008% 50.392%",
  "--wa": "40.61 88.172% 63.529%",
  "--er": "350.94 94.558% 71.176%",
};
