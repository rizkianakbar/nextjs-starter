import clsx from 'clsx';

import useLoaded from '@/hooks/useLoaded';

export default function ComingSoon({ name }: { name: string }) {
  const isLoaded = useLoaded();
  return (
    <div
      className={clsx(
        'flex justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto mb-[50px]',
        isLoaded && 'fade-in-start'
      )}
    >
      <h1
        className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'
        data-fade='2'
      >
        {name} Coming soon...
      </h1>
    </div>
  );
}
