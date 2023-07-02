import { type Metadata } from 'next';

import { RaceService } from '@/api/services/race';
import { UpcomingRaceRaceSchedule } from '@/components/UpcomingRaceSchedule';

export const metadata: Metadata = {
  description: 'Schedule for the next practices, sprints, qualifiers and race',
  title: 'Schedule for upcoming race',
};

const UpcomingRacePage = async() => {
  const upcomingRace = await RaceService.getUpcomingRace();

  return (
    <div className="container">
      <UpcomingRaceRaceSchedule race={upcomingRace} />
    </div>
  );
};

export default UpcomingRacePage;
