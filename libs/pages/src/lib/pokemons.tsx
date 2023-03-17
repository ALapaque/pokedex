import { PokemonById } from '@nx-pokemon/shared/ui';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px !important;
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)) !important;
  gap: 1rem !important;
  align-items: center !important;
  justify-items: center !important;
`;

export function Pokemons() {
  // @ts-ignore
  const ids = Array.apply(null, { length: 150 }).map(function (_, idx) {
    return idx + 1;
  });

  return (
    <Container>
      {ids.map((id: number, index: number) => (
        <PokemonById key={index} id={id} />
      ))}
    </Container>
  );
}

export default Pokemons;
