import { Container } from '@/components/ui';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex size-full items-center justify-center">
      <Container className="flex-col items-start justify-center text-left">
        <h1 className="text-center text-2xl font-semibold">Welcome to Invoicer</h1>
        <p className="mb-4 mt-2 text-lg text-neutral-800">
          The easy way to create and manage invoices.
        </p>
        <Link
          href="/invoices"
          className="rounded-xl border border-transparent bg-black px-6 py-1.5 text-white transition-all hover:border-gray-900/80 hover:bg-gray-700 active:border-gray-900/60 active:bg-gray-600/80"
        >
          Get Started
        </Link>
      </Container>
    </main>
  );
}
