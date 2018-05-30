import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

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
    <Footer />
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
  padding: 2rem 0;
`
