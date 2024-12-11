import { EmptySpace } from '@/components/pages';
import { Container } from '@/components/ui';

export default function InvoicesPage() {
  return (
    <>
      <main className="flex size-full items-center justify-center">
        <Container>
          <EmptySpace
            intro="Catalog and organize your Invoices in a simple and practical way.."
            button={{
              label: 'New Invoice'
            }}
          />
        </Container>
      </main>
    </>
  );
}
