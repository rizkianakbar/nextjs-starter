import Head from 'next/head';
import { useRouter } from 'next/router';

import Footer from '@/components/molecules/Footer';
import MobileMenu from '@/components/molecules/MobileMenu';
import Navbar from '@/components/molecules/Navbar';

interface IProps {
  children: React.ReactNode;
  date?: string;
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  author?: string;
}

export default function Layout(props: IProps) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Rizkan Akbar - Frontend Engineer.',
    description: `Front-end developer, JavaScript enthusiast`,
    image: '',
    type: 'website',
    ...customMeta,
  };

  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://rizkianakbar.live${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://rizkianakbar.live${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Rizkian Akbar' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@rizkianakbr' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <Navbar />
      <MobileMenu />
      <main
        id='skip'
        className='flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900 overflow-y-auto mt-[130px]'
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
