'use client';

import { ThemeToggler } from '@/components/ThemeToggler';

export const Footer = () => (
  <footer className="border-t">
    <div className="container flex flex-col items-center justify-between gap-4 py-4 md:h-24 md:flex-row md:py-0">
      <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <p className="text-center text-sm leading-loose md:text-left">
          Built by
          {' '}
          <a
            className="font-medium underline underline-offset-4"
            href="https://github.com/moltenship"
          >
            Moltenship
          </a>
          . Hosted on
          {' '}
          <a
            className="font-medium underline underline-offset-4"
            href="https://vercel.com"
          >
            Vercel
          </a>
          . Source code is available on
          {' '}
          <a
            className="font-medium underline underline-offset-4"
            href="https://github.com/moltenship/f1-app"
          >
            GitHub
          </a>
          . Components by
          {' '}
          <a
            className="font-medium underline underline-offset-4"
            href="https://github.com/shadcn"
          >
            shadcn
          </a>
          .
        </p>
      </div>
      <ThemeToggler />
    </div>
  </footer>
);
