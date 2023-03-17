import { createSelector } from '@reduxjs/toolkit'
import { PokemonSearchStateType } from './search.state'

const selectSelf = (state: PokemonSearchStateType) => state
const searchValueSelector = createSelector(selectSelf, (state: PokemonSearchStateType) => state.value)
const searchPokemonSelector = createSelector(selectSelf, (state: PokemonSearchStateType) => state.pokemon)

export {
  searchValueSelector,
  searchPokemonSelector
}
