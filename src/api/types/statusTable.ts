import { type Status } from './status';

export interface StatusTable {
  readonly constructorId?: string;
  readonly driverId?: string;
  readonly season?: string;
  readonly Statuses: readonly Status[];
}
