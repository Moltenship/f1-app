/**
 * Represents a Driver.
 */
export interface Driver {

  /** The code representing the driver. (e.g., "HAM") */
  readonly code: string;

  /** The date of birth of the driver in ISO 8601 format. (e.g., "1985-01-07") */
  readonly dateOfBirth: string;

  /** The unique identifier of the driver. (e.g., "hamilton") */
  readonly driverId: string;

  /** The family name of the driver. (e.g., "Hamilton") */
  readonly familyName: string;

  /** The given name of the driver. (e.g., "Lewis") */
  readonly givenName: string;

  /** The nationality of the driver. (e.g., "British") */
  readonly nationality: string;

  /** The permanent number of the driver. (e.g., "44") */
  readonly permanentNumber: string;

  /** The URL of the driver. (e.g., "http://en.wikipedia.org/wiki/Lewis_Hamilton") */
  readonly url: string;
}
