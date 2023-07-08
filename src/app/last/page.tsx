import { type Metadata } from 'next';

import { RaceService } from '@/api/services/race';
import { DataTable } from '@/components/DataTable';
import { columns } from '@/components/RaceResultsTable';

export async function generateMetadata(): Promise<Metadata> {
  const lastRace = await RaceService.getLastRaceResults();
  return {
    description: `Results for latest race ${lastRace.raceName} season ${lastRace.season} round ${lastRace.round}`,
    openGraph: {
      description: `Results for latest race ${lastRace.raceName} season ${lastRace.season} round ${lastRace.round}`,
      siteName: 'F1 App',
      title: `Results for ${lastRace.raceName} — F1 App`,
      type: 'website',
      url: `https://f1-app-eight.vercel.app/last`,
    },
    title: `Results for ${lastRace.raceName}`,
  };
}

const LastRacePage = async() => {
  const lastRace = await RaceService.getLastRaceResults();

  return (
    <main className="md:container">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold leading-none tracking-tight text-center">
          {lastRace.raceName}
        </h1>
        <DataTable columns={columns} data={lastRace.Results} />
      </div>
    </main>
  );
};

export default LastRacePage;
