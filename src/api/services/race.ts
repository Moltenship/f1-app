import { api } from '..';
import { type ApiResponse } from '../types/apiResponse';
import { type RaceMRData } from '../types/raceMrData';

export namespace RaceService {
  export async function getRacesForCurrentSeason() {
    const data = await api.get('/current.json').json<ApiResponse<RaceMRData>>();
    return data;
  }
}
