import VersionGroupDetail from './versions/VersionGroupDetail';
import Species from './Species.model';

export default interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}
