// packages
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

// data
import { data } from '@/data/ServicesData';

// assets
import { ServicesBackIcon, ServicesDetailsIcon } from '@/assets/icons';
import cls from '../../components/services/ServicesID.module.scss';

// components
import { ServicesWeight } from '@/components/services/ServicesWeight';
import { ServicesSection } from '@/components/services/ServicesSection';
import { ServicesEncoding } from '@/components/services/ServicesEncoding';
import { MainLayout } from '@/layouts/MainLayout';
import { ServicesLayout } from '@/layouts/ServicesLayout';
import { useEffect, useState } from 'react';
import { Button } from '@/UI/Button';
import { ThemeButton } from '@/UI/Button/ui/Button';

let cn = classNames.bind(cls);

export default function Home() {
  const router = useRouter();
  let { id } = router.query;

  const showArticles = data.map((article) => {
    const { articleId, title, link, articleIcon: ArticleIcon } = article;
    const isActive = link === id;

    return (
      <article
        key={articleId}
        className={cn(cls.servicesArticleIntro, isActive ? cls.active : cls.default)}
      >
        <Link href={`/services/${link}`}>
          <ArticleIcon
            className={cls.articleIconWidthNHeight}
            textColor={isActive ? '#fff' : '#00ABC2'}
          />
          <h2>{title}</h2>
          <ServicesDetailsIcon textColor={isActive ? '#fff' : '#00ABC2'} />
        </Link>
      </article>
    );
  });

  return (
    <>
      <Head>
        <title>Сервисы</title>
        <meta name="description" content="ТОО Almaty Kazkabel | Сервисы" />
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
        <ServicesLayout>
          <section className={cn(cls.container)}>
            <Link href={'/services'} className={cn(cls.backBtn)}>
              <ServicesBackIcon />
            </Link>
            <div className={cn(cls.serviceArticleIntroContainer)}>{showArticles}</div>

            <div className={cn(cls.serviceArticleIntroContent)}>
              {id === 'weight' ? (
                <ServicesWeight />
              ) : id === 'section' ? (
                <ServicesSection />
              ) : (
                <ServicesEncoding />
              )}
            </div>
          </section>
        </ServicesLayout>
      </MainLayout>
    </>
  );
}
