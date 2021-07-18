import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AboutSectionFour = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["boeck-3", "boeck-4"] }
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
            For us it was the place where we could be creative. I've never been
            surrounded by so many wonderful people from different backgrounds
            and I've also become more understanding, open-minded and more
            tolerant towards other opinions. We were looking for a way to start
            our artist booking agency, promote our record releases and events.
            So I started to play around with WordPress and build our website. I
            had lot's of fun doing that but also felt the boundaries of that
            technology.
          </p>
        </TextContent>
      </ColumnOne>
    </ContentWrapper>
  )
}

export default AboutSectionFour

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
