import React from "react"
import Terser from "terser"

import {
  COLOR_MODE_KEY,
  COLORS,
  INITIAL_COLOR_MODE_CSS_PROP,
  BG_COLOR,
  TXT_COLOR,
  BTN_BG,
  BTN_BG_HOVER,
  PST_ITM_BG,
  PST_ITM_SHDW,
} from "./src/constants"

import App from "./src/components/App"

function setColorsByTheme() {
  const colorModeKey = "🔑"
  const colorModeCssProp = "⚡️"
  const backGroundColor = "☀️"
  const textColor = "💬"
  const buttonBackGround = "🔤"
  const buttonBackGroundHover = "🔲"
  const postItemBackGround = "😵‍💫"
  const postItemShadow = "😇"

  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const prefersDarkFromMQ = mql.matches
  const persistedPreference = localStorage.getItem(colorModeKey)

  let colorMode = "light"

  const hasUsedToggle = typeof persistedPreference === "string"

  if (hasUsedToggle) {
    colorMode = persistedPreference
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light"
  }

  let root = document.documentElement
  const bgColor = {
    light: "hsl(0deg, 0%, 100%)", // white
    dark: "#0E1218", // navy navy blue
  }

  const txtColor = {
    light: "#333", // white
    dark: "hsl(0deg, 0%, 100%)", // near-black
  }

  const btnBg = {
    light: "#edf2f7",
    dark: "hsl(0deg, 0%, 30%)",
  }

  const btnBgHover = {
    light: "#E2E7F0",
    dark: "hsl(0deg, 0%, 50%)",
  }

  const pstItmBg = {
    light: "#fff",
    dark: "#0D1118",
  }

  const pstItmShdw = {
    light: "0 16px 40px #e5e5e5",
    dark: "0 0px 1px #e5e5e5",
  }

  root.style.setProperty(colorModeCssProp, colorMode)
  root.style.setProperty(backGroundColor, bgColor[colorMode])
  root.style.setProperty(textColor, txtColor[colorMode])
  root.style.setProperty(buttonBackGround, btnBg[colorMode])
  root.style.setProperty(buttonBackGroundHover, btnBgHover[colorMode])
  root.style.setProperty(postItemBackGround, pstItmBg[colorMode])
  root.style.setProperty(postItemShadow, pstItmShdw[colorMode])
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP)
    .replace("☀️", BG_COLOR)
    .replace("💬", TXT_COLOR)
    .replace("🔤", BTN_BG)
    .replace("🔲", BTN_BG_HOVER)
    .replace("😵‍💫", PST_ITM_BG)
    .replace("😇", PST_ITM_SHDW)

  let calledFunction = `(${boundFn})()`

  calledFunction = Terser.minify(calledFunction).code

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */

  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`
    },
    ""
  )

  const wrappedInSelector = `html { ${cssVariableString} }`

  return <style>{wrappedInSelector}</style>
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles />)
  setPreBodyComponents(<MagicScriptTag />)
}

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>
}
