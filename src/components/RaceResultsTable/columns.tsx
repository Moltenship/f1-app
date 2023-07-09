'use client';

import { type ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { TimerIcon } from 'lucide-react';

import { type FastestLap } from '@/api/types/fastestLap';
import { type RaceResult } from '@/api/types/raceResult';
import { cn } from '@/lib/utils';

const columnHelper = createColumnHelper<RaceResult>();

export const columns = [
  columnHelper.accessor('position', {
    header: 'Position',
  }),
  columnHelper.accessor('grid', {
    cell(ctx) {
      const position = Number(ctx.row.getValue<string>('position'));
      const gridPosition = Number(ctx.getValue<string>());
      const positionShift = gridPosition - position;
      const prefix = positionShift <= 0 ? '' : '+';
      const result = `${gridPosition} ${positionShift === 0 ? '' : `(${prefix}${positionShift})`}`;

      return (
        <span className={cn({ 'text-red-500': positionShift < 0 }, { 'text-green-500': positionShift > 0 })}>
          {result}
        </span>
      );
    },
    header: 'Grid',
  }),
  columnHelper.accessor('Driver.code', {
    header: 'Driver',
  }),
  columnHelper.accessor(row => `${row.Driver.givenName} ${row.Driver.familyName}`, {
    header: 'Name',
    id: 'fullName',
  }),
  columnHelper.accessor('Constructor.name', {
    header: 'Team',
  }),
  columnHelper.accessor('FastestLap', {
    cell(ctx) {
      const fastestLap = ctx.getValue<FastestLap>();
      const { time } = fastestLap.Time;
      const { rank } = fastestLap;
      const isBestTime = rank === '1';
      return (
        <span className={cn('flex gap-2 items-center', { 'text-purple-500': isBestTime })}>
          {time}
          {isBestTime && <TimerIcon size={16} />}
        </span>
      );
    },
    header: 'Fastest Lap',
    id: 'fastestLap',
  }) as ColumnDef<RaceResult, string>,
  columnHelper.accessor('status', {
    header: 'Status',
  }),
  columnHelper.accessor('points', {
    header: 'Points',
  }),
];
