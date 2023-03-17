import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { KeyboardEvent } from 'react'

const StyledInput = styled.input`
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f7797d, #fbd786, #c6ffdd);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f7797d, #fbd786, #c6ffdd);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-repeat: no-repeat;
  border-radius: 20px;
  border: none;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-family: inherit;
  box-shadow: 23px 23px 46px #bebebe, -23px -23px 46px #ffffff;

  &::placeholder {
    color: white;
  }
`

export default function SearchInput() {
  const navigate = useNavigate()

  const _handleOnEnterPressed = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code !== 'Enter') {
      return
    }

    const value: string = (event.target as HTMLInputElement).value

    navigate(`?search?=${encodeURIComponent(value)}`)
  }

  return (
    <StyledInput
      onKeyUp={_handleOnEnterPressed}
      type='search'
      placeholder='Search for a pokemon'
      name='search'
      className='input'
    />
  )
}
