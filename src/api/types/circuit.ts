import { type RaceLocation } from './raceLocation';

/** Represents a Circuit. */
export interface Circuit {

  /** The unique identifier of the circuit. (e.g., "yas_marina") */
  readonly circuitId: string;

  /** The name of the circuit. (e.g., "Yas Marina Circuit") */
  readonly circuitName: string;

  /** The location of the circuit. */
  readonly location: RaceLocation;

  /** The round number of the circuit. (e.g., "21") */
  readonly round: string;

  /** The URL of the circuit. (e.g., "http://en.wikipedia.org/wiki/Yas_Marina_Circuit") */
  readonly url: string;
}
