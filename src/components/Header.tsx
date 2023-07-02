import { FlagIcon } from 'lucide-react';

export const Header = () => (
  <header className="border-b">
    <div className="container py-4 flex items-center">
      <div className="flex items-center gap-2">
        <FlagIcon />
        <h1 className="scroll-m-20 font-semibold tracking-tight">F1 App</h1>
      </div>
    </div>
  </header>
);
