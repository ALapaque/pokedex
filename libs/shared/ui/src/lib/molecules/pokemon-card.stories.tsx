import type { Meta } from '@storybook/react'
import { PokemonCard } from './pokemon-card'
import PikachuMock from '../../../../mocks/src/lib/pikachu.mock'
import CharmeleonMock from '../../../../mocks/src/lib/charmeleon.mock'
import MewMock from '../../../../mocks/src/lib/mew.mock'

const Story: Meta<typeof PokemonCard> = {
  component: PokemonCard,
  title: 'Molecules/PokemonCard'
}
export default Story

export const Pikachu = {
  args: {
    pokemon: PikachuMock
  }
}

export const Charmeleon = {
  args: {
    pokemon: CharmeleonMock
  }
}

export const Mew = {
  args: {
    pokemon: MewMock
  }
}
