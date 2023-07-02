import { type Season } from './season';

export interface SeasonTable {
  readonly constructorId?: string;
  readonly driverId?: string;
  readonly Seasons: readonly Season[];
}
