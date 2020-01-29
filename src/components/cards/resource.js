import React from 'react'
import styled from 'styled-components'

import BaseCard from '../card'

export default ({ title, description, href }) => (
  <Card href={href}>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
)

const Card = BaseCard.withComponent('a').extend`
  color: #192223;
  text-decoration: none;
  display: inline-block;
  padding: 1em;
  hyphens: manual;
  width: 80%;
  &:hover {
    box-shadow: none;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
`

const Title = styled.a`
  text-decoration: underline;
  font-size: 1em;
  font-weight: 600;
`

const Description = styled.p`
  font-size: 0.95em;
  font-style: italic;
  line-height: 1.1;
  margin-top: 0.5em;
`
