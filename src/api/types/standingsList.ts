import { type ConstructorStanding } from './constructorStanding';
import { type DriverStanding } from './driverStanding';

export interface StandingsList {

  /** The array of constructor standings in the standings list. */
  readonly ConstructorStandings?: ConstructorStanding[];

  /** The array of driver standings in the standings list. */
  readonly DriverStandings?: DriverStanding[];

  /** The round of the standings list. */
  readonly round: string;

  /** The season of the standings list. */
  readonly season: string;
}
