import { type Constructor } from './constructor';
import { type Driver } from './driver';
import { type FastestLap } from './fastestLap';

/**
 * Represents a Result.
 */
export interface RaceResult {

  /** The constructor associated with the result. */
  readonly Constructor: Constructor;

  /** The driver associated with the result. */
  readonly Driver: Driver;

  /** The fastest lap done by driver. */
  readonly FastestLap?: FastestLap;

  /** The starting grid position of the result. (e.g., "1") */
  readonly grid: string;

  /** The number of laps completed in the result. (e.g., "55") */
  readonly laps: string;

  /** The number associated with the result. (e.g., "44") */
  readonly number: string;

  /** The points earned in the result. (e.g., "26") */
  readonly points: string;

  /** The position of the result. (e.g., "1") */
  readonly position: string;

  /** The text representation of the position. (e.g., "1") */
  readonly positionText: string;

  /** The status of the result. (e.g., "Finished") */
  readonly status: string;
}
