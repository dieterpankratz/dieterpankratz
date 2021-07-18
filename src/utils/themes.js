const setTheme = themeName => {
  localStorage.setItem("theme", themeName)
  document.documentElement.className = themeName
}

const keepTheme = () => {
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark")
      return "theme-dark"
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTheme("theme-light")
      return "theme-light"
    }
  } else {
    setTheme("theme-dark")
    return "theme-dark"
  }
}

export { setTheme, keepTheme }
