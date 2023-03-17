import Pokemon from '../../models/Pokemon.model';

export default interface IPokeApi {
  getPokemonByName(name: string): Promise<Pokemon>;
  getPokemonById(id: number): Promise<Pokemon>;
}
