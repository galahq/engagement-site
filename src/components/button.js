import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: #34a6b5;
  border: none;
  border-radius: 4px;
  color: #f1f1f1;
  cursor: pointer;
  font-family: freight-sans-pro;
  font-size: 1em;
  font-weight: 600;
  padding: 0.25em 1em;
  transition: background 0.1s ease-out;

  &:hover {
    background: #167b88;
  }
`
export default Button
