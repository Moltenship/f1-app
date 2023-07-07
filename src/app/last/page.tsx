import { RaceService } from '@/api/services/race';
import { columns, RaceResultsTable } from '@/components/RaceResultsTable';

const LastRacePage = async() => {
  const lastRace = await RaceService.getLastRaceResults();

  return (
    <main className="md:container">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold leading-none tracking-tight text-center">
          {lastRace.raceName}
        </h1>
        <RaceResultsTable columns={columns} data={lastRace.Results} />
      </div>
    </main>
  );
};

export default LastRacePage;
