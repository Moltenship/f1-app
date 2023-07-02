import { type Constructor } from './constructor';
import { type Driver } from './driver';

export interface DriverStanding {

  /** The array of constructors associated with the driver. */
  readonly Constructors: readonly Constructor[];

  /** The driver object. */
  readonly Driver: Driver;

  /** The points earned by the driver. */
  readonly points: string;

  /** The position of the driver in the standings. */
  readonly position: string;

  /** The position text of the driver in the standings. */
  readonly positionText: string;

  /** The number of wins by the driver. */
  readonly wins: string;
}
