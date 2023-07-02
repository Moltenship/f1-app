import { type MRData } from './mrData';

export interface ApiResponse<T extends MRData> {
  readonly MRData: T;
}
