import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Header from './header'
import { TextContainer } from './container'
import { StaticQuery, graphql } from 'gatsby'
import wave from '../assets/wave.png'
import '../styles/index.css'

export default function Layout({ location, children }) {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Body full={location.pathname === '/'}>
            <Helmet
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              defaultTitle={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Briefing' },
                {
                  name: 'keywords',
                  content: 'cases, sustainability, resources, multimedia',
                },
                {
                  name: 'viewport',
                  content: 'initial-scale=1, viewport-fit=cover',
                },
              ]}
            />
            <Header full={location.pathname === '/'}></Header>
            <div>{children}</div>
            <Footer>
              <TextContainer>
                Briefing is a project of <a href="learngala.com">Gala</a>, an
                initiative at the <a href="umich.edu">University of Michigan</a>{' '}
                working to connect research, learning and practice for smarter
                sustainability.
              </TextContainer>
            </Footer>
          </Body>
        </>
      )}
    />
  )
}

/* const Layout = ({ location, children, data }) => (
  <Body full={location.pathname === '/'}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Briefing' },
        {
          name: 'keywords',
          content: 'cases, sustainability, resources, multimedia',
        },
        { name: 'viewport', content: 'initial-scale=1, viewport-fit=cover' },
      ]}
    ></Helmet>

    <Header full={location.pathname === '/'}></Header>
    {children}
    <Footer>
      <TextContainer>
        Briefing is a project of <a href="learngala.com">Gala</a>, an initiative
        at the <a href="umich.edu">University of Michigan</a> working to connect
        research, learning and practice for smarter sustainability.
      </TextContainer>
    </Footer>
  </Body>
) */

/* export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }` */

const Body = styled.div`
  background-color: #f1f1f1;
  border: none;
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
