import styled from 'styled-components'
import { ReactNode } from 'react'

const Container = styled.div`
  padding: 20px !important;
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)) !important;
  gap: 1rem !important;
  align-items: center !important;
  justify-items: center !important;
`

interface Props {
  children: ReactNode
}

export default function PokemonList({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}
