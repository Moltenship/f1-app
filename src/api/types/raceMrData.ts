import { type MRData } from './mrData';
import { type BaseRace } from './race';
import { type RaceTable } from './raceTable';

export interface RaceMRData<T extends BaseRace> extends MRData {
  readonly RaceTable: RaceTable<T>;
}
