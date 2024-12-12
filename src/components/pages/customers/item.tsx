import { Icon } from '@/components/ui';
import type { Customer } from '@/types/customer';
import Link from 'next/link';

export default function Item({ customer }: { customer: Customer }) {
  return (
    <Link
      href={`/customers/${customer.id}`}
      className="group/item relative flex items-center gap-2 transition-opacity group-hover/list:opacity-50 group-hover/list:hover:opacity-100 md:gap-4"
    >
      <div className="aspect-square size-10 rounded-full bg-gray-50" />
      <p className="line-clamp-1 h-7 w-full rounded-md md:rounded">{customer.name}</p>
      <p className="line-clamp-1 hidden h-7 w-full rounded md:flex">{customer.email}</p>
      <div className="absolute -right-2 flex opacity-0 transition-all group-hover/item:right-0 group-hover/item:opacity-100">
        <Icon name="chevron-down" className="-rotate-90" />
      </div>
    </Link>
  );
}
