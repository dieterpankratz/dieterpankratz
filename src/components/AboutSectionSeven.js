import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AboutSectionSeven = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["cote-8", "cote-2"] }
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
            For me it was super interesting when these people talked about slow
            food and the art of gastronomy in general. We were only two
            employees. Me in the dining room and a colleague in the kitchen.
            Essentially I was just a host and got payed for drinking expensive
            wine and make people feel comfortable - what a dream job that was. I
            worked six days a week, from 5 to 0. During the day I did the
            preparation work for the coding bootcamp: I gained a basic knowledge
            of how the web works, terminal basic commands, versioning and basic
            concepts of web development and tech workflows.
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

export default AboutSectionSeven

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
