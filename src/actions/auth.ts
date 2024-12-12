'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

const supabase = await createClient();

export async function signin() {
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.BASE_URL}/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent'
      }
    }
  });

  if (error) {
    redirect('/error');
  }

  redirect(data.url);
}

export async function signout() {
  return await supabase.auth.signOut();
}

export async function getUser() {
  const { data } = await supabase.auth.getUser();

  return await data.user;
}
