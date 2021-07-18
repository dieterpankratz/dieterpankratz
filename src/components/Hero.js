import React, { useContext } from "react"
import styled from "styled-components"
import { Button } from "./Button"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroH1>I’m a Software Enthusiast —</HeroH1>
      <Slogan>who loves to experiment with design.</Slogan>
      <HeroP>
        I believe good UI is intuitive, fast and human-centric. I want to
        understand how to build frontend solutions that make web experiences
        enjoyable for everybody. Empathy and curiosity help me to understand
        this complicated world. I get a lot of motivation working with other
        people and I'm most excited when these people come from different walks
        of life and bring their own experiences to influence the direction of
        the product we're creating. We learn by being honest, and I'm working my
        way from not knowing what's up to clarity.
      </HeroP>
      <Button big="big" to="/about">
        Learn about me &#8827;
      </Button>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 850px;
`

const HeroH1 = styled.h1`
  color: var(--color-text);
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  line-height: 28px;
  margin-bottom: 0;
`

const Slogan = styled.span`
  color: var(--color-text);
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.2rem;
  line-height: 48px;
  margin-bottom: 24px;
`

const HeroP = styled.p`
  color: var(--color-text);
  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 32px;
`
