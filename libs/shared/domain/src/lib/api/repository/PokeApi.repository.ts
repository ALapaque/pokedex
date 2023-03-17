import IPokeApi from '../utils/IPokeApi';
import Pokemon from '../../models/Pokemon.model';
import axios from 'axios';
import PokeApiService from '../services/PokeApi.service';

export default class PokeApiRepository implements IPokeApi {
  public getPokemonById(id: number): Promise<Pokemon> {
    return axios.get(`${PokeApiService.baseUrl}/pokemon/${id}`);
  }

  public getPokemonByName(name: string): Promise<Pokemon> {
    return axios.get(`${PokeApiService.baseUrl}/pokemon/${name}`);
  }
}
