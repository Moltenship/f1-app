import { type Metadata } from 'next';

import { RaceService } from '@/api/services/race';
import { DataTable } from '@/components/DataTable';
import { columns } from '@/components/RaceResultsTable';
import { TableHeading } from '@/components/ui/Table';

export async function generateMetadata(): Promise<Metadata> {
  const lastRace = await RaceService.getLastRaceResults();
  return {
    description: `${lastRace.raceName} results. Season ${lastRace.season}, round ${lastRace.round}`,
    openGraph: {
      description: `${lastRace.raceName} results. Season ${lastRace.season}, round ${lastRace.round}`,
      siteName: 'F1 App',
      title: `${lastRace.raceName} results — F1 App`,
      type: 'website',
      url: `https://f1-app-eight.vercel.app/last`,
    },
    title: `${lastRace.raceName} results — F1 App`,
  };
}

const LastRacePage = async() => {
  const lastRace = await RaceService.getLastRaceResults();

  return (
    <main className="md:container">
      <div className="flex flex-col gap-4">
        <TableHeading
          description={`Season ${lastRace.season}, round ${lastRace.round}. ${lastRace.Circuit.circuitName}`}
          title={lastRace.raceName}
        />
        <DataTable columns={columns} data={lastRace.Results} />
      </div>
    </main>
  );
};

export default LastRacePage;
