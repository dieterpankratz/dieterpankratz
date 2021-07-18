export const COLORS = {
  text: {
    light: "#333", // white
    dark: "hsl(0deg, 0%, 100%)", // near-black
  },
  background: {
    light: "#F8F8F8", // white
    dark: "#0E1218", // navy navy blue
  },
  // Grays, scaling from least-noticeable to most-noticeable
  buttonbg: {
    light: "#edf2f7",
    dark: "hsl(0deg, 0%, 30%)",
  },
  buttonbghover: {
    light: "#E2E7F0",
    dark: "hsl(0deg, 0%, 50%)",
  },
  postitembg: {
    light: "#fff",
    dark: "#0D1118",
  },
  postitemshadow: {
    light: "0 16px 40px #e5e5e5",
    dark: "0 0px 1px #e5e5e5",
  },
}

export const COLOR_MODE_KEY = "color-mode"
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode"
export const BG_COLOR = "--color-background"
export const TXT_COLOR = "--color-text"
export const BTN_BG = "--color-buttonbg"
export const BTN_BG_HOVER = "--color-buttonbghover"
export const PST_ITM_BG = "--color-postitembg"
export const PST_ITM_SHDW = "--color-postitemshadow"
