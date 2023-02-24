import Head from 'next/head';
import { MainLayout } from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import { ServicesLayout } from '@/layouts/ServicesLayout';
import { data } from '@/data/ServicesData';
import Link from 'next/link';
import { ServicesBackIcon, ServicesDetailsIcon } from '@/assets/icons';
import classNames from 'classnames';
import cls from '../../components/services/ServicesID.module.scss';
import { ServicesWeight } from '@/components/services/ServicesWeight';
import { ServicesSection } from '@/components/services/ServicesSection';
import { ServicesEncoding } from '@/components/services/ServicesEncoding';

let cn = classNames.bind(cls);

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const showArticles = data.map((article) => {
    const { articleId, title, link, articleIcon: ArticleIcon } = article;
    const isActive = articleId === Number(id);

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
              {Number(id) === 1 ? (
                <ServicesWeight />
              ) : Number(id) === 2 ? (
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
