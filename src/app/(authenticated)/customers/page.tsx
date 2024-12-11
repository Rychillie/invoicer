import { EmptySpace } from '@/components/pages';
import { Container } from '@/components/ui';

export default function CustomersPage() {
  return (
    <>
      <main className="flex size-full items-center justify-center">
        <Container>
          <EmptySpace
            intro="Register and track your Customers in a simple and practical way."
            button={{
              label: 'New Customer'
            }}
            type="list"
          />
        </Container>
      </main>
    </>
  );
}
