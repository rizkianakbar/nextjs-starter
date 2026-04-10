'use client';

import type { JSX } from 'react';

import { Button } from '@/components/ui/button';

export default function GlobalErrorPage({ error }: { error: Error & { digest?: string } }): JSX.Element {
  console.error(error);

  return (
    <html lang="en">
      <body className="flex flex-col gap-4 justify-center items-center h-screen">
        <h2 className="text-3xl font-bold">Oops! Something went wrong</h2>

        <p>Please try again later or contact support if the problem persists.</p>

        <Button onClick={() => window.location.reload()}>Try again</Button>
      </body>
    </html>
  );
}
