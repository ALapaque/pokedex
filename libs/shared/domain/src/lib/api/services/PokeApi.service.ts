import Pokemon from '../../models/Pokemon.model';
import IPokeApi from '../utils/IPokeApi';
import PokeApiRepository from '../repository/PokeApi.repository';

export default class PokeApiService implements IPokeApi {
  public static readonly baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private readonly _pokeApiRepository: PokeApiRepository) {}

  public getPokemonByName(name: string): Promise<Pokemon> {
    return this._pokeApiRepository.getPokemonByName(name);
  }

  public getPokemonById(id: number): Promise<Pokemon> {
    return this._pokeApiRepository.getPokemonById(id);
  }
}
