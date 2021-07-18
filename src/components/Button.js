import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: var(--color-buttonbg);
  color: var(--color-text);
  white-space: nowrap;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${({ big }) => (big ? "0.4rem 1.6rem" : "0 1rem")};
  font-size: ${({ big }) => (big ? "16px" : "12px")};
  outline: none;
  border: none;
  height: auto;
  width: fit-content;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 1.6rem;
  cursor: pointer;
  transition: 0.3s !important;

  &:hover {
    background-color: var(--color-buttonbghover);
  }
`
