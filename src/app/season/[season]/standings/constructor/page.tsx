import { type Metadata } from 'next';

import { ConstructorService } from '@/api/services/constructor';
import { type ConstructorStanding } from '@/api/types/constructorStanding';
import { columns } from '@/components/ConstructorStandingsTable';
import { DataTable } from '@/components/DataTable';
import { TableHeading } from '@/components/ui/Table';
import { type PropsWithParams } from '@/lib/types/propsWithParams';

// eslint-disable-next-line import/order
import { type Params } from '../../params';

type Props = PropsWithParams<Params>;

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
    <>
      <TableHeading description={`Constructor standings for ${standingInfo.season} season.`} title="Standings" />
      <DataTable columns={columns} data={standingInfo.ConstructorStandings as ConstructorStanding[]} />
    </>
  );
};

export default ConstructorStandings;
