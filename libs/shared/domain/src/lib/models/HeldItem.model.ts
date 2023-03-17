import Species from './Species.model';
import VersionDetail from './versions/VersionDetail';

export default interface HeldItem {
  item: Species;
  version_details: VersionDetail[];
}
