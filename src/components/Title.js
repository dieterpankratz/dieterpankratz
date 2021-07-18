import React, { useContext } from "react"
import styled from "styled-components"

const Title = ({ content }) => {
  return <MainTitle>{content}</MainTitle>
}

export default Title

const MainTitle = styled.h1`
  color: var(--color-text);
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  line-height: 28px;
  margin-top: 68px;
  margin-bottom: 0;
`
