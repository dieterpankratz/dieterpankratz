import { MDXProvider } from "@mdx-js/react"

const components = {
  h3: ({ children }) => <h2 style={{ color: "rebeccapurple" }}>{children}</h2>,
}
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
