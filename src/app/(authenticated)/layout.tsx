import { Header } from '@/components/pages';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';

export default async function LayoutAuthenticated({ children }: { children: ReactNode }) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/');
  }

  return (
    <div className="flex size-full flex-col items-center justify-center pb-28 pt-40 md:pt-48 lg:pb-32 lg:pt-56">
      <Header user={data.user} />

      {children}
    </div>
  );
}
