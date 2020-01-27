import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Header from '../components/header'

import { TextContainer } from '../components/container'

import wave from '../assets/wave.png'
import './index.css'

const Layout = ({ children, data }) => (
  <Body full={location.pathname === '/'}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'initial-scale=1, viewport-fit=cover' },
      ]}
    ></Helmet>

    <Header full={location.pathname === '/'}></Header>
    {children()}
    <Footer>
      <TextContainer>
        Briefing is a project of{" "}
        <a href="learnmsc.com">Gala</a>, an initiative at the <a href="umich.edu">University of Michigan</a> working to connect research, learning and practice for smarter sustainability.
        
      </TextContainer>
    </Footer>
  </Body>
)
export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Body = styled.div`
  background-color: #f1f1f1;
  border: 0.1px solid transparent;
  min-height: 100vh;

  ${props =>
    props.full ||
    'background-image: url(' +
      wave +
      '); background-repeat: repeat-x; background-size: 14px;'};
`

const Footer = styled.footer`
  background-color: #e1f3f5;
  border-top: 1px solid #bfe0e4;
  font-size: 0.9em;
  margin-top: 4rem;
  padding: 3rem 0 4rem;
`
