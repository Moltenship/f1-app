import { type Driver } from './driver';

/**
 * Represents a driver table.
 */
export interface DriverTable {

  /** The array of drivers in the driver table. */
  readonly Drivers: readonly Driver[];
}
