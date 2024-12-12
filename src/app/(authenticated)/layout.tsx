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
    <div className="flex size-full flex-col items-center justify-center py-16 sm:py-20 md:py-24 lg:py-28">
      <Header user={data.user} />

      {children}
    </div>
  );
}
