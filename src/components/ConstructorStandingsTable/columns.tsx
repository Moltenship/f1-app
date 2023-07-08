'use client';

import { createColumnHelper } from '@tanstack/react-table';

import { type ConstructorStanding } from '@/api/types/constructorStanding';

const columnHelper = createColumnHelper<ConstructorStanding>();

export const columns = [
  columnHelper.accessor('position', {
    header: 'Position',
  }),
  columnHelper.accessor('Constructor.name', {
    header: 'Team',
  }),
  columnHelper.accessor('points', {
    header: 'Points',
  }),
  columnHelper.accessor('wins', {
    header: 'Wins',
  }),
];
