import { type Metadata } from 'next';

import { ConstructorService } from '@/api/services/constructor';
import { type ConstructorStanding } from '@/api/types/constructorStanding';
import { columns } from '@/components/ConstructorStandingsTable';
import { DataTable } from '@/components/DataTable';

interface Params {
  readonly season: string;
}

interface Props {
  readonly params: Params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const standingInfo = await ConstructorService.getConstructorsStandings(params.season);

  return {
    description: `Constructor standings for ${standingInfo.season} season.`,
    openGraph: {
      description: `Constructor standings for ${standingInfo.season} season.`,
      siteName: 'F1 App',
      title: `Constructor standings. ${standingInfo.season} season — F1 App`,
      type: 'website',
      url: `https://f1-app-eight.vercel.app/last`,
    },
    title: `Constructor standings. ${standingInfo.season} season — F1 App`,
  };
}

const ConstructorStandings = async({ params }: Props) => {
  const { season } = params;
  const standingInfo = await ConstructorService.getConstructorsStandings(season);

  return (
    <main className="md:container">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold leading-none tracking-tight text-center">
          Season
          {' '}
          {standingInfo.season}
        </h1>
        <DataTable columns={columns} data={standingInfo.ConstructorStandings as ConstructorStanding[]} />
      </div>
    </main>
  );
};

export default ConstructorStandings;
