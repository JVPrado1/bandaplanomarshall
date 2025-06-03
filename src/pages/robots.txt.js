export async function GET() {
  const robots = `User-agent: *
Allow: /
Crawl-delay: 1

# Sitemap
Sitemap: https://bandaplanomarshall.com.br/sitemap.xml

# Bloquear arquivos desnecessários para SEO
Disallow: /src/
Disallow: /.astro/
Disallow: /node_modules/
Disallow: *.json$`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
