import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/Container"

export default ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <Container>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query Slug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      body
    }
  }
`
