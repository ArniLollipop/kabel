export interface ordersDataI {
  id: number;
  img: string;
  name: string;
  descr: string;
  date: string;
  adress: [string, string];
  phoneNumber: string;
  deliveryMethod: string;
  paymentMethod: string;
  goodCost: number;
  deliveryCost: number;
  status: string;
}

export const ordersData: ordersDataI[] = [
  {
    id: 1,
    img: "/ImageMockProduct.png",
    name: "Кабель",
    descr: "lorem ipsum",
    date: "03.02.23",
    adress: ["Казахстан", "Улица Шевченко"],
    phoneNumber: "8 777 7777777",
    deliveryMethod: "Курьерская доставка",
    paymentMethod: "Картой онлайн",
    goodCost: 690,
    deliveryCost: 500,
    status: "Оплачен",
  },
  {
    id: 2,
    img: "/ImageMockProduct.png",
    name: "Провод",
    descr: "lorem ipsum",
    date: "03.02.23",
    adress: ["Казахстан", "Улица Шевченко"],
    phoneNumber: "8 777 7777777",
    deliveryMethod: "Курьерская доставка",
    paymentMethod: "Картой онлайн",
    goodCost: 690,
    deliveryCost: 500,
    status: "Оплачен",
  },
  {
    id: 3,
    img: "/ImageMockProduct.png",
    name: "Оплетка",
    descr: "lorem ipsum",
    date: "03.02.23",
    adress: ["Казахстан", "Улица Шевченко"],
    phoneNumber: "8 777 7777777",
    deliveryMethod: "Курьерская доставка",
    paymentMethod: "Картой онлайн",
    goodCost: 690,
    deliveryCost: 500,
    status: "Оплачен",
  },
  {
    id: 4,
    img: "/ImageMockProduct.png",
    name: "Жила",
    descr: "lorem ipsum",
    date: "03.02.23",
    adress: ["Казахстан", "Улица Шевченко"],
    phoneNumber: "8 777 7777777",
    deliveryMethod: "Курьерская доставка",
    paymentMethod: "Картой онлайн",
    goodCost: 690,
    deliveryCost: 500,
    status: "Оплачен",
  },
  {
    id: 5,
    img: "/ImageMockProduct.png",
    name: "Медь",
    descr: "lorem ipsum",
    date: "03.02.23",
    adress: ["Казахстан", "Улица Шевченко"],
    phoneNumber: "8 777 7777777",
    deliveryMethod: "Курьерская доставка",
    paymentMethod: "Картой онлайн",
    goodCost: 690,
    deliveryCost: 500,
    status: "Оплачен",
  },
];
