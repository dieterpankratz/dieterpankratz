import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AboutSectionFive = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["boeck-5", "boeck-6"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `)
  return (
    <ContentWrapper>
      <ColumnOne>
        <TextContent>
          <p>
            I was curious about what's happening under the hood and so I started
            to learn about HTML, CSS and a bit of JavaScript. I realized that
            the web as we know it today has gone through a big evolution. I felt
            overwhelmed by all these acronyms. Doing my research I discovered
            the world of Coding Bootcamp's. I liked the thought having the
            opportunity to meet like-minded people and learn coding together so
            I decided to attend Le Wagon Coding Bootcamp.
          </p>
        </TextContent>
      </ColumnOne>
      <ColumnTwo>
        {data.allFile.edges.map((image, key) => (
          <Images
            key={key}
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.name}
          />
        ))}
      </ColumnTwo>
    </ContentWrapper>
  )
}

export default AboutSectionFive

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  padding: 0;
  margin-top: 1rem;
  min-height: 280px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  } ;
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`

const TextContent = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  p {
    color: var(--color-text);
    text-align: justify;
    line-height: 1.6rem;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  } ;
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`
