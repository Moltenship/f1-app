import { type Constructor } from './constructor';
import { type Driver } from './driver';

export interface QualifyingResult {
  readonly Constructor: Constructor;
  readonly Driver: Driver;
  readonly number: string;
  readonly position: string;
  readonly Q1?: string;
  readonly Q2?: string;
  readonly Q3?: string;
}
