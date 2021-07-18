import React from "react"
import styled from "styled-components"

const PostItem = ({ title, date, summary }) => {
  return (
    <PostItemWrapper>
      <PostItemHeader>
        <PostItemTitle>{title}</PostItemTitle>
        <PostItemDate>{date.split("T")[0]}</PostItemDate>
      </PostItemHeader>
      <PostItemSummary>{summary}</PostItemSummary>
    </PostItemWrapper>
  )
}

export default PostItem

const PostItemWrapper = styled.div`
  border-radius: 16px;
  padding: 1rem;
  max-width: 600px;
  margin: 2rem auto;

  &:hover {
    background-color: var(--color-postitembg);
    box-shadow: var(--color-postitemshadow);
    cursor: pointer;
  }
`

const PostItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const PostItemTitle = styled.h3`
  margin: 0;
  font-size: 24px;
`

const PostItemDate = styled.span`
  font-size: 16px;
  display: flex;
  align-items: center;
  opacity: 0.6;
`

const PostItemSummary = styled.p`
  font-size: 16px;
`
