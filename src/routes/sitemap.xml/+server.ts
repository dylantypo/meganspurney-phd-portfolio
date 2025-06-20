export async function GET() {
  const baseUrl = 'https://meganspurney.com';
  const lastmod = new Date().toISOString().split('T')[0];
  
  const urls = [
    { loc: baseUrl, priority: '1.0', changefreq: 'monthly' },
    { loc: `${baseUrl}/#about`, priority: '0.9', changefreq: 'yearly' },
    { loc: `${baseUrl}/#research`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${baseUrl}/#posters`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/#publications`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/#resume`, priority: '0.7', changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${url.priority}</priority>
    <changefreq>${url.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=86400'
    }
  });
}