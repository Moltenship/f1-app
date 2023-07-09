'use client';

import { createColumnHelper } from '@tanstack/react-table';

import { type QualifyingResult } from '@/api/types/qualifyingResult';

const columnHelper = createColumnHelper<QualifyingResult>();

export const columns = [
  columnHelper.accessor('position', {
    header: 'Position',
  }),
  columnHelper.accessor('Driver.code', {
    header: 'Driver',
  }),
  columnHelper.accessor(row => `${row.Driver.givenName} ${row.Driver.familyName}`, {
    header: 'Name',
  }),
  columnHelper.accessor('Constructor.name', {
    header: 'Team',
  }),
  columnHelper.accessor('Q1', {
    header: 'Q1 Time',
  }),
  columnHelper.accessor('Q2', {
    header: 'Q2 Time',
  }),
  columnHelper.accessor('Q3', {
    header: 'Q3 Time',
  }),
];
