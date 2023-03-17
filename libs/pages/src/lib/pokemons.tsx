import { PokemonById } from '@nx-pokemon/store'
import { PokemonList } from '@nx-pokemon/shared/ui'

export function Pokemons() {
  let ids = [];

  while(ids.length < 150){
    let randomNum = Math.floor(Math.random() * 1000) + 1;
    if(ids.indexOf(randomNum) === -1){
      ids.push(randomNum);
    }
  }

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
