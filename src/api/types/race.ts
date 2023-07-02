import { type Circuit } from './circuit';
import { type RaceResult } from './raceResult';

/**
 * Represents a Race.
 */
export interface Race {

  /** The circuit associated with the race. */
  readonly Circuit: Circuit;

  /** The date of the race in ISO 8601 format. (e.g., "2019-12-01") */
  readonly date: string;

  /** The name of the race. (e.g., "Abu Dhabi Grand Prix") */
  readonly raceName: string;

  /** The results of the race. */
  readonly Results: readonly RaceResult[];

  /** The round number of the race. (e.g., "21") */
  readonly round: string;

  /** The season of the race. (e.g., "2019") */
  readonly season: string;

  /** The time of the race in UTC format. (e.g., "13:10:00Z") */
  readonly time: string;

  /** The URL of the race. (e.g., "https://en.wikipedia.org/wiki/2019_Abu_Dhabi_Grand_Prix") */
  readonly url: string;
}
