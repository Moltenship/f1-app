import { RaceDate } from './RaceDate';

import { type UpcomingRace } from '@/api/types/race';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Step, Stepper } from '@/components/ui/Stepper';

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
        .
        {' '}
        {race.Circuit.circuitName}
      </CardDescription>
      <CardContent className="px-0 py-0 pt-4">
        <Stepper className="flex flex-col gap-6 border-l pl-4 relative">
          {race.FirstPractice && (
            <Step>
              <p className="text-sm font-medium leading-none">First Practice</p>
              <RaceDate dateTime={race.FirstPractice} />
            </Step>
          )}
          {race.SecondPractice && (
            <Step>
              <p className="text-sm font-medium leading-none">Second Practice</p>
              <RaceDate dateTime={race.SecondPractice} />
            </Step>
          )}
          {race.ThirdPractice && (
            <Step>
              <p className="text-sm font-medium leading-none">Third Practice</p>
              <RaceDate dateTime={race.ThirdPractice} />
            </Step>
          )}
          {race.Sprint && (
            <Step>
              <p className="text-sm font-medium leading-none">Sprint</p>
              <RaceDate dateTime={race.Sprint} />
            </Step>
          )}
          {race.Qualifying && (
            <Step>
              <p className="text-sm font-medium leading-none">Qualifier</p>
              <RaceDate dateTime={race.Qualifying} />
            </Step>
          )}
          {race.date && race.time && (
            <Step>
              <p className="text-sm font-medium leading-none">Race</p>
              <RaceDate dateTime={{ date: race.date, time: race.time }} />
            </Step>
          )}
        </Stepper>
      </CardContent>
    </CardHeader>
  </Card>
);
