import { signout } from '@/actions';
import { Container, Nav } from '@/components/ui';
import { User } from '@supabase/supabase-js';
import Image from 'next/image';

export default async function Header({ user }: { user: User | null }) {
  if (!user) {
    return null;
  }

  return (
    <header className="flex w-full">
      <Container className="flex-col items-start justify-start gap-10 text-left">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-center text-2xl font-semibold">Invoicer</h1>

          <button onClick={signout}>
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

        <Nav />
      </Container>
    </header>
  );
}
