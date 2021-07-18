import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/Title"
import SubTitle from "../components/SubTitle"
import Container from "../components/Container"
import AboutSectionOne from "../components/AboutSectionOne"
import AboutSectionTwo from "../components/AboutSectionTwo"
import AboutSectionThree from "../components/AboutSectionThree"
import AboutSectionFour from "../components/AboutSectionFour"
import AboutSectionFive from "../components/AboutSectionFive"
import AboutSectionSix from "../components/AboutSectionSix"
import AboutSectionSeven from "../components/AboutSectionSeven"
import AboutSectionEight from "../components/AboutSectionEight"

const About = () => (
  <Layout>
    <Seo title="About" />
    <Container>
      <Title content="Everybody has their own journey —" />
      <SubTitle content="this is mine." />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
      <AboutSectionFive />
      <AboutSectionSix />
      <AboutSectionSeven />
      <AboutSectionEight />
    </Container>
  </Layout>
)

export default About
