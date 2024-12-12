'use client';

import c from 'clsx';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const routes = pathname.split('/').filter(Boolean);

  return (
    <div
      className={c(
        'flex size-full flex-col items-center justify-center',
        routes && routes.length > 1
          ? 'pb-28 pt-32 md:pt-40 lg:pt-48 lg:pb-32'
          : 'pb-28 pt-40 md:pt-48 lg:pb-32 lg:pt-56'
      )}
    >
      {children}
    </div>
  );
}
