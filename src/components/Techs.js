import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Techs = () => {
  const data = useStaticQuery(graphql`
    query TechsQuery {
      allTechsJson {
        edges {
          node {
            alt
            name
            img {
              childrenImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const getTechs = data => {
    const techsArray = []
    data.allTechsJson.edges.forEach((item, index) => {
      console.log(item)
      techsArray.push(
        <TechCard key={index}>
          <Img
            src={item.node.img.childrenImageSharp[0].fluid.src}
            fluid={item.node.img.childrenImageSharp[0].fluid}
            alt={item.node.alt}
          />
          <TechTitle>{item.node.name}</TechTitle>
        </TechCard>
      )
    })
    return techsArray
  }

  return <TechsWrapper>{getTechs(data)}</TechsWrapper>
}

export default Techs

const TechsWrapper = styled.div`
  padding: 0.5rem calc((100vw - 1100px) / 2);
  max-width: 850px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 512px) {
    grid-template-columns: 1fr 1fr;
  }
`

const TechCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 300px;
  position: relative;
  /* display: flex; */
`

const TechTitle = styled.div``
