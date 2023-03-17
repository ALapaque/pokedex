import Type from './Type.model';
import Species from './Species.model';

export default interface PastType {
  generation: Species;
  types: Type[];
}
