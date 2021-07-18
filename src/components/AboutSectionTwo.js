import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AboutSectionTwo = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["electronic-1", "electronic-2"] }
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
            I was not so bad at math and have always been (to a certain extent)
            enthusiastic about consumer electronics. I thought it would be great
            to jump on the other side of the mirror to see how to build those
            products and so I enrolled in an electrical engineering program at
            Mannheim University of Applied Sciences. This study has taught me a
            lot about electrical signal processing, digital and analog. I've
            learned that those worlds have a lot in coming when it's about
            solving problems. In a nutshell you solve a problem by breaking it
            down into smaller chunks until you get to a point where you say "I
            can do that!".
          </p>
        </TextContent>
      </ColumnOne>
    </ContentWrapper>
  )
}

export default AboutSectionTwo

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
