/**
 * Represents a Constructor.
 */
export interface Constructor {

  /** The unique identifier of the constructor. (e.g., "mercedes") */
  readonly constructorId: string;

  /** The name of the constructor. (e.g., "Mercedes") */
  readonly name: string;

  /** The nationality of the constructor. (e.g., "German") */
  readonly nationality: string;

  /** The URL of the constructor. (e.g., "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One") */
  readonly url: string;
}
