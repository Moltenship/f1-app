import { type MRData } from './mrData';
import { type StandingsTable } from './standingsTable';

export interface StandingsMRData extends MRData {
  readonly StandingsTable: StandingsTable;
}
