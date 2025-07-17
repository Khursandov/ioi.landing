export default defineEventHandler((event) => {
  const robotsTxt = `
        User-agent: *
        Disallow:
        Sitemap: ${process.env.SITE_URL}/sitemap.xml
    `;

  event.node.res.setHeader("Content-Type", "text/plain");
  event.node.res.end(robotsTxt.trim());
});
