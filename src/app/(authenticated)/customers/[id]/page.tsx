import { Container } from '@/components/ui';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CustomerPage({ params }: Props) {
  const supabase = await createClient();

  const { id } = await params;

  if (!id) {
    return notFound();
  }

  const { data } = await supabase.from('Customers').select('*').eq('id', id);

  if (!data || data.length === 0) {
    return notFound();
  }

  const customer = data[0];

  return (
    <main className="flex size-full items-center justify-center">
      <Container className="flex-col py-10">
        <p>{customer.name}</p>
        <p>{customer.email}</p>
        <p>{customer.address}</p>
      </Container>
    </main>
  );
}
