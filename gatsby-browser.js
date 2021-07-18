import React from "react"
import App from "./src/components/App"
import { MDXProvider } from "@mdx-js/react"

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider>
      <App>{element}</App>
    </MDXProvider>
  )
}
