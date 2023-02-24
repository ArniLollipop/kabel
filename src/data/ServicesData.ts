import {
  ServicesArticleIcon1,
  ServicesArticleIcon2,
  ServicesArticleIcon3,
} from '../assets/icons/servicesIcons/servicesIcons';
import cls from '../components/services/Services.module.scss';

export const data = [
  {
    articleId: 1,
    title: 'Расчет Веса кабеля',
    desc: `Данный сервис предназначен для вычисления весовых показателей кабеля/провода. Зная
    марку и сечение, вы моментально получите информацию о том, сколько весит 1 метр
    выбранной марки.`,
    link: '1',
    articleCls: cls.firstCalculation,
    articleIcon: ServicesArticleIcon1,
  },
  {
    articleId: 2,
    title: 'Расчет сечения кабеля',
    desc: `Данный сервис предназначен для вычисления весовых показателей кабеля/провода. Зная
    марку и сечение, вы моментально получите информацию о том, сколько весит 1 метр
    выбранной марки.`,
    link: '2',
    articleCls: cls.secondCalculation,
    articleIcon: ServicesArticleIcon2,
  },
  {
    articleId: 3,
    title: 'Расшифровка кабеля',
    desc: `Все проводники и кабели имеют специальную маркировку, которая показывает
    характеристики того или иного продукта. С помощью сервиса расшифровать марку стало еще
    проще.`,
    link: '3',
    articleCls: cls.decoding,
    articleIcon: ServicesArticleIcon3,
  },
];

export const select1 = [
  {
    id: 1,
    title: 'внутри помещения',
  },
  {
    id: 2,
    title: 'вне помещения',
  },
  {
    id: 3,
    title: 'подключение электроснабжения к дому',
  },
];

export const select2 = [
  {
    id: 1,
    title: 'на земле',
  },
  {
    id: 2,
    title: 'на воздухе',
  },
  {
    id: 4,
    title: 'в трубе или непоследственно в теплоизолированной стене, в молдингах',
  },
  {
    id: 5,
    title: `в трубах, в кабельных коробах, проложенных по деревянным или кирпичным стенам, в пустотах 
      строительных конструкций, в кладке (бетоне), в подвесных потолках, в полах`,
  },
  {
    id: 6,
    title: 'непосредственно в кладке (бетоне), штробе',
  },
];
