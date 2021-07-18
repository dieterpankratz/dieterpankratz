import React, { useContext } from "react"
import styled from "styled-components"

const SubTitle = ({ content }) => {
  return <MainSubTitle>{content}</MainSubTitle>
}

export default SubTitle

const MainSubTitle = styled.h3`
  color: var(--color-text);
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.2rem;
  line-height: 48px;
  margin-top: 0;
  margin-bottom: 24px;
`
