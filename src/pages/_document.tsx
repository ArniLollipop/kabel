import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
        <script src="https://api-maps.yandex.ru/2.1/?apikey=18378de5-507b-4d2a-a7c7-ca2fb2be7f0b&lang=ru_RU" />
        {/* сам в ахуе что написал это */}

        {/* сорри я не хотел меня заставили писать это говно, если будет вопрос
        пиши на телегу @ArniL, но оно работает */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // это функция для получения карты в контактах
              function getMap(lat, lon){
                ymaps.ready(init);
                function init() {
                  var myMap = new ymaps.Map("map", {
                    center: [lat, lon],
                    zoom: 7,
                  });
                }
              }
              // это для добавления/удаления адреса
              let lon2, lat2;
              function getMap2(lat, lon) {
                
                var myPlacemark,
        myMap = new ymaps.Map('map1', {
            center: [43.2446, 76.9114],
                  zoom: 7,
        }, {
            searchControlProvider: 'yandex#search'
        });
                // метод взят из доки яндекс мапы, это для того чтобы получать адрес после поиска
                var searchControl = new ymaps.control.SearchControl({
                  options: {
                    provider: 'yandex#search'
                  }
                });

                myMap.controls.add(searchControl);

                searchControl.events.add('resultselect', function(e) {
                  var index = e.get('index');
                  searchControl.getResult(index).then(function(res) {
                    //
                    console.log(res.geometry.getCoordinates(), res.properties._data.address); // получаем адрес найденной точки

                    // тут крч через обычный жс помещал значение в инпуты, которые скрыты, сделано для того чтобы получать данные
                    // плюс еще useState не работало с нативным жс хотя я там помещал onChange, но это не работало. Поэтому пришлось так
                    document.getElementById("address").value = res.properties._data.address; //
                    document.getElementById("latitude").value = res.geometry.getCoordinates()[0]; //
                    document.getElementById("lontitude").value = res.geometry.getCoordinates()[1]; //

                    ymaps.geolocation.get({
                          provider: 'yandex',
                          autoReverseGeocode: false
                        }).then(function (result) {
                          console.log(result.geoObjects.get(0).properties.get('metaDataProperty'));
                        });

                  });
                })

              } 



              
                  `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
