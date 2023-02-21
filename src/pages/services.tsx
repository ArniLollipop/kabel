import Head from 'next/head';
import { MainLayout } from '@/layouts/MainLayout';
import classNames from 'classnames';
import { ServicesDetailsIcon, ServicesTitleIcon } from '@/assets/icons';
import cls from '../components/services/Services.module.scss';
import Link from 'next/link';

// import { Services } from '@/components/services';

let cn = classNames.bind(cls);

export default function Home() {
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
        <div className={cn(cls.Services)}>
          <ServicesTitleIcon />

          <section className={cn(cls.container)}>
            <div className={cn(cls.CableCalculation, cls.firstCalculation)}>
              <h2>Расчет Веса кабеля</h2>
              <p>
                Данный сервис предназначен для вычисления весовых показателей кабеля/провода. Зная
                марку и сечение, вы моментально получите информацию о том, сколько весит 1 метр
                выбранной марки.
              </p>
              <Link href={`/services/CWeightCalculation`}>
                Подробнее <ServicesDetailsIcon />
              </Link>
            </div>
            <div className={cn(cls.CableCalculation, cls.secondCalculation)}>
              <h2>Расчет сечения кабеля</h2>
              <p>
                Калькулятор позволяет производить расчет сечения кабеля исходя из параметров общей
                активной мощности и напряжения без учета падения напряжения на длине линии.
              </p>
              <Link href={`/services/CSectionCalculation`}>
                Подробнее <ServicesDetailsIcon />
              </Link>
            </div>
            <div className={cn(cls.CableCalculation, cls.decoding)}>
              <h2>Расшифровка кабеля</h2>
              <p>
                Все проводники и кабели имеют специальную маркировку, которая показывает
                характеристики того или иного продукта. С помощью сервиса расшифровать марку стало
                еще проще.
              </p>
              <Link href={`/services/CSectionCalculation`}>
                Подробнее <ServicesDetailsIcon />
              </Link>
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  );
}
