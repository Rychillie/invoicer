import c from 'clsx';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={c('flex mx-auto max-w-[calc(640px+48px)] px-6 size-full', className)}>
      {children}
    </div>
  );
}
