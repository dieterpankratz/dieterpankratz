import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AboutSectionSix = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["cote-3", "cote-4"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ContentWrapper>
      <ColumnTwo>
        {data.allFile.edges.map((image, key) => (
          <Images key={key} fluid={image.node.childImageSharp.fluid} />
        ))}
      </ColumnTwo>
      <ColumnOne>
        <TextContent>
          <p>
            I dropped out of my master's program and started to work fulltime in
            a small French tapas bar to make money to pay the course fees for
            the bootcamp. The name of the bar is Coté Comptoir and is located in
            the heart of Mannheim. This place is home to more than 50 different
            open wines and as a beginner I had the chance to improve my wine
            knowledge during that time (my favorite summer wine: Biodynamite by
            Pflüger). Since the bar belongs to a renowned Mannheim star chef,
            the regular guests were also well-known restaurateurs from the
            region.
          </p>
        </TextContent>
      </ColumnOne>
    </ContentWrapper>
  )
}

export default AboutSectionSix

const ContentWrapper = styled.div`
  margin-top: 1rem;
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
  padding-right: 2rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 767px) {
    padding-right: 0;
  } ;
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`
