import { type ConstructorTable } from './constructorTable';
import { type MRData } from './mrData';

export interface ConstructorMRData extends MRData {
  readonly ConstructorTable: ConstructorTable;
}
