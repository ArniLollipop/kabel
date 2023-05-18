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
