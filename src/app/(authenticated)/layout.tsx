import { Header, Template } from '@/components/pages';
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
    <Template>
      <Header user={data.user} />

      {children}
    </Template>
  );
}
