import React from 'react'
import styled from 'styled-components'

import BaseCard from '../card'

export default ({ title, description, href }) => (
  <BaseCard href={href}>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </BaseCard>
)

const Title = styled.h3`
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
