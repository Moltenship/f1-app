import { type DriverStanding } from './driverStanding';

export interface StandingsList {

  /** The array of driver standings in the standings list. */
  readonly DriverStandings: readonly DriverStanding[];

  /** The round of the standings list. */
  readonly round: string;

  /** The season of the standings list. */
  readonly season: string;
}
