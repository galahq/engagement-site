import React from 'react'
import styled from 'styled-components'

import BaseButton from '../button'
import BaseCard from '../../components/card'
export default ({ kicker, title, imageSrc, href }) => (
  <CaseCard href={href} as="a">
    <Image src={imageSrc} />
    <Kicker>{kicker}</Kicker>
    <Description>{title}</Description>
    <Button>Read the Full Case</Button>
  </CaseCard>
)

const CaseCard = styled(BaseCard)`
  color: #192223;
  text-decoration: none;
  display: inline-block;
  margin: 0.4em;
  text-align: center;
`

const Button = styled(BaseButton)`
  display: inline-block;
`

const Image = styled.img`
  margin-bottom: 0.25em;
  width: 100%;
`

const Kicker = styled.h3`
  font-size: 1em;
  font-weight: 600;
`

const Description = styled.p`
  font-size: 0.95em;
  line-height: 1.1;
  margin: 0.5em 0.25em 0 0.25em;
`
