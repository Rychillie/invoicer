import { Container, Icon } from '@/components/ui';
import type { Customers } from '@/types/customer';
import Link from 'next/link';
import Item from './item';

export default function List({ data }: { data: Customers }) {
  return (
    <div className="flex h-fit w-full flex-col">
      <div className="group/list no-scrollbar flex h-fit w-full flex-col gap-4 py-10">
        {data.map((customer) => (
          <Item key={customer.id} customer={customer} />
        ))}
      </div>

      <div className="fixed inset-x-0 bottom-0 bg-gradient-to-b from-white/0 via-white via-45% to-white">
        <Container className="flex items-center justify-end pb-16 pt-10 sm:pb-20 md:pb-24 lg:pb-28">
          <Link
            href="/customers/new"
            className="flex w-fit items-center justify-center gap-2 rounded-full bg-black px-8 py-1.5 font-medium text-white shadow-lg"
          >
            <Icon name="plus" /> New Customer
          </Link>
        </Container>
      </div>
    </div>
  );
}
