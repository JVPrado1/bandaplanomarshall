export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Página Principal -->
  <url>
    <loc>https://bandaplanomarshall.com.br/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    
    <!-- Imagens importantes para SEO -->
    <image:image>
      <image:loc>https://bandaplanomarshall.com.br/banda.webp</image:loc>
      <image:title>Plano Marshall - Banda de Rock</image:title>
      <image:caption>Banda de Rock Plano Marshall de Jaú, SP</image:caption>
    </image:image>
    
    <image:image>
      <image:loc>https://bandaplanomarshall.com.br/logo-banda.png</image:loc>
      <image:title>Logo Plano Marshall</image:title>
      <image:caption>Logo oficial da banda Plano Marshall</image:caption>
    </image:image>
  </url>
  
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
