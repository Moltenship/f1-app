import { type Constructor } from './constructor';
import { type Driver } from './driver';
import { type Standing } from './standing';

export interface DriverStanding extends Standing {

  /** The array of constructors associated with the driver. */
  readonly Constructors: readonly Constructor[];

  /** The driver object. */
  readonly Driver: Driver;
}
