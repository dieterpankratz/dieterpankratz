import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
  }
  a {
    color: var(--color-secondary);
  }
  p {
    line-height: 1.6em;
  }
  code {
    background-color: #808080;
    color: #FFF;
    border-radius: 6px;
    padding: .1em .2em;
    display: inline-block;
  }
`

export default GlobalStyles
