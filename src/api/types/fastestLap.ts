import { type AverageSpeed } from './averageSpeed';
import { type Time } from './time';

/**
 * Represents the fastest lap information.
 */
export interface FastestLap {

  /** The average speed during the fastest lap. */
  readonly AverageSpeed: AverageSpeed;

  /** The lap number of the fastest lap. (e.g., "53") */
  readonly lap: string;

  /** The rank of the fastest lap. (e.g., "1") */
  readonly rank: string;

  /** The time taken for the fastest lap. */
  readonly Time: Time;
}
