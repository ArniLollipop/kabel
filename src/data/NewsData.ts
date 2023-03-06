export interface newsI {
  id: number;
  headTitle: string;
  descrText: string;
}

export const news: newsI[] = [
  {
    id: 1,
    headTitle: "Инновация года: возобновляемая энергия",
    descrText:
      "Несмотря на энергетический кризис, интерес инвесторов к возобновляемым источникам энергии (ВИЭ) в 2022 году продолжил расти. По данным Международного энергетического…",
  },
  {
    id: 2,
    headTitle: "Завершено строительство первой очереди новой магистральной линии",
    descrText:
      "Компания 'Атлас' завершила строительство первой очереди магистральной волоконно-оптической линии связи (ВОЛС) 'Транзит Европа - Азия нового поколения' (TEA NEXT), соединившей…",
  },
  {
    id: 3,
    headTitle: "Ученые улучшили способ переработки низкосортного алюминиевого сырья",
    descrText:
      "Метод, который позволит избавиться от примесей железа и других металлов в низкосортном сырье и получить продукт, соответствующий промышленным требованиям…",
  },
  {
    id: 4,
    headTitle: "Инновация года: возобновляемая энергия",
    descrText:
      "Несмотря на энергетический кризис, интерес инвесторов к возобновляемым источникам энергии (ВИЭ) в 2022 году продолжил расти. По данным Международного энергетического…",
  },
  {
    id: 5,
    headTitle: "Завершено строительство первой очереди новой магистральной линии",
    descrText:
      "Компания 'Атлас' завершила строительство первой очереди магистральной волоконно-оптической линии связи (ВОЛС) 'Транзит Европа - Азия нового поколения' (TEA NEXT), соединившей…",
  },
  {
    id: 6,
    headTitle: "Ученые улучшили способ переработки низкосортного алюминиевого сырья",
    descrText:
      "Метод, который позволит избавиться от примесей железа и других металлов в низкосортном сырье и получить продукт, соответствующий промышленным требованиям…",
  },
];

interface articleSectionI {
  id: number;
  image: string | null;
  text: string;
  isMarked: boolean;
}

export interface articleI {
  id: number;
  newssection_set: articleSectionI[];
  title: string;
  created_at: string;
  updated_at: string;
}

export const article: articleI = {
  id: 1,
  newssection_set: [
    {
      id: 1,
      image: "/MockArticle.png",
      text: "ак будут выглядеть два объекта SKA в Австралии и Южной Африке, когда телескопы будут завершены. Авторские права: Любезно предоставлено изображениями SKAO. (CC BY 3.0)",
      isMarked: false,
    },
    {
      id: 2,
      image: null,
      text:
        "Африканские астрономы указывают на золотой век астрономии на континенте, поскольку в Южной Африке начинается работа над крупнейшим в мире телескопом." +
        "«Когда мы говорим о продвижении астрономической повестки дня на этом континенте, для нас это больше, чем продвижение области астрономии», — сказал Кевин Говендер, директор Управления астрономии для развития Международного астрономического союза, на встрече во время Всемирного научного форума, который проходит в законодательной столице Южной Африки Кейптауне с 6 по 9 декабря 2022 года.",
      isMarked: false,
    },
    {
      id: 3,
      image: null,
      text:
        "«Общее число докторов наук в Африке составляет около 300, по сравнению с 600 астрономами, которые находятся в Великобритании»." +
        "Фива Медупе, президент Африканского астрономического общества и профессор астрономии Северо-Западного университета",
      isMarked: true,
    },
    {
      id: 4,
      image: null,
      text:
        "Массив квадратных километров в Африке, который сотрудничает с восемью другими странами, и Африканская сеть интерферометрии с очень длинным исходным уровнем (VLBI) являются двумя наиболее важными инициативами континента, говорит она." +
        "Есть еще много трудностей и вызовов, отмечает она. «Таким образом, большинство стран начинают с нуля, а это означает, что предстоит многое сделать, и они начинают с очень ограниченных ресурсов с точки зрения человеческих ресурсов».",
      isMarked: false,
    },
  ],
  title: "Площадь квадратного километра показывает африканским астрономам светлое будущее",
  created_at: "2023-03-03T19:02:29.342312+06:00",
  updated_at: "2023-03-03T19:02:29.342327+06:00",
};
