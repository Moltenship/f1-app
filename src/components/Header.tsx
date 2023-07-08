import Image from 'next/image';

export const Header = () => (
  <header className="border-b">
    <div className="container py-4 flex items-center">
      <a href="/">
        <div className="flex items-center gap-2 text-inherit">
          <Image
            alt="Logo"
            className="dark:invert"
            height={24}
            priority
            src="/logo.svg"
            width={24}
          />
          <h1 className="scroll-m-20 font-semibold tracking-tight">
            F1 App
          </h1>
        </div>
      </a>
    </div>
  </header>
);
