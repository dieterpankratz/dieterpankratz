import React, { Suspense, useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { ThemeContext } from "./ThemeContext"
const DarkModeToggle = React.lazy(() => import("react-dark-mode-toggle"))

const Header = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)
  let currentTheme, darkModeBoolean
  if (typeof window !== "undefined") {
    currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null
  }

  if (currentTheme === "dark") {
    setColorMode("dark")
  } else if (currentTheme === "light") {
    setColorMode("light")
  }

  const [isDarkMode, setDarkMode] = useState(darkModeBoolean)

  const toggleDarkMode = isDarkMode => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark")
      localStorage.setItem("theme", "dark")
      setDarkMode(true)
    } else {
      document.documentElement.setAttribute("data-theme", "light")
      localStorage.setItem("theme", "light")
      setDarkMode(false)
    }
  }

  useEffect(() => {
    const prefersLightScheme = window.matchMedia(
      "(prefers-color-scheme: light)"
    )

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme)

      if (currentTheme === "dark") {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    } else if (prefersLightScheme.matches) {
      document.documentElement.setAttribute("data-theme", "light")
      setDarkMode(false)
    } else {
      document.documentElement.setAttribute("data-theme", "dark")
      setDarkMode(true)
    }
  }, [isDarkMode, currentTheme])

  return (
    <Nav>
      <Bars />
      <NavMenu>
        <HomeLink to="/">✌ Dieter Pankratz</HomeLink>
      </NavMenu>
      <NavMenu>
        {menuData.map((menuItem, index) => (
          <NavLink to={menuItem.link} key={index}>
            {menuItem.title}
          </NavLink>
        ))}
        <ExtLink
          href="/static/CV_JULY_2021.pdf"
          key={444}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </ExtLink>
      </NavMenu>
      <NavMenu>
        {typeof isDarkMode !== "undefined" && (
          <ThemeToggler
            style={{ float: "right" }}
            className="theme-switch-wrapper"
          >
            <Suspense fallback={<div>Loading...</div>}>
              <DarkModeToggle
                onChange={isDarkMode => toggleDarkMode(isDarkMode)}
                checked={isDarkMode}
                size={80}
              />
            </Suspense>
          </ThemeToggler>
        )}
      </NavMenu>
    </Nav>
  )
}

const Nav = styled.nav`
  background: var(--color-background);
  box-sizing: border-box;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1100px) / 2);
  z-index: 100;
  position: sticky;
  margin: 0;
  top: 0;
  left: 0;
`

const HomeLink = styled(Link)`
  color: var(--color-text);
  font-weight: 500;
  display: flex;
  letter-spacing: 0.07rem;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin: 0 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-buttonbghover);
  }
`
const NavLink = styled(Link)`
  color: var(--color-text);
  background-color: var(--color-buttonbg);
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: auto;
  margin: 0 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.3s !important;

  &:hover {
    background-color: var(--color-buttonbghover);
  }
`
const ExtLink = styled.a`
  color: var(--color-text);
  background-color: var(--color-buttonbg);
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: auto;
  margin: 0 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.3s !important;

  &:hover {
    background-color: var(--color-buttonbghover);
  }
`

const ThemeToggler = styled.div`
  display: flex;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default Header
