import { PokemonById } from '@nx-pokemon/store'
import { PokemonList } from '@nx-pokemon/shared/ui'

export function Pokemons() {
  // @ts-ignore
  const ids = Array.apply(null, { length: 150 }).map(function (_, idx) {
    return idx + 1
  })

  return (
    <PokemonList>
      {ids.map((id: number, index: number) => (
        <PokemonById key={index} id={id} />
      ))}
    </PokemonList>
  )
}

export default Pokemons
