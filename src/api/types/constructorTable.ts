import { type Constructor } from './constructor';

export interface ConstructorTable {

  /** The array of constructors. */
  readonly Constructors: readonly Constructor[];

  /** The season of the constructors. */
  readonly season: string;
}
