import { AlertCircleIcon } from 'lucide-react';
import { type Metadata } from 'next';

import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  description: 'View F1 data for different seasons, drivers, constructors and more',
  title: 'F1 App',
};

const Home = () => (
  <main className="container">
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 flex flex-col items-center">
      <span className="inline-flex w-fit gap-2 items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
        <AlertCircleIcon size={20} />
        App currently is under development
      </span>
      <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center" >
        View F1 data with
        {' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">ease</span>
      </h1>
      <div className="flex gap-4">
        <Button asChild>
          <a href="/next">Next Race</a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://github.com/moltenship/f1-app">Github</a>
        </Button>
      </div>
    </section>
  </main>
);

export default Home;
