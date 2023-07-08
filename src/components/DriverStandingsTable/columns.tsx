'use client';

import { createColumnHelper } from '@tanstack/react-table';

import { type DriverStanding } from '@/api/types/driverStanding';

const columnHelper = createColumnHelper<DriverStanding>();

export const columns = [
  columnHelper.accessor('position', {
    header: 'Position',
  }),
  columnHelper.accessor('Driver.code', {
    header: 'Driver',
  }),
  columnHelper.accessor(row => `${row.Driver.givenName} ${row.Driver.familyName}`, {
    header: 'Name',
    id: 'fullName',
  }),
  columnHelper.accessor('Constructors.0.name', {
    header: 'Team',
  }),
  columnHelper.accessor('points', {
    header: 'Points',
  }),
  columnHelper.accessor('wins', {
    header: 'Wins',
  }),
];
