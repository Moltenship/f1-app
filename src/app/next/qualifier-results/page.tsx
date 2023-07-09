import { type Metadata } from 'next';

import { QualifierService } from '@/api/services/qualifier';
import { DataTable } from '@/components/DataTable';
import { columns } from '@/components/QualifierResultsTable';
import { TableHeading } from '@/components/ui/Table';

export const metadata: Metadata = {
  description: 'Results for current weekend qualifier',
  title: 'Qualifier results — F1 App',
};

const QualifierResultsPage = async() => {
  const qualifierInfo = await QualifierService.getQualifyingResults('current', 'next');

  const description = qualifierInfo != null ?
    `${qualifierInfo.raceName}. ${qualifierInfo.Circuit.circuitName}. Season ${qualifierInfo.season}, round ${qualifierInfo.round}` :
    'There is no info for current qualifier. Perhaps, it is not started yet.';

  return (
    <main className="md:container">
      <div className="flex flex-col gap-4">
        <TableHeading
          description={description}
          title="Qualifier results"
        />
        <DataTable columns={columns} data={qualifierInfo?.QualifyingResults ?? []} />
      </div>
    </main>
  );
};

export default QualifierResultsPage;
