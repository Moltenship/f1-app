import { type Metadata } from 'next';

import { DriverService } from '@/api/services/driver';
import { type DriverStanding } from '@/api/types/driverStanding';
import { DataTable } from '@/components/DataTable';
import { columns } from '@/components/DriverStandingsTable';
import { TableHeading } from '@/components/ui/Table';
import { type PropsWithParams } from '@/lib/types/propsWithParams';

import { type Params } from '../../params';

type Props = PropsWithParams<Params>;

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
    <>
      <TableHeading description={`Driver standings for ${standingInfo.season} season.`} title="Standings" />
      <DataTable columns={columns} data={standingInfo.DriverStandings as DriverStanding[]} />
    </>
  );
};

export default DriverStandings;
