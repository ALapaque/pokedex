import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { KeyboardEvent } from 'react'

const StyledInput = styled.input`
  background: -webkit-linear-gradient(to right, #f7797d, #fbd786, #c6ffdd);
  background: linear-gradient(to right, #f7797d, #fbd786, #c6ffdd);
  background-repeat: no-repeat;
  border-radius: 20px;
  border: none;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  min-height: 3em;
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

    navigate({
      pathname: '/search',
      search: `?value=${value}`
    })
  }

  return (
    <StyledInput
      onKeyUp={_handleOnEnterPressed}
      type='search'
      inputMode='search'
      placeholder='Search for a pokemon'
      name='search'
      className='input'
    />
  )
}
