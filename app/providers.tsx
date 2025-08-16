'use client';

import { ProgressProvider } from '@bprogress/next/app';

import { Toaster } from '@/components/ui/sonner';

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ProgressProvider height="4px" color="#F15A29" options={{ showSpinner: false }} shallowRouting>
      <Toaster
        toastOptions={{
          classNames: {
            error: '!bg-red-500 !text-white !border-red-300',
            success: '!bg-green-500 !text-white !border-green-300',
            warning: '!bg-yellow-500 !text-white !border-yellow-300',
          },
        }}
      />

      {children}
    </ProgressProvider>
  );
}
