import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 860px;
  padding-left: 1rem;
  padding-right: 1rem;

  @supports (padding: max(0px)) {
    padding-left: max(1rem, env(safe-area-inset-left));
    padding-right: max(1rem, env(safe-area-inset-right));
  }
`
export default Container

export const TextContainer = styled(Container).attrs({
  className: 'margins-off',
})`
  max-width: 700px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0.75em;
    margin-bottom: 0.25em;
  }

  p {
    hyphens: auto;
  }

  p + p {
    margin-top: 0.75em;
  }
`
