import { Customer, EmptySpace } from '@/components/pages';
import { Container } from '@/components/ui';
import { createClient } from '@/lib/supabase/server';
import c from 'clsx';

export default async function CustomersPage() {
  const supabase = await createClient();
  const { data } = await supabase.from('Customers').select('*');

  return (
    <>
      <main
        className={c(
          'flex items-center justify-center',
          data && data.length >= 0 ? 'w-full h-fit mb-auto' : 'size-full'
        )}
      >
        <Container className="relative">
          {data && data.length >= 0 ? (
            <Customer.List data={data} />
          ) : (
            <EmptySpace
              intro="Register and track your Customers in a simple and practical way."
              button={{
                label: 'New Customer'
              }}
              type="list"
            />
          )}
        </Container>
      </main>
    </>
  );
}
