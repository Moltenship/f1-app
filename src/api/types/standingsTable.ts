import { type StandingsList } from './standingsList';

/**
 * Represents a standings table.
 */
export interface StandingsTable {

  /** The season of the standings table. */
  readonly season: string;

  /** The array of standings lists in the standings table. */
  readonly StandingsLists: StandingsList[];
}
