import { GhostIcon } from 'lucide-react';

import { Button } from '@/components/ui/Button';

interface Props {
  readonly description: string;
}

export const NoData = ({ description }: Props) => (
  <div className="flex flex-col gap-4 items-center max-w-md mx-auto">
    <GhostIcon className="h-12 w-12" />
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">Sorry, there is nothing to show here</h1>
      <p className="text-muted-foreground">
        {description}
      </p>
      <Button asChild className="w-fit self-center">
        <a href="/">
          Take me back to main page
        </a>
      </Button>
    </div>
  </div>
);
