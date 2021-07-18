import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import PostItem from "../components/PostItem"
import Container from "../components/Container"

const Blog = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />
      <Container>
        {data.allMdx.nodes.map(({ frontmatter, id, fields }) => (
          <PostLink to={fields.slug}>
            <PostItem
              key={id}
              title={frontmatter.title}
              date={frontmatter.date}
              summary={frontmatter.summary}
            />
          </PostLink>
        ))}
      </Container>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query POSTS_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          summary
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
      }
    }
  }
`

const PostLink = styled(Link)`
  text-decoration: none;
`
