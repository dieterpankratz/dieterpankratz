import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AboutSectionEight = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["lastday-1", "lastday-2"] }
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
      <ColumnTwo>
        {data.allFile.edges.map((image, key) => (
          <Images
            key={key}
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.name}
          />
        ))}
      </ColumnTwo>
      <ColumnOne>
        <TextContent>
          <p>
            In July 2019 I moved to Berlin and to get to know the city and meet
            new people, I threw myself (it came as no surprise) into gastronomy.
            In the café in the German Historical Museum I walked about 20km per
            shift and served grandma’s coffee and overpriced cake, was amused by
            tourists who eat Bavarian veal sausage with its skin on and I was
            very upset about other tourists who didn't tip. In October 2019 my
            coding journey began and it was probably the best decision of my
            life: I started to learn how to build digital products!
          </p>
        </TextContent>
      </ColumnOne>
    </ContentWrapper>
  )
}

export default AboutSectionEight

const ContentWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 2fr 2fr;
  padding: 0;
  margin-bottom: 4rem;
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
