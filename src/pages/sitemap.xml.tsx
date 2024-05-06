import { useHttp } from "@/hooks/useHttp";
import { GetServerSideProps } from "next";

export default function Sitemap() {}

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
	ctx.res.setHeader("Content-Type", "text/xml");
	const xml = await generateSitemap();
	ctx.res.write(xml);
	ctx.res.end();

	return {
		props: {},
	};
};

async function generateSitemap(): Promise<string> {
	const pages = await useHttp().get("/products/products/all_products/");
	const news = await useHttp().get("/news/all_news/");

	console.log(news.data);

	return `
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pages.data.map((page: any) => {
				return `
          <url>
            <loc>${
							"https://cable.kz/catalog/" +
							page.subcategory_slug +
							"/" +
							page.code
						}</loc>
            <lastmod>2023-08-31T10:38:12+00:00</lastmod>
            <priority>1.00</priority>
          </url>
        `;
			})}
      ${news.data.map((news: any) => {
				return `
          <url>
            <loc>https://cable.kz/news/${news.id}</loc>
            <lastmod>2023-08-31T10:38:12+00:00</lastmod>
            <priority>0.80</priority>
          </url>
        `;
			})}
      <url>
        <loc>https://cable.kz/</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://cable.kz/card</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://cable.kz/auth</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://cable.kz/about</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://cable.kz/catalog</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://cable.kz/services</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://cable.kz/news</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://cable.kz/pay-del/payment</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://cable.kz/contacts</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://cable.kz/cabinet/profile</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://cable.kz/politics</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://cable.kz/cabinet/orders</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://cable.kz/services/weight</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://cable.kz/services/section</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://cable.kz/services/encoding</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://cable.kz/pay-del/delivery</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://cable.kz/cabinet/delivery</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://cable.kz/cabinet/bonuses</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://cable.kz/cabinet/currency</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://cable.kz/cabinet/support</loc>
        <lastmod>2023-08-31T10:38:12+00:00</lastmod>
        <priority>0.64</priority>
      </url>
    </urlset>
  `;
}
