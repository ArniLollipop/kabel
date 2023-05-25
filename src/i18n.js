import i18n from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(I18NextHttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      kz: {
        translation: {
          lang: "KZ",
          header: {
            account: "Жеке кабинет",
            free: "РК бойынша тегін",
          },
          list: {
            company: "Компания",
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
            cart: "Қоржын",
            profile: "Профиль",
            alux: "A-LUX компаниясымен әзірлеген веб-сайт",
          },
          auth: "Авторизация",
          code: "Кодты жіберу",
          forgot: "Ұмыттыңыз ба?",
          notSms: "кодты алған жоқсыз ба?",
          again: "Қайта жіберу",
          again2: "Қайта жіберу",
          verify: "Растау",
          save: "Құпия сөзді сақтау",
          go: "Кіру",
          another: "Көбірек",
          bonuses: "Жинақталған бонустар",
          cardNumber: "Карта нөмірі:",
          personalSale: "Жеке жеңілдік:",
          balance: "Баланс",
          add: "Қосу",
          saveCard: "Сақталған карталар",
          default: "Әдеп бойынша",
          delete: "Жою",
          london: "Валюта және Лондон металл биржасы",
          valuta: "Валюта",
          tenge: "Қазақстандық теңге",
          dostavka: "Жеткізу мекенжайы",
          update: "Өзгерту",
          myOrders: "Менің тапсырыстарым",
          typeDostavka: "Жеткізу әдісі",
          typePay: "Төлем тәсілі",
          payInfo: "Төлем туралы ақпарат",
          payTovar: "Тауардың құны",
          payDostavka: "Жеткізу құны",
          payStatus: "Төлем жағдайы",
          yourName: "Сіздің атыңыз",
          name: "Атыңыз",
          yourMail: "Сіздің почтаңыз",
          yourPhone: "Телефон нөмірі",
          changePass: "Құпия сөзді өзгерту",
          changeProfile: "Профильді өзгерту",
          changePhone: "Телефонды ауыстыру",
          recom: "Ұсыныста",
          support: "Қолдау қызметі",
          brak: "Өнім ақаумен келді ме?",
          ribaText: `Алыс, елдегі ауызша таулардан алыс, дауысты дыбыстар мен
                           дауыссыз дыбыстар тірі балық мәтіндері. Күш, жарнама
                           сезім! Үлкенімен кездесті.`,
          notDelivery: "Жетпеді ме?",
          notTovar: "Қате затты алдыңыз ба?",
          notAll: "Барлығын алған жоқсыз ба?",
          getCall: "Қоңырауды сұрау",
          phoneUs: "Қоңырау шалыңыз",
          chatUs: "Бізге жазыңыз",
          hello: "Сәлеметсіз бе!",
          question: "Тізімнен сұрағыңыз бар ретті таңдаңыз.",
          watch: "Тағы да коріңіз",
          city: "Қала",
          officeAddress: "Кеңсе мекенжайы",
          getZaiavka: "Өтінімдерді қабылдау",
          contactUs: "Бізбен байланысыңыз",
          lastNews: "Соңғы жаңалықтар",
          pay: "Төлем",
          delivery: "Жеткізу",
          print: "Принт",
          tableWeight: "Кабель салмағының кестесі",
          markCabel: "Бөлімі бар кабель маркасы",
          lengthCabel: "Метрлер саны",
          weight: "Салмағы, кг",
          length: "Кабельдің жалпы ұзындығы",
          weight: "Кабельдің салмағы",
          createAccount: "Аккаунты құру",
          agree: "Жеңілдіктер мен акциялар туралы жаңалықтар алуға келісемін!",
          passErr: "Құпия сөз сәйкес келмеді!",
          create: "Жасау",
          otmena: "Болдырмау",
          saveMent: "Сақтау",
          changeAddress: "Мекенжайды өзгерту",
          newAddress: "Жаңа мекенжай",
          podtverdit: "растау",
          writeCode: "Кодты енгізіңіз",
          sentTo: "Поштаға жіберілді",
          getCode: "Хабарламадағы кодты енгізіңіз",
          sentToPhone: "Отправили его на номер",
          checkAccount: "Нөмірге жіберді",
          forChange:
            "Құпия сөзді өзгерту үшін есептік жазбаны тексеру әдістерінің бірін таңдаңыз",
          bymail: "Пошта арқылы",
          byPhone: "Телефон нөмірі бойынша",
          getSmsAgain: "Кодты қайтадан алыңыз",
          getSmsAgain2: "Кодты қайтадан алыңыз",
          smsSentToPhone: "Код нөміріне жіберілді",
          writeNumberPlease: "Нөмірді енгізіңіз!",
          wrongPhoneNumber: "Қате нөмір!",
          wrongSmsCodePlease: "Кодты енгізіңіз!",
          newPhone: "Жаңа телефон",
          aprove: "Растау",
          emptyOrder: "Сіз әлі тапсырыс берген жоқсыз",
          dead: "Аяқталды",
          toCart: "Себетке",
          send: "Жіберу",
          savePdf: "Нәтижені PDF-ке сақтаңыз",
          getResults: "Нәтижелерді басып шығару",
          share: "Бөлісу",
          description: "Сипаттама",
          alotText1: `Кабельді немесе сымды таңбалау нені білдіреді? Барлығын белгілеу
                 кабель және сым өнімдерін қатаң сәйкес орнатуға болады
                 ГОСТ ережелері немесе жалпы қабылданған ТУ стандарттарына сәйкес. Ақпарат,
                 кабельде немесе сым таңбалауында бар екенін айтады
                 өткізгіш сымдардың қандай материалдан жасалғаны туралы, олардың
                 оқшаулау және қаптама, оқшаулау және қабық сипаты бойынша және тұрады
                 әріптік-сандық таңбалардан. Мысалы, VVG кабелін декодтау
                 негізгі оқшаулау, қабық құрамы және сияқты параметрлерді қамтиды
                 қорғаныс жабындарының болуы. Бренд атауының басында көрсету
                 кабель «A» әрпі - AVVG, өндіруші ядролардың ішінде екенін хабарлайды
                 бұл кабель алюминий. Сандар жұмысты көрсетеді
                 Вольтаж.`,
          alotText2: `Біздің онлайн қызметімізді пайдаланудың артықшылықтары:
                 онлайн қызметін пайдалану сымдар мен кабельдерді декодтау мүмкін емес
                 көп уақытыңызды алады. Материалды іздеудің қажеті жоқ
                 каталогтар, декодтау кестелері және өндірушілердің каталогтары -
                 бәрі автоматты түрде болады. Іздеу жолағына қалаған брендті теріңіз
                 жолын таңдап, тізімнен сәйкесті таңдаңыз
                 кабель/сым. Нәтиже дайын! Қажетті шифрды шешуді таба аласыз
                 ресейлік және импорттық өнімдер үшін де
                 Қызметтік ақпарат анықтамалық және ақпараттық мақсаттарға арналған.`,
          choiceCount: "Өзектер санын таңдаңыз",
          choiceMaterials: "Негізгі материалды таңдаңыз",
          addCabel: "Кабель қосыңыз",
          ediniza: "Өлшем бірлігі",
          myProfile: "Менің профилім",
          myOrders: "Менің тапсырыстарым",
          addresses: "Жеткізу мекенжайлары",
          leave: "Шығу",
          deleteAccount: "Аккаунты жою",
          nothing: "Сенің арбаңда ештеңе жоқ...",
          clear: "Қалпына келтіру",
          nalichie: "Қол жетімділік",
          aprove2: "Қолдану",
          toUp: "Жоғары",
          advantage: "Жетістектер",
          sertificates: "Сертификаттар",
          raschetCabel: "кабель қимасын есептеу",
          rashifrovka: "Кабельді декодтау",
          onlyForYou: "АРНАЙЫ СІЗ ҮШІН",
          saleFromAll: "Бонустар әр тапсырыспен беріледі",
          exchangeRates: "Валюта бағамдары",
          exchangeRatesText: "Мәліметтер бойынша түсті металдарды сату қарқыны",
          placeholderCode: "Код SMS",
          newPass: "Жаңа құпиясөз",
          repeatPass: "Құпиясөзді қайталау",
          maintainerCard: "Несие карточкасын иеленушісінің Аты",
          findAddress: "Картадағы іздеу арқылы мекенжайыңызды табыңыз",
          findTovar: "Өнім атауы бойынша іздеу",
          nomerZakaza: "Тапсырыс нөмірі",
          sposobOplata: "Төлем және жеткізу әдісі",
          nalichnimi: "Қолма-қол ақша",
          dostavkaCura: "Жеткізу: курьер",
          noDead: "Не Выполнен",
          time: "Уақыты",
          getPhone: "Қоңырау сұрауы қабылданды!",
          error: "Қате",
          copyOk: "Сілтеме алмасу буферіне көшірілді!",
          copyError: "Көшіру қатесі!",
          writeCabel: "Кабель брендін енгізіңіз",
          prokladkaType: "Теу әдісін таңдаңыз",
          getPower: "Қуатты (кВт) енгізіңіз",
          raschetSechenia: "Кабель бөлігін есептеу:",
          pickTypeElectro: "Электр торының түрін таңдаңыз",
          labelFind: "Іздеу",
          naming: "Аты",
          areYouDown: "Шығыңыз келетініне сенімдісіз бе?",
          da: "Ия",
          garantia: "Сапа кепілдігі",
          usloviaVozvrata: "Қайтару шарттары",
          straxovanie: "Сақтандыру",
          spendBonus: "Бонустарды жұмсаңыз",
          bonuses: "Жинақталған",
          countCart: "Данасы",
          allLength: "Жалпы ұзындық",
          sumForPay: "Төленетін сома",
          makeZakaz: "Заказды Жасау",
          nelzya1000:
            "Сіз жеткізуді есептемегенде 1000 теңгеден төмен тапсырыс бере алмайсыз",
          tovars: "тауарлар",
          noTovars: "Ешқандай өнім табылмады",
          tovarCode: "Өнім коды",
          estUNas: "Бар",
          podZakaz: "Тапсырыс бойынша",
          allCharackteristik: "Барлық сипаттамалар",
          razvernutOpisanie: "Сипаттаманы кеңейту",
          dannieZakaza: "Жеткізу деректері",
          cura2000: "Курьер арқылы 2000 теңгеден",
          sortirovkaPo: "Сұрыптау",
          vozrastaniPay: "Үлкен бағасы бойынша",
          spuskPay: "Төмендеу бағасы бойынша",
          offerText: `Жоғары технология мен заманауи жабдықты пайдалана отырып, біз
                     біз барлығына сәйкес келетін кабель өнімдерін ұсынамыз
                     халықаралық стандарттар мен нормалар`,
          aboutPayTitle: "Төлемдер. Несие картасымен онлайн төлеу",
          canBuy: "Тапсырыс беруге болады:",
          mailError: "Сізде тіркелген пошта жоқ",
          free: "Төлемсіз",
        },
      },
      ru: {
        translation: {
          lang: "RU",
          da: "Да",
          free: "Бесплатно",
          mailError: "У вас не зарегестрирована почта",
          canBuy: "Доступно к заказу:",
          aboutPayTitle: "Платежи. Оплата банковской картой онлайн",
          offerText: `Используя высокие технологии и современное оборудование, мы
                    представляем кабельную продукцию отвечающую всем
                    международным стандартам и нормам`,
          vozrastaniPay: "Возрастанию цены",
          spuskPay: "Убыванию цены",
          sortirovkaPo: "Сортировать по",
          cura2000: "Курьером от 2000 тг",
          dannieZakaza: "Данные о доставке",
          razvernutOpisanie: "Развернуть описание",
          allCharackteristik: "Все характеристики",
          estUNas: "В наличии",
          podZakaz: "Под заказ",
          tovars: "товаров",
          noTovars: "Товары не найдены",
          tovarCode: "Код товара",
          nelzya1000:
            "Вы не можете заказать на сумму меньше 1000 тг, без учета доставки",
          makeZakaz: "Оформить заказ",
          sumForPay: "Сумма к оплате",
          countCart: "Количество",
          allLength: "Общая Длина",
          bonuses: "Накоплено",
          spendBonus: "Потратить бонусы",
          straxovanie: "Страхование",
          usloviaVozvrata: "Условия возврата",
          garantia: "Гарантия качества",
          areYouDown: "Вы уверены что хотите выйти?",
          naming: "Наименование",
          labelFind: "Поиск",
          pickTypeElectro: "Выберите тип электросети",
          raschetSechenia: "Расчет сечения кабеля:",
          getPower: "Введите мощность (кВт)",
          prokladkaType: "Выберите  способ прокладки",
          writeCabel: "Введите марку кабеля",
          copyOk: "Ссылка скопирована в буфер обмена!",
          copyError: "Ошибка при копирований!",
          error: "Ошибка",
          time: "Время",
          getPhone: "Заказ на звонок получен!",
          nalichnimi: "Наличными",
          dostavkaCura: "Доставка: Курьер",
          sposobOplata: "Способ оплаты и доставки",
          nomerZakaza: "Номер заказа",
          repeatPass: "Повторить пароль",
          maintainerCard: "Имя владельца карты",
          findAddress: "Найдите через поиск на карте, ваш адрес",
          findTovar: "Поиск по имени товара",
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
            alux: "Сайт разработан в компании «A-LUX",
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
          emptyOrder: "Вы пока не сделали заказ",
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
          noDead: "Не Выполнен",
          toCart: "В корзину",
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
          saleFromAll: "Бонусы начисляются с каждого заказа",

          exchangeRates: "Курсы валют",
          exchangeRatesText: "Курс продаж цветных металлов по данным",
          placeholderCode: "Код SMS",
          newPass: "Новый пароль",
        },
      },
    },
    debug: true,
    fallbackLng: "ru",
    whitelist: ["kz", "ru"],
    debug: false,
    detection: {
      order: ["localstorage", "cookie"],
      caches: ["localstorage", "cookie"],
    },
    interpollation: {
      escapeValue: false,
    },
  });

export default i18n;
