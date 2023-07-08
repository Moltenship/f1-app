import { api } from '../api';
import { type ApiResponse } from '../types/apiResponse';
import { type StandingsMRData } from '../types/standingsMrData';

export namespace DriverService {
  export async function getDriversStandings(season: string) {
    const data = await api.get(`/${season}/driverStandings.json`).json<ApiResponse<StandingsMRData>>();
    return data.MRData.StandingsTable.StandingsLists[0];
  }
}
