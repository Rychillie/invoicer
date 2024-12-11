'use client';

import c from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { id: 'invoices', name: 'Invoices', href: '/invoices' },
  { id: 'customers', name: 'Customers', href: '/customers' }
];

export default function Nav() {
  const pathname = usePathname();
  const activeTab = pathname.split('/')[1];

  return (
    <>
      <nav className="flex w-full gap-4 text-center font-medium">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={c(
              'flex-1 relative px-4 py-1.5 transition-colors',
              activeTab === tab.id ? 'text-gray-900' : 'text-gray-600'
            )}
            style={{
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            {tab.name}

            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 -z-10 rounded-full border border-gray-200 bg-gray-50"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </Link>
        ))}
      </nav>
    </>
  );
}
