import { Container, Nav } from '@/components/ui';
import Image from 'next/image';
import type { ReactNode } from 'react';

export default function LayoutAuthenticated({ children }: { children: ReactNode }) {
  return (
    <div className="flex size-full flex-col items-center justify-center py-16 sm:py-20 md:py-24 lg:py-28">
      <header className="flex w-full">
        <Container className="flex-col items-start justify-start gap-10 text-left">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-center text-2xl font-semibold">Invoicer</h1>

            <Image
              src="/rychillie.png"
              width={32}
              height={32}
              alt="Rychillie"
              className="size-8 rounded-full"
            />
          </div>

          <Nav />
        </Container>
      </header>

      {children}
    </div>
  );
}
