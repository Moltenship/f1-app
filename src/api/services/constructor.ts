import { api } from '../api';
import { type ApiResponse } from '../types/apiResponse';
import { type StandingsMRData } from '../types/standingsMrData';

export namespace ConstructorService {
  export async function getConstructorStandings(season: string) {
    const data = await api.get(`/${season}/constructorStandings.json`).json<ApiResponse<StandingsMRData>>();
    return data.MRData.StandingsTable.StandingsLists[0];
  }
}
