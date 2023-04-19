import { ActiveHeaderPage } from '@/components/header/Header';
import { MainLayout } from '@/layouts/MainLayout';
import { Title } from '@/UI/Title/Title';
import classNames from 'classnames/bind';
import cls from './index.module.scss';
import Image from 'next/image';
import { AboutService } from '@/services/About.service';
import { AboutI } from '@/types/AboutTypes';

const cn = classNames.bind(cls);

export default function aboutPage(props: AboutI) {
  // @ts-ignore
  const { image, text, title, our_goal } = props.results[0];

  function clearHtmlTags(htmlString: string) {
    const regex = /(<([^>]+)>)/gi;
    return htmlString.replace(regex, '');
  }
  const clearedText = clearHtmlTags(our_goal || '');

  return (
    <MainLayout activePage={ActiveHeaderPage.ABOUT}>
      <div className={cn(cls.about)}>
        <Title className={cls.about_title}>{title}</Title>
        <div className={cls.about_wrapper}>
          <Image
            className={cls.about_img}
            src={image}
            alt="about image"
            width={1150}
            height={460}
          />

          <div className={cls.about_text} dangerouslySetInnerHTML={{ __html: text }} />
          <p className={cls.about_accent}>{clearedText}</p>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const res = await AboutService().getAboutInfo();

  return {
    props: res,
  };
}
