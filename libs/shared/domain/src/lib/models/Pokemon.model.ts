import Ability from './Ability.model';
import Species from './Species.model';
import GameIndex from './GameIndex.model';
import HeldItem from './HeldItem.model';
import Move from './Move.model';
import Sprites from './Sprites.model';
import Stat from './Stat.model';
import Type from './Type.model';
import PastType from './PastType.model';

export default interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Species[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
}
