import { createListenerMiddleware } from '@reduxjs/toolkit'
import { setSearch } from './search.state'

const pokemonSearchMiddleware = createListenerMiddleware()

pokemonSearchMiddleware.startListening({
  actionCreator: setSearch,
  effect: async (action, listenerApi) => {
    console.log('action :: ', action)
    console.log('listenerApi :: ', listenerApi)
  }
})
