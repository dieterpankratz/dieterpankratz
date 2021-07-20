import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AboutSectionThree = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["boeck-1", "boeck-2"] }
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
      <ColumnOne>
        <TextContent>
          <p>
            In my private life I have a great passion for electronic music. It
            uses the full spectrum of frequencies and I love its repetitive
            structure. Going out and enjoying club culture is something I truly
            like. Besides university, I have worked in bars and clubs where I've
            build friendships with people who share that passion. Those
            friendships made it to daylight and we lived in the same building.
            In the backyard we had a house with music studios, a large kitchen
            and a club in the basement.
          </p>
        </TextContent>
      </ColumnOne>
      <ColumnTwo>
        {data.allFile.edges.map((image, key) => (
          <Images key={key} fluid={image.node.childImageSharp.fluid} />
        ))}
      </ColumnTwo>
    </ContentWrapper>
  )
}

export default AboutSectionThree

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
