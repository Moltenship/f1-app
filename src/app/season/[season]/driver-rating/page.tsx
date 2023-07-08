import { type Metadata } from 'next';

import { DriverService } from '@/api/services/driver';
import { type DriverStanding } from '@/api/types/driverStanding';
import { DataTable } from '@/components/DataTable';
import { columns } from '@/components/DriverStandingsTable';

interface Params {
  readonly season: string;
}

interface Props {
  readonly params: Params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const standingInfo = await DriverService.getDriversStandings(params.season);

  return {
    description: `Driver standings for ${standingInfo.season} season.`,
    openGraph: {
      description: `Driver standings for ${standingInfo.season} season.`,
      siteName: 'F1 App',
      title: `Driver standings. ${standingInfo.season} season — F1 App`,
      type: 'website',
      url: `https://f1-app-eight.vercel.app/last`,
    },
    title: `Driver standings. ${standingInfo.season} season — F1 App`,
  };
}

const DriverStandings = async({ params }: Props) => {
  const { season } = params;
  const standingInfo = await DriverService.getDriversStandings(season);

  return (
    <main className="md:container">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold leading-none tracking-tight text-center">
          Season
          {' '}
          {standingInfo.season}
        </h1>
        <DataTable columns={columns} data={standingInfo.DriverStandings as DriverStanding[]} />
      </div>
    </main>
  );
};

export default DriverStandings;
