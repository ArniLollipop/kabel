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
        <script
          dangerouslySetInnerHTML={{
            __html: `
             
              function getMap(lat, lon){
                ymaps.ready(init);
                function init() {
                  var myMap = new ymaps.Map("map", {
                    center: [lat, lon],
                    zoom: 7,
                  });
                }
              }
              let lon2, lat2;
              function getMap2(lat, lon) {
                
                var myPlacemark,
        myMap = new ymaps.Map('map1', {
            center: [43.2446, 76.9114],
                  zoom: 7,
        }, {
            searchControlProvider: 'yandex#search'
        });

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
                    //сорри я не хотел меня заставили писать это говно, если будет вопрос пиши на телегу @ArniL, но оно работает
                    console.log(res.geometry.getCoordinates(), res.properties._data.address); // получаем адрес найденной точки
                    
                    document.getElementById("address").value = res.properties._data.address;
                    document.getElementById("latitude").value = res.geometry.getCoordinates()[0];
                    document.getElementById("lontitude").value = res.geometry.getCoordinates()[1];

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
