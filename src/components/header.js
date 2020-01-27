import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Link from 'gatsby-link'

type Props = { full: boolean }
const Header = ({ full }: Props) => (
  <Container full={full}>
    {full ? (
      <InnerContainer>
        <MainTitle>Briefing</MainTitle>
        <Subtitle>
          <RaisedSpan>from </RaisedSpan>
          <a href="http://learngala.com">
            <Logo width={74} height={38} />
          </a>
        </Subtitle>
      </InnerContainer>
    ) : (
      <InnerContainer>
        <SmallTitle>
          {' '}
          <a href="http://learngala.com">
            <Logo width={66} height={34} />
          </a>{' '}
          <RaisedSpan>
            {' '}
            / <TitleLink to="./">Briefing</TitleLink>
          </RaisedSpan>
        </SmallTitle>
      </InnerContainer>
    )}
  </Container>
)
export default Header
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #02284b;
  color: white;
  margin-bottom: 2em;
`

const MainTitle = styled.h1.attrs({ className: 'louder' })`
  font-weight: 100;
  margin: 1.5em 0 0.5em;
  text-align: center;

  @media (max-width: 43.75em) {
    font-weight: 200;
  }
`
const SmallTitle = styled.h1`
  font-weight: 250;
  margin: 0.4em 0 0.3em 0.5em;
  text-align: left;
  font-size: 1.5em;
`

const Subtitle = styled.h2`
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 2em;
`
const TitleLink = styled(Link)`
  font-weight: 300;
  color: white;
  text-decoration: none;

  ${TitleLink}:hover {
    text-decoration: underline;
  }
`

const InnerContainer = styled.div`
  align-items: center;
`

const RaisedSpan = styled.span`
  position: relative;
  top: -10px;
  right: 3px;
`
