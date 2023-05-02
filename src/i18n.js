import i18n from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(I18NextHttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "ru",
    defaultLocale: "ru",
    debug: true,
    whitelist: ["kz", "ru"],
    debug: false,
    detection: {
      order: ["localstorage", "cookie"],
      caches: ["localstorage", "cookie"],
    },
    interpollation: {
      escapeValue: false,
    },
    resources: {
      kz: {
        translation: {
          header: {
            account: "Жеке кабинет",
            free: "РК бойынша тегін",
          },
          list: {
            company: "Компания жайлы",
            product: "Өнімдер",
            services: "Қызметтер",
            news: "Жаңалықтар",
            payment: "Төлем және жеткізу",
            contacts: "Контактілер",
          },
          footer: {
            politics: "Құпиялылық саясаты",
            time: "Жұмыс уақыты",
            phones: "Телефондар",
            free: "РК бойынша тегін",
            private: "Барлық құқықтар сақталған",
            pay: "Төлем әдістері",
            main: "Басты",
            cart: "Себет",
            profile: "Профиль",
          },
          auth: "Авторизация",
          code: "Код жіберу",
          forgot: "Забыли пароль?",
          notSms: "Вы не получили код?",
          again: "Отправить повторно",
          again2: "Отправить повторно через",
          verify: "Потдвердить",
          save: "Сохранить пароль",
          go: "Войти",
          another: "Подробнее",
          bonuses: "Накопленные бонусы",
          cardNumber: "Номер карты:",
          personalSale: "Персональная скидка:",
          balance: "Баланс",
        },
      },
      ru: {
        translation: {
          header: {
            account: "Личный кабинет",
            free: "Бесплатно по РК",
          },
          list: {
            company: "О компании",
            product: "Продукция",
            services: "Сервисы",
            news: "Новости",
            payment: "Оплата и доставка",
            contacts: "Контакты",
          },
          footer: {
            politics: "Политика конфиденциальности",
            time: "Время работы",
            phones: "Телефоны",
            free: "Бесплатно по РК",
            private: "Все права защищены",
            pay: "Способы оплаты",
            main: "Главная",
            cart: "Корзина",
            profile: "Профиль",
          },
          auth: "Авторизация",
          code: "Получить код",
          forgot: "Забыли пароль?",
          notSms: "Вы не получили код?",
          again: "Отправить повторно",
          again2: "Отправить повторно через",
          verify: "Потдвердить",
          save: "Сохранить пароль",
          go: "Войти",
          another: "Подробнее",
          bonuses: "Накопленные бонусы",
          cardNumber: "Номер карты:",
          personalSale: "Персональная скидка:",
          balance: "Баланс",
          add: "Добавить",
          saveCard: "Сохраненные карты",
          default: "По умолчанию",
          delete: "Удалить",
          london: "Валюта и Лондонская биржа металлов",
          valuta: "Валюта",
          tenge: "Казахстанский тенге",
          dostavka: "Адрес доставки",
          update: "Редактировать",
          myOrders: "Мои заказы",
          typeDostavka: "Способ доставки",
          typePay: "Способ оплаты",
          payInfo: "Информация об оплате",
          payTovar: "Стоимость товара",
          payDostavka: "Стоимость доставки",
          payStatus: "Статус оплаты",
          yourName: "Ваше имя",
          name: "Имя",
          yourMail: "Ваш email",
          yourPhone: "Ваш номер",
          changePass: "Сменить пароль",
          changeProfile: "Редактировать профиль",
          changePhone: "Сменить телефон",
          recom: "Рекомендуем к покупке",
          support: "Служба поддержки",
          brak: "Товар пришел с браком?",
          ribaText: `Далеко-далеко за словесными горами в стране, гласных и
                          согласных живут рыбные тексты. Власти, рекламных
                          толку! Повстречался, большого.`,
          notDelivery: "Не доставили?",
          notTovar: "Получил не тот товар?",
          notAll: "Получил не все товары?",
          getCall: "Заказать звонок",
          phoneUs: "Позвоните нам",
          chatUs: "Напишите нам",
          hello: "Здравствуйте!",
          question:
            "Выберите из списка заказ, по которому возник у вас вопрос.",
          watch: "СМОТРИТЕ ТАКЖЕ",
          city: "Город",
          officeAddress: "Адрес офиса",
          getZaiavka: "Прием заявок",
          contactUs: "Связаться с нами",
          lastNews: "Последние новости",
          pay: "Оплата",
          delivery: "Доставка",
          print: "Принт",
          tableWeight: "Таблица веса кабеля",
          markCabel: "Марка кабеля с сечением",
          lengthCabel: "Количество метров",
          weight: "Вес, кг",
          length: "Общая длина кабеля",
          weight: "Общий вес кабеля",
          createAccount: "Создать аккаунт",
          agree: "Согласен получать новости о скидках и акциях!",
          passErr: "Пароли не совпадают!",
          create: "Создать",
          otmena: "Отменить",
          saveMent: "Сохранить",
          changeAddress: "Изменить адрес",
          newAddress: "Новый адрес",
          podtverdit: "подтвержден",
          writeCode: "Введите код из письма",
          sentTo: "Отправили его на почту",
          getCode: "Введите код из сообщения",
          sentToPhone: "Отправили его на номер",
          checkAccount: "Проверка аккаунта",
          forChange:
            "Чтобы изменить пароль, выберите один из способов проверки аккаунта",
          bymail: "По почте",
          byPhone: "По номеру телефона",
          getSmsAgain: "Получить код снова",
          getSmsAgain2: "Получить код снова через",
          smsSentToPhone: "Код отправлен на номер",
          writeNumberPlease: "Введите номер!",
          wrongPhoneNumber: "Неправильный номер!",
          wrongSmsCodePlease: "Введите код!",
          newPhone: "Новый телефон",
          aprove: "Подтвердить",
          dead: "Выполнен",
          toCart: "корзину",
          send: "Отправить",
          savePdf: "Сохранить результат в PDF",
          getResults: "Распечатать результаты",
          share: "Поделиться",
          description: "Описание",
          alotText1: `Что означает маркировка кабеля или провода? Маркировка всех
                кабельно-проводниковых изделий может быть установлена строго по
                правилам ГОСТ, или по общепринятым стандартам ТУ. Информация,
                которая содержится в маркировке кабеля или провода, говорит нам
                о том, из какого материала сделаны токопроводящие жилы, их
                изоляция и оболочка, о характере изоляции и оболочки, и состоит
                из буквенно-цифровых символов. К примеру, расшифровка кабеля ВВГ
                включает такие параметры как изоляция жил, состав оболочки и
                наличие защитных покровов. Указывая в начале названия марки
                кабеля букву «А» – АВВГ, производитель сообщает, что жилы в
                данном кабеле алюминиевые. Цифрами указывается рабочее
                напряжение.`,
          alotText2: `Преимущества использования нашего онлайн-сервиса: При
                использовании онлайн-сервиса расшифровка проводов и кабеля не
                займет у вас много времени. Нет необходимости искать материал в
                справочниках, таблицах расшифровки и каталогах производителей –
                все происходит автоматически. Наберите нужную марку в поисковую
                строку и выберите из предложенного списка подходящий
                кабель/провод. Результат готов! Найти нужную расшифровку можно
                как для продукции российского производства, так и импортного
                Информация сервиса носит справочно-информационный характер.`,
          choiceCount: "Выберите количество жил",
          choiceMaterials: "Выберите материал жилы",
          addCabel: "Добавить кабель",
          ediniza: "Единица измерения",
          myProfile: "Мой профиль",
          myOrders: "Мои заказы",
          addresses: "Адреса доставки",
          leave: "Выйти",
          deleteAccount: "Удалить аккаунт",
          nothing: "У вас в корзине ничего нету...",
          clear: "сбросить",
          nalichie: "Наличие",
          aprove2: "Применить",
          toUp: "Наверх",
          advantage: "Преимущества",
          sertificates: "Сертификаты",
          raschetCabel: "расчет сечения кабеля",
          rashifrovka: "Расшифровка кабеля",
          onlyForYou: "СПЕЦИАЛЬНО ДЛЯ ВАС",
        },
      },
    },
  });
