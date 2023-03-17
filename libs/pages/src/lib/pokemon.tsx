import { PokemonByName } from '@nx-pokemon/store'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  height: calc(100lvh - 66px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Pokemon() {
  const [ param ] = useSearchParams()
  const name: string | null = param.get('name')

  if (!name) {
    return (
      <Container>
        <h1>This pokemon doesn't exist</h1>
      </Container>
    )
  }

  return (
    <Container>
      <PokemonByName name={name} />
    </Container>
  )
}
