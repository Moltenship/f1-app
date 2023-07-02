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

const Step = ({ children, className, step = 1 }: PropsWithChildren<StepProps>) => (
  // eslint-disable-next-line max-len
  <div className={cn(`flex flex-col gap-1 before:items-center before:justify-center before:absolute before:inline-flex before:h-6 before:w-6 before:rounded-full before:bg-muted before:-ml-7 before:-mt-1 before:content-['${step}']`, className)}>
    {children}
  </div>
);

export { Step, Stepper };
