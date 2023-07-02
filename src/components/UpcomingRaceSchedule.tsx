import { RaceDate } from './RaceDate';

import { type UpcomingRace } from '@/api/types/race';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

interface Props {
  readonly race: UpcomingRace;
}

export const UpcomingRaceRaceSchedule = ({ race }: Props) => (
  <Card>
    <CardHeader>
      <CardTitle>
        Schedule for
        {' '}
        {race.raceName}
      </CardTitle>
      <CardDescription>
        F1 Season
        {' '}
        {race.season}
        {' '}
        round
        {' '}
        {race.round}
      </CardDescription>
      <CardContent className="px-0 py-0 pt-4">
        <div className="flex flex-col gap-2">
          {race.FirstPractice && (
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium leading-none">First Practice</p>
              <RaceDate dateTime={race.FirstPractice} />
            </div>
          )}
          {race.SecondPractice && (
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium leading-none">Second Practice</p>
              <RaceDate dateTime={race.SecondPractice} />
            </div>
          )}
          {race.ThirdPractice && (
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium leading-none">Third Practice</p>
              <RaceDate dateTime={race.ThirdPractice} />
            </div>
          )}
          {race.Sprint && (
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium leading-none">Sprint</p>
              <RaceDate dateTime={race.Sprint} />
            </div>
          )}
          {race.date && race.time && (
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium leading-none">Race</p>
              <RaceDate dateTime={{ date: race.date, time: race.time }} />
            </div>
          )}
        </div>
      </CardContent>
    </CardHeader>
  </Card>
);
