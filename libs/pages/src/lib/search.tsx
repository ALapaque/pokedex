import { PokemonByName } from '@nx-pokemon/store'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  height: calc(100lvh - 66px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Search() {
  const [ param ] = useSearchParams()
  const value: string | null = param.get('value')

  if (!value) {
    return (
      <Container>
        <h1>Enter a value to find a pokemon</h1>
      </Container>
    )
  }

  return (
    <Container>
      <PokemonByName name={value} />
    </Container>
  )
}
