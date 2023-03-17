import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import PokeApiService from '../../../../shared/domain/src/lib/api/services/PokeApi.service';
import { Pokemon } from '../../../../shared/domain/src/lib';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: PokeApiService.baseUrl }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonById: builder.query<Pokemon, number>({
      query: (id: number) => `pokemon/${id.toString(10)}`,
    }),
  })
});

export const { useGetPokemonByNameQuery, useGetPokemonByIdQuery } = pokemonApi;
