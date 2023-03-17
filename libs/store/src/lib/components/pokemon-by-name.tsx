import { useGetPokemonByIdQuery, useGetPokemonByNameQuery } from '@nx-pokemon/shared/hooks'
import { PokemonCard } from '@nx-pokemon/shared/ui'

export interface Props {
  name: string;
}

export default function PokemonByName({ name }: Props) {
  const { data: pokemon, isFetching } = useGetPokemonByNameQuery(name.toLowerCase());

  if (isFetching || !pokemon) {
    return <div>...Loading</div>;
  }

  return <PokemonCard pokemon={pokemon} />;
}
