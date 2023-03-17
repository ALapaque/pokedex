import { useGetPokemonByIdQuery } from '@nx-pokemon/shared/hooks';
import { PokemonCard } from '@nx-pokemon/shared/ui'

export interface Props {
  id: number;
}

export function PokemonById({ id }: Props) {
  const { data: pokemon, isFetching } = useGetPokemonByIdQuery(id);

  if (isFetching || !pokemon) {
    return <div>...Loading</div>;
  }

  return <PokemonCard pokemon={pokemon} />;
}

export default PokemonById;
