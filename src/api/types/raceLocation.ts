/**
 * Represents the location of a circuit.
 */
export interface RaceLocation {

  /** The country of the circuit's location. (e.g., "UAE") */
  readonly country: string;

  /** The latitude coordinate of the circuit's location. (e.g., "24.4672") */
  readonly lat: string;

  /** The locality (city or area) of the circuit's location. (e.g., "Abu Dhabi") */
  readonly locality: string;

  /** The longitude coordinate of the circuit's location. (e.g., "54.6031") */
  readonly long: string;
}
