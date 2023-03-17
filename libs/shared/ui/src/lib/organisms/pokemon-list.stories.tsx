import type { Meta } from '@storybook/react'
import { Pokemon } from '@nx-pokemon/shared/domain'
import PokemonList from './pokemon-list'
import PokemonCard from '../molecules/pokemon-card'
import pokemonsMock from '../../../../mocks/src/lib/pokemons.mock'

const Story: Meta<typeof PokemonList> = {
  component: PokemonList,
  title: 'Organisms/PokemonList'
}
export default Story

export const Default = {
  args: {
    children: pokemonsMock.map((pokemon: Pokemon) => <PokemonCard pokemon={pokemon} />)
  }
}
