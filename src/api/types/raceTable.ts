import { type Race } from './race';

/**
 * Represents a race table.
 */
export interface RaceTable {

  /** The array of races in the race table. */
  readonly Races: readonly Race[];

  /** The round of the race table. Only returned if round parameter used. */
  readonly round?: string;

  /** The season of the race table. */
  readonly season: string;
}
