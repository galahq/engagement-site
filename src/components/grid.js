import React from 'react'
import styled from 'styled-components'

export const Title = styled.h1.attrs({ className: 'louder' })`
  font-weight: 100;
  margin: 1.5em 0 1em;
  text-align: center;

  @media (max-width: 43.75em) {
    font-weight: 200;
  }
`

export const Header = styled.h3`
  padding-top: 2rem;
  padding-bottom: 1.5rem;
`

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2rem 2rem;

  margin-bottom: 2em;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`
export const Content = styled.div`
  grid-column: span
    ${props => (props.third ? 2 : props.half ? 3 : props.twothirds ? 4 : 6)};

  @media (max-width: 700px) {
    margin: auto auto;
    grid-column: span 1;
  }
`
export const Break = styled.hr`
  margin-top: 1.5rem;
`
