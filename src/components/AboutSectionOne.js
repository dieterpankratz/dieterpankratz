import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AboutSectionOne = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["mannheim-bridge", "mannheim-wt"] }
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
            Growing up in a gastronomic household I naturally learned what it
            means to work at the forefront of customer contact. Yes, this
            industry has many dark sides and yet gastronomy has always
            fascinated me. You can learn so much about human facets and hear
            lot's of stories. When you really make an effort and your guests
            appreciate it - that's a great feeling. And then there are guests
            who just drive you crazy. After I graduated from high school, I
            didn't really know what to do with life. I guess most of us have to
            deal with that question at some point in life.
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

export default AboutSectionOne

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  padding: 0;
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
