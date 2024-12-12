'use client';

import { auth } from '@/actions';
import { Container, Icon, Nav } from '@/components/ui';
import { User } from '@supabase/supabase-js';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ user }: { user: User }) {
  const pathname = usePathname();

  const routes = pathname.split('/').filter(Boolean);

  return (
    <header className="fixed inset-x-0 top-0 z-[999] flex w-full bg-gradient-to-b from-white via-white via-75% to-white/0 pb-10 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
      <Container className="flex-col items-start justify-start gap-10 text-left">
        <div className="flex w-full items-center justify-between">
          {routes && routes.length > 1 ? (
            <>
              <Link
                href={`/${routes[0]}`}
                className="flex size-8 items-center justify-center rounded-full border border-gray-200 bg-white transition-all hover:border-gray-300 hover:bg-gray-50 active:border-gray-400 active:bg-gray-100"
              >
                <Icon name="chevron-down" className="rotate-90" />
              </Link>

              <h1 className="text-center text-2xl font-semibold capitalize">
                {routes[1] === 'new'
                  ? routes[0] === 'customers'
                    ? 'New Customer'
                    : 'New Invoice'
                  : user.user_metadata.name}
              </h1>
            </>
          ) : (
            <h1 className="text-center text-2xl font-semibold">Invoicer</h1>
          )}

          <button onClick={auth.signout}>
            <Image
              alt={user.user_metadata.name}
              src={
                user.user_metadata.picture ||
                `https://avatars.dicebear.com/api/micah/${user.user_metadata.email}.svg`
              }
              width={32}
              height={32}
              className="size-8 rounded-full"
            />
          </button>
        </div>

        {routes && routes.length < 2 && <Nav />}
      </Container>
    </header>
  );
}
