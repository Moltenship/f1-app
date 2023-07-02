'use client';

import { DateTime } from 'luxon';
import { memo } from 'react';

import { type RaceDateTime } from '@/api/types/dateTime';

interface Props {
  readonly dateTime: RaceDateTime;
}

const RaceDateComponent = ({ dateTime }: Props) => {
  const date = DateTime.fromISO(`${dateTime.date}T${dateTime.time}`);
  const formattedDate = date.toFormat('dd/MM/yyyy HH:mm');
  const relativeDate = date.toRelative();

  return (
    <p className="text-sm text-muted-foreground">
      {formattedDate}
      {' '}
      (
      {relativeDate}
      )
    </p>
  );
};

export const RaceDate = memo(RaceDateComponent);
