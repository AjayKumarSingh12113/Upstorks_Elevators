import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const hostname = 'https://upstorks-elevators.vercel.app';
const sitemap = new SitemapStream({ hostname });
const routes = ['/', '/about', '/services', '/projects', '/contact', '/popup'];

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

routes.forEach(route => {
  sitemap.write({
    url: route,
    changefreq: 'weekly',
    priority: route === '/' ? 1.0 : 0.8
  });
});

sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log('✅ sitemap.xml generated in public folder!'))
  .catch(err => console.error(err));
