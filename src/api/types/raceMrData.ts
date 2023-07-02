import { type MRData } from './mrData';
import { type RaceTable } from './raceTable';

export interface RaceMRData extends MRData {
  readonly RaceTable: RaceTable;
}
