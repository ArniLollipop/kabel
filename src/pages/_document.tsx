import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="shortcut icon" href="/Logo.svg" />
        <link rel="icon" href="/Logo.svg" />
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
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WL848M3');`,
          }}
        />
      </Head>
      <body>
        
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL848M3"
        height="0" width="0" style={{display:'none', visibility:'hidden' }}></iframe></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
