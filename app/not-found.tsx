import Link from 'next/link';
import type { JSX } from 'react';

import { Button } from '@/components/ui/button';

export default function NotFoundPage(): JSX.Element {
  return (
    <main className="flex flex-col gap-4 justify-center items-center h-screen">
      <h2 className="text-3xl font-bold">Oops! Page not found</h2>

      <p>The page you are looking for does not exist.</p>

      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </main>
  );
}
