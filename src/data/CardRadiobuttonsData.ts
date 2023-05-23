import {
  IconCardDelivery,
  IconSideBarCard,
  IconSideBarKaspi,
  IconCardTenge,
  IconCash,
} from "@/assets/icons/cardIcons";
import { useHttp } from "@/hooks/useHttp";
import Cash from "@/assets/icons/Cash.svg";
import IconPaymentKaspi from "@/assets/icons/IconPaymentKaspi.svg";

export const CardDeliveryData = [
  {
    id: 1,
    text: "Улица Шевченко",
    cardDeliveryIconBus: null,
    cardDeliveryIconTenge: null,
  },
  {
    id: 2,
    text: "Богенбай батыра 86/47",
    cardDeliveryIconBus: null,
    cardDeliveryIconTenge: null,
  },
  {
    id: 3,
    text: "Доставка",
    cardDeliveryIconBus: IconCardDelivery,
    cardDeliveryIconTenge: IconCardTenge,
  },
];

export const CardPayData = [
  {
    id: 1,
    text: "Картой онлайн",
    cardPayIcon: IconSideBarCard,
  },
  {
    id: 2,
    text: "Kaspi Pay",
    cardPayIcon: IconSideBarKaspi,
  },
];
