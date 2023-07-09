import { api } from '../api';
import { type ApiResponse } from '../types/apiResponse';
import { type QualifyingRace } from '../types/race';
import { type RaceMRData } from '../types/raceMrData';

export namespace QualifierService {
  export async function getQualifyingResults(season: string, round: string): Promise<QualifyingRace | undefined> {
    const data = await api.get(`/${season}/${round}/qualifying.json`).json<ApiResponse<RaceMRData<QualifyingRace>>>();
    return data.MRData.RaceTable.Races[0];
  }
}
