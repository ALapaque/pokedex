import { PokemonById } from '@nx-pokemon/store'
import { PokemonList } from '@nx-pokemon/shared/ui'
import { useGetRandomArrayOfNumber } from '@nx-pokemon/shared/hooks'

export function Pokemons() {
  const { array: ids } = useGetRandomArrayOfNumber({ amount: 100, maxRange: 1000 })

  if (!ids) {
    return <></>
  }

  return (
    <PokemonList>
      {ids.map((id: number, index: number) => (
        <PokemonById key={index} id={id} />
      ))}
    </PokemonList>
  )
}

export default Pokemons
