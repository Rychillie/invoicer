import { EmptySpace } from '@/components/pages';
import { Container } from '@/components/ui';
import { createClient } from '@/lib/supabase/server';

export default async function CustomersPage() {
  const supabase = await createClient();

  const { data } = await supabase.from('Customers').select('*');

  console.log(data);

  return (
    <>
      <main className="flex size-full items-center justify-center">
        <Container>
          {data && data.length >= 0 ? (
            <div className="flex size-full flex-col gap-4 py-10">
              {data.map((customer) => (
                <div key={customer.id} className="flex items-center gap-2 md:gap-4">
                  <div className="aspect-square size-10 rounded-full bg-gray-50" />
                  <p className="line-clamp-1 h-7 w-full rounded-md sm:max-w-[150px] md:rounded">
                    {customer.name}
                  </p>
                  <p className="line-clamp-1 hidden h-7 w-full max-w-[260px] rounded md:flex">
                    {customer.email}
                  </p>
                  <p className="line-clamp-1 hidden h-7 w-full max-w-[142px] rounded md:flex">
                    {customer.address}
                  </p>
                </div>
              ))}
            </div>
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
