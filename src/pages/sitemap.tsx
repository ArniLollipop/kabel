/** @format */

import { useHttp } from "@/hooks/useHttp";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function sitemap(props: any) {
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: props.html }}></div>
		</div>
	);
}

export default sitemap;

export async function getServerSideProps() {
	const pages = await useHttp().get("/products/products/all_products/");
	const news = await useHttp().get("/news/all_news/");

	let first = "";
	let second = "";

	pages.data.map((page: any) => {
		first += `
  <li>
    <a href="${"https://cable.kz/" + page.subcategory_slug + "/" + page.code}">
      ${"/" + page.subcategory_slug + "/" + page.code}
    </a>
  </li>`;
	});

	news.data.map((news: any) => {
		second += `<li>
    <a href="https://cable.kz/news/${news?.id}">
      ${"/news/" + news.id}
    </a>
  </li>`;
	});

	const html = `
<style type="text/css">
		* {box-sizing: border-box !important;}html {font-family: sans-serif;}body { background:#fff; max-width:1024px; margin:0 auto; padding:5px; font: 14px "Arial", Tahoma, sans-serif; min-height: 100%; }h1 { font-size: 26px; }div.footerinfo { margin-top:16px; color:#666; font-size:12px; text-align:right; }div.footerinfo * { font-size:12px; }.sitemap{margin:5em 0}.primaryNav{clear:both;width:100%;margin-top:3em 0}.primaryNav #home{position:absolute;margin-top:-3em;margin-bottom:0;min-width:14.5em;width:100%}.primaryNav #home:before{display:none}.primaryNav #home.long-cell:before{display:block;position:absolute;border-width:0;border-color:#ccc;border-style:solid;z-index:-1;border-left-width:2px;border-top-width:2px;top:1.375em}@media screen and (max-width:1111px){.primaryNav #home.long-cell:before{left:-40px;box-shadow:-10px 0 0 0 #fff}}.primaryNav #home img{float:left;margin-right:4px}.primaryNav ul{display:flex;flex-wrap:wrap;list-style:none;position:relative;}.primaryNav li{flex:1;flex-basis:14.5em;padding-right:1.25em;position:relative;min-width:14.5em}.primaryNav li ul li{min-width:12.5em}.primaryNav li ul li ul li{min-width:10.5em}.primaryNav>ul>li{margin-top:3em}.primaryNav li a{margin:0;padding:.875em .9375em .9375em .9375em;display:block;font-size:.9375em;background:#fff;border:1px solid #ccc;border-radius:3px;box-shadow:0 3px 3px #666;text-decoration:none}.primaryNav li a:hover{box-shadow:0 3px 3px 1px #666}.primaryNav a:link:after,.primaryNav a:visited:after,.utilityNav a:link:after,.utilityNav a:visited:after{display:block;font-weight:600;font-size:.75em;margin-top:.25em;word-wrap:break-word;color:#666}.primaryNav ul ul{display:block}.primaryNav ul ul li{padding-top:.9875em;padding-right:0}.primaryNav ul ul li:first-child{padding-top:2em}.primaryNav ul ul ul{margin-top:.6em;padding-top:.6em;padding-bottom:.625em}.primaryNav ul ul ul li{padding-top:.3125em;}.primaryNav ul ul ul li a{font-size:.75em;padding:.75em;min-width:90%;width:auto;margin-right:0;margin-left:auto}.primaryNav ul ul ul li:first-child{padding-top:1em}.primaryNav ul ul ul li a:link:after,.primaryNav ul ul ul li a:visited:after{font-size:.75em}.primaryNav ul ul ul ul{margin-top:0;padding-top:.3125em;padding-bottom:.3125em}.primaryNav ul ul ul ul li a{padding:.75em;min-width:80%;width:auto}.primaryNav ul ul ul ul li a:link:after,.primaryNav ul ul ul ul li a:visited:after{display:none}.primaryNav ul li:after,.primaryNav ul li:before,.primaryNav ul:after,.primaryNav ul:before{display:block;content:'';position:absolute;border-width:0;border-color:#ccc;border-style:solid;z-index:-2;}.primaryNav>ul>li:before{height:1.375em;top:-1.375em;right:calc(50% + .625em);width:calc(100% - 2px);border-top-width:2px;border-right-width:2px}.primaryNav>ul>li:first-child+li:before{border-top-width:0;height:5em;top:-5em}.primaryNav ul ul li:after{width:50%;height:.9875em;top:0;right:1px;border-left-width:2px}.primaryNav ul ul li:first-child:before{width:50%;height:1.3125em;top:.9875em;right:1px;border-left-width:2px}.primaryNav>ul>li:last-child:after{border-bottom-width:0}.primaryNav ul ul ul li:before{width:calc(50% - 15px)!important;height:calc(100% - 2px);top:-50%;left:0;border-left-width:2px;border-bottom-width:2px}.primaryNav ul ul ul li:first-child:before{height:2.125em;top:-1px;border-top-width:2px}.primaryNav ul ul ul:before{width:50%;height:1.25em;top:-10px;right:1px;border-left-width:2px}.primaryNav ul ul ul li:after{border-width:0}.primaryNav ul ul ul ul li:before,.primaryNav ul ul ul ul li:first-child:before{display:none}.primaryNav ul ul ul ul:before{width:1px;height:calc(100% + 2.5em);top:-2.5em;left:0;border-left-width:2px}@media screen and (max-width:30em){.primaryNav ul{display:block}.primaryNav li{width:100%;padding-right:0}.primaryNav #home{width:100%;position:relative;margin-bottom:-1em;margin-top:0}}@media screen and (min-width:30em){.primaryNav>ul>li{max-width:50%}}@media screen and (min-width:38.5em){.primaryNav>ul>li{max-width:33%}}@media screen and (min-width:50em){.primaryNav>ul>li{max-width:25%}}@media screen and (min-width:61em){.primaryNav>ul>li{max-width:20%}}@media screen and (min-width:73em){.primaryNav>ul>li{max-width:16.66%}}@media screen and (min-width:84.5em){.primaryNav>ul>li{max-width:14.285%}}@media screen and (min-width:96em){.primaryNav>ul>li{max-width:12.5%}}@media screen and (min-width:107.5em){.primaryNav>ul>li{max-width:11.11%}}@media screen and (min-width:119em){.primaryNav>ul>li{max-width:10%}}a[href$="#"]{cursor:default;color:#333}.collapsed_item{display:none!important;cursor:pointer!important}.expand_items a{color:#333!important;text-align:center;cursor:pointer!important}a[href$="#"]:not(.collapsed_item,.expand_items a):before{content:"#"}
		</style>
<h1>Sitemap</h1><script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
		       <script src="https://cdn.mysitemapgenerator.com/api/htmlsitemaps.min.js"></script>
		       <div class="sitemap"><nav class="primaryNav"><ul><li id="home"><a href="https://cable.kz/"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjUxMHB4IiBoZWlnaHQ9IjUxMHB4IiB2aWV3Qm94PSIwIDAgNTEwIDUxMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEwIDUxMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9ImhvbWUiPg0KCQk8cG9seWdvbiBwb2ludHM9IjIwNCw0NzEuNzUgMjA0LDMxOC43NSAzMDYsMzE4Ljc1IDMwNiw0NzEuNzUgNDMzLjUsNDcxLjc1IDQzMy41LDI2Ny43NSA1MTAsMjY3Ljc1IDI1NSwzOC4yNSAwLDI2Ny43NSANCgkJCTc2LjUsMjY3Ljc1IDc2LjUsNDcxLjc1IAkJIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" width="16" height="16" alt="homepage" /> Home page</a></li>
<li><a href="https://cable.kz/catalog">Каталог товаров | Almaty Kazkabel</a></li>

           <li><a href="https://cable.kz/card">Корзина покупок | Almaty Kazkabel</a></li>
<li><a href="https://cable.kz/auth">Авторизация | Almaty Kazkabel</a></li>
<li><a href="https://cable.kz/about">О компании | Almaty Kazkabel</a></li>
<ul>
${first}
</ul>
<div style="position: relative; margin: 2em;">


<li><a href="#" onclick="return false">Services</a><ul>
<li><a href="https://cable.kz/services/weight">services/weight</a></li>
<li><a href="https://cable.kz/services/section">services/section</a></li>
<li><a href="https://cable.kz/services/encoding">services/encoding</a></li>
</ul>
</div>
</li>
<div style="position: relative; margin: 2em;">
<li><a href="https://cable.kz/news">Новости компании | Almaty Kazkabel</a></li>
<ul>
${second}
</ul>
</div>
<li><a href="#" onclick="return false">Pay-del</a><ul>
<li><a href="https://cable.kz/pay-del/payment">Способы оплаты | Almaty Kazkabel</a></li>
<li><a href="https://cable.kz/pay-del/delivery">Способы доставки | Almaty Kazkabel</a></li>
</ul>
</li>
<li><a href="https://cable.kz/contacts">Контакты компании | Almaty Kazkabel</a></li>
<li><a href="#" onclick="return false">Cabinet</a><ul>
<li><a href="https://cable.kz/cabinet/profile">Мой профиль | Almaty Kazkabel</a></li>
<li><a href="https://cable.kz/cabinet/orders">Мои заказы | Almaty Kazkabel</a></li>
<li><a href="https://cable.kz/cabinet/delivery">Адреса достаки | Almaty Kazkabel</a></li>
<li><a href="https://cable.kz/cabinet/bonuses">Мои бонусы | Almaty Kazkabel</a></li>
<li><a href="https://cable.kz/cabinet/currency">Курс валюты и Лондонская бирда металлов | Almaty Kazkabel</a></li>
<li class="collapsed_item"><a href="https://cable.kz/cabinet/support">Частые вопросы и поддержка | Almaty Kazkabel</a></li>
<li class="expand_items"><a href="#"> &#x25BC; </a></li>
</ul>
</li>
<li><a href="https://cable.kz/politics">Политика конфиденциальности и Условия использования сайта Almaty Kazkabel</a></li>
</ul>
</nav>
			</div>
		</div>`;

	return {
		props: {
			html,
		},
	};
}
