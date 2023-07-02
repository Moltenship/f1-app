import { DateTime } from 'luxon';
import { memo } from 'react';

import { type RaceDateTime } from '@/api/types/dateTime';

interface Props {
  readonly dateTime: RaceDateTime;
}

const RaceDateComponent = ({ dateTime }: Props) => {
  const date = DateTime.fromISO(`${dateTime.date}T${dateTime.time}`).toFormat('dd/MM/yyyy HH:mm');

  return (
    <p className="text-sm text-muted-foreground">
      {date}
    </p>
  );
};

export const RaceDate = memo(RaceDateComponent);
