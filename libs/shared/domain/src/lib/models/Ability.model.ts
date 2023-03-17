import Species from './Species.model';

export default interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: Species;
}
