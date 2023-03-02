import { defaultConfig } from "./config";
import type { Config } from "./config";
import type { Schema } from "@morphum/messenger";

const colorOptions = [
  { name: "Primary", value: "--p" },
  { name: "Secondary", value: "--s" },
  { name: "Accent", value: "--a" },
  { name: "Neutral", value: "--n" },
  { name: "Base", value: "--b1" },
];

export const schema: Schema<keyof Config> = [
  {
    id: "--p",
    group: "colors",
    name: "Primary",
    type: "color",
    value: defaultConfig["--p"],
  },
  {
    id: "--s",
    group: "colors",
    name: "Secondary",
    type: "color",
    value: defaultConfig["--s"],
  },
  {
    id: "--a",
    group: "colors",
    name: "Accent",
    type: "color",
    value: defaultConfig["--a"],
  },
  {
    id: "--n",
    group: "colors",
    name: "Neutral",
    type: "color",
    value: defaultConfig["--n"],
  },
  {
    id: "--b1",
    group: "header",
    name: "Base",
    type: "color",
    value: defaultConfig["--b1"],
  },
  {
    id: "headerBackground",
    group: "header",
    name: "Background",
    type: "select",
    options: colorOptions,
    value: defaultConfig.headerBackground,
  },
  {
    id: "headerGetStarted",
    group: "header",
    name: "Get Started Button",
    type: "select",
    options: colorOptions,
    value: defaultConfig.headerGetStarted,
  },
  {
    id: "headerLinks",
    group: "header",
    name: "Links",
    type: "pairs",
    value: defaultConfig.headerLinks,
  },
];
