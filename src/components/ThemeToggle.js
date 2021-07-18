import React, { useEffect, useRef } from "react"
import { ThemeContext } from "./ThemeContext"
import "./ThemeToggle.css"

const ThemeToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)
  const themeToggler = useRef()

  if (!colorMode) {
    return null
  }

  return (
    <div className="container--toggle" tabIndex="1" ref={themeToggler}>
      <input
        ref={themeToggler}
        type="checkbox"
        id="toggle"
        tabIndex="2"
        className="toggle--checkbox"
        checked={colorMode === "light"}
        onChange={ev => {
          setColorMode(ev.target.checked ? "light" : "dark")
        }}
      />
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </div>
  )
}

export default ThemeToggle
