import { api } from '../api';
import { type ApiResponse } from '../types/apiResponse';
import { type Race, type UpcomingRace } from '../types/race';
import { type RaceMRData } from '../types/raceMrData';

export namespace RaceService {

  export async function getRacesForYear(year: number) {
    const data = await api.get(`${year}.json`).json<ApiResponse<RaceMRData<Race>>>();
    return data;
  }

  export async function getRacesForCurrentSeason() {
    const data = await api.get('/current.json').json<ApiResponse<RaceMRData<Race>>>();
    return data;
  }

  export async function getUpcomingRace(): Promise<undefined | UpcomingRace> {
    const data = await api.get('/current/next.json').json<ApiResponse<RaceMRData<UpcomingRace>>>();
    return data.MRData.RaceTable.Races[0];
  }

  export async function getLastRaceResults() {
    const data = await api.get('/current/last/results.json').json<ApiResponse<RaceMRData<Race>>>();
    return data.MRData.RaceTable.Races[0];
  }
}
