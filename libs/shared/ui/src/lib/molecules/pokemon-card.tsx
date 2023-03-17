import styled from 'styled-components';
// @ts-ignore
import { Pokemon, Type, Stat } from '@nx-pokemon/shared/domain';

const StyledCard = styled.article`
  border-radius: 10px;
  padding: 20px;
  padding-top: 0;
  height: calc(550px - 20px);
  transition: all ease-in-out 500ms;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  img {
    display: block;
    width: 180px;
    min-height: 180px;
    max-height: 180px;
    position: relative;
    margin: 20px auto;
  }

  .hp {
    width: 80px;
    background-color: #ffffff;
    text-align: center;
    padding: 8px 0;
    border-radius: 30px;
    margin-left: auto;
    font-weight: 400;
  }

  .poke-name {
    text-align: center;
    font-weight: 600;
  }

  .types {
    display: flex;
    justify-content: space-around;
    margin: 20px 0 40px 0;
  }

  .hp span,
  .types span {
    font-size: 12px;
    letter-spacing: 0.4px;
    font-weight: 600;
  }

  .types span {
    padding: 5px 20px;
    border-radius: 20px;
    color: #ffffff;
  }

  .stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    flex-wrap: wrap;
    padding: 0 20px;
    gap: 20px;

    h3 {
      margin: 0;
    }

    p {
      margin: 0;
      color: #404060;
    }
  }
`;

interface Props {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: Props) {
  if (!pokemon) {
    return <></>
  }

  return (
    <StyledCard
      style={{
        background: `radial-gradient(circle at 50% 0%, var(--${pokemon.types[0].type.name}) 36%, rgb(255, 255, 255) 36%)`,
      }}
    >
      <p className="hp">
        <span>HP {pokemon.stats[0].base_stat}</span>
      </p>
      {pokemon.sprites?.other && (
        <img src={pokemon.sprites.other.dream_world.front_default} />
      )}
      <h2 className="poke-name">{pokemon.name}</h2>
      <div className="types">
        {pokemon.types.map((type: Type, index: number) => (
          <span
            key={index}
            style={{
              backgroundColor: `var(--${pokemon.types[0].type.name})`,
            }}
          >
            {type.type.name}
          </span>
        ))}
      </div>
      <div className="stats">
        {pokemon.stats.slice(1).map((stat: Stat, index: number) => (
          <div key={index}>
            <h3>{stat.base_stat}</h3>
            <p>{stat.stat.name}</p>
          </div>
        ))}
      </div>
    </StyledCard>
  );
}

export default PokemonCard;
