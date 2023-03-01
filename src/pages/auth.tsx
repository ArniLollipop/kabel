import Head from 'next/head';
import { MainLayout } from '@/layouts/MainLayout';
import { Authorization } from '@/components/authorization/Authorization';

export default function Home() {
  return (
    <>
      <Head>
        <title>Авторизация</title>
        <meta name="description" content="ТОО Almaty Kazkabel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Roboto:wght@400;500&display=swap"
        />
      </Head>
      <MainLayout>
        <Authorization />
      </MainLayout>
    </>
  );
}
