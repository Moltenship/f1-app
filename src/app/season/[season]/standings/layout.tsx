import { type PropsWithChildren } from 'react';

interface Params {
  readonly season: string;
}

interface Props {
  readonly params: Params;
}

const StandingsLayout = ({ children }: PropsWithChildren<Props>) => (
  <main className="md:container">
    <div className="flex flex-col gap-4">
      {children}
    </div>
  </main>
);

export default StandingsLayout;
