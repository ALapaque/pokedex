import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PokemonProps {}

const StyledPokemon = styled.div`
  color: pink;
`;

export function Pokemon(props: PokemonProps) {
  return (
    <StyledPokemon>
      <h1>Welcome to Pokemon!</h1>
    </StyledPokemon>
  );
}

export default Pokemon;
