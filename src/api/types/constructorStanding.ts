import { type Constructor } from './constructor';
import { type Standing } from './standing';

export interface ConstructorStanding extends Standing {
  readonly Constructor: Constructor;
}
