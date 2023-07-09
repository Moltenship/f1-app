import { type Metadata } from 'next';

import { RaceService } from '@/api/services/race';
import { NoData } from '@/components/NoData';
import { UpcomingRaceRaceSchedule } from '@/components/UpcomingRaceSchedule';

export const metadata: Metadata = {
  description: 'Schedule for the next practices, sprints, qualifiers and race',
  title: 'Schedule for upcoming race',
};

const UpcomingRacePage = async() => {
  const upcomingRace = await RaceService.getUpcomingRace();

  return (
    <main className="container">
      {upcomingRace == null ?
        (
          <NoData description="We can't find info about upcoming race. Perhaps, there is no upcoming race or something wrong with the server." />
        ) :
        (
          <UpcomingRaceRaceSchedule race={upcomingRace} />
        )}
    </main>
  );
};

export default UpcomingRacePage;
