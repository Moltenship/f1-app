import { Children, cloneElement, type PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface StepperProps {
  readonly className?: string;
}

const Stepper = ({ children, className }: PropsWithChildren<StepperProps>) => {
  const steps = Children.toArray(children);
  const stepList = steps.map((step, index) => (cloneElement(step as JSX.Element, { step: index + 1 })));

  return (
    <div className={cn('flex flex-col gap-6 border-l pl-4 relative', className)}>
      {stepList}
    </div>
  );
};

interface StepProps {
  readonly className?: string;
  readonly step?: number;
}

// TODO: Use js solution over `global.css` solution
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Step = ({ children, className, step = 1 }: PropsWithChildren<StepProps>) => (
  // eslint-disable-next-line max-len
  <div className={cn(`flex flex-col gap-1 step`, className)}>
    {children}
  </div>
);

export { Step, Stepper };
