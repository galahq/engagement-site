import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { TextContainer } from '../components/container'

import wave from '../assets/wave.png'
import './index.css'

const Layout = ({ children, data }) => (
  <Body>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'initial-scale=1, viewport-fit=cover' },
      ]}
    />
    {children()}
    <Footer>
      <TextContainer>
        The Citizen Sustainability Certificate is a partnership between{' '}
        <a href="http://www.teachmsc.org">Michigan Sustainability Cases</a>, a
        project of the{' '}
        <a href="http://seas.umich.edu">
          School of Environment and Sustainability
        </a>{' '}
        at the <a href="https://umich.edu">University of Michigan</a>, and the{' '}
        <a href="https://www.a2gov.org/Pages/default.aspx">City of Ann Arbor</a>.
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
  background-image: url(${wave});
  background-repeat: repeat-x;
  background-size: 14px;
  border: 0.1px solid transparent;
  min-height: 100vh;
`

const Footer = styled.footer`
  background-color: #e1f3f5;
  border-top: 1px solid #bfe0e4;
  font-size: 0.9em;
  margin-top: 4rem;
  padding: 3rem 0 4rem;
`
