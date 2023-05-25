import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="shortcut icon" href="/Logo.svg" />
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
                    zoom: 16,
                  });
                  var squareLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="square_layout"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.5916 45.8403C28.3277 43.584 39.5807 33.6518 39.5807 22.9167C39.5807 14.8626 33.0515 8.33337 24.9974 8.33337C16.9432 8.33337 10.4141 14.8626 10.4141 22.9167C10.4141 33.6518 21.667 43.584 24.4032 45.8403C24.7521 46.1281 25.2427 46.1281 25.5916 45.8403ZM24.9978 27.3256C27.2454 27.3256 29.0675 25.3734 29.0675 22.9651C29.0675 20.5569 27.2454 18.6047 24.9978 18.6047C22.7501 18.6047 20.928 20.5569 20.928 22.9651C20.928 25.3734 22.7501 27.3256 24.9978 27.3256Z" fill="#F9AB50"/></svg></div></div>');
                  var squarePlacemark = new ymaps.Placemark(
                      [lat, lon], {
                          hintContent: 'Метка с прямоугольным HTML макетом'
                      }, {
                          iconLayout: squareLayout,
                          // Описываем фигуру активной области "Прямоугольник".
                          iconShape: {
                              type: 'Rectangle',
                              // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                              coordinates: [
                                  [lat, lon], [lat, lon]
                              ]
                          }
                      }
                  );
                  myMap.geoObjects.add(squarePlacemark);
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
