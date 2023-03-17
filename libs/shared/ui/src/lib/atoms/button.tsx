import styled from 'styled-components'
import { ReactNode } from 'react'

/* eslint-disable-next-line */
export interface ButtonProps {
  children: ReactNode
}

const StyledButton = styled.button`
  position: relative;
  font-family: inherit;
  border-radius: 40em;
  min-width: 3em;
  height: 3em;
  z-index: 1;
  color: white;
  overflow: hidden;
  border: none;
  cursor: pointer;

  .text {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 3em;
    border-radius: 40em;
    border: none;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.473)), to(rgba(150, 150, 150, 0.25)));
    background: linear-gradient(rgba(255, 255, 255, 0.473), rgba(150, 150, 150, 0.25));
    z-index: 1;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .blob {
    position: absolute;
    z-index: -1;
    border-radius: 5em;
    width: 5em;
    height: 3em;
    -webkit-transition: background .3s ease-in-out, -webkit-transform .3s ease-in-out;
    transition: background .3s ease-in-out, -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out, background .3s ease-in-out;
    transition: transform .3s ease-in-out, background .3s ease-in-out, -webkit-transform .3s ease-in-out;

    &:nth-child(2) {
      left: 0em;
      top: 0;
      background: #ff930f;
    }

    &:nth-child(3) {
      left: 1.8em;
      top: 0;
      z-index: -1;
      background: #bf0fff;
    }

    &:nth-child(4) {
      left: 4em;
      top: -1em;
      background: #ff1b6b;
    }

    &:nth-child(5) {
      left: 4.3em;
      top: 1.6em;
      background: #0061ff;
    }
  }

  &:hover {
    .blob {
      &:nth-child(2) {
        background: #0061ff;
      }

      &:nth-child(3) {
        background: #ff1b6b;
      }

      &:nth-child(4) {
        background: #bf0fff;
      }

      &:nth-child(5) {
        background: #ff930f;
      }

      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.3);
    }
  }

  &:active {
    border: 2px solid white;
  }
`

export function Button({ children }: ButtonProps) {
  return (
    <StyledButton>
      <span className='text'>{children}</span>
      <span className='blob'></span>
      <span className='blob'></span>
      <span className='blob'></span>
      <span className='blob'></span>
    </StyledButton>
  )
}

export default Button
