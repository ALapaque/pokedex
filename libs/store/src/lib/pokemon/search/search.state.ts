import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'
import { Pokemon } from '../../../../../shared/domain/src/lib'

export type PokemonSearchStateType = {
  value: string,
  pokemon: Pokemon | null
}

type PokemonSearchReducers = SliceCaseReducers<PokemonSearchStateType>

export const SearchState = createSlice<PokemonSearchStateType, PokemonSearchReducers>({
  name: 'pokemonSearch',
  initialState: {
    value: '',
    pokemon: null
  },
  reducers: {
    setSearch: (state: PokemonSearchStateType, action: PayloadAction<PokemonSearchStateType>) => action.payload
  }
})

export const { setSearch } = SearchState.actions
