import React from "react"
import styled from "styled-components"

const Container = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>
}

export default Container

const ContentContainer = styled.div`
  margin: 0 auto;
  margin-top: 52px;
  padding: 0 1rem;
  max-width: 850px;
`
