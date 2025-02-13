exports.onPostBuild = () => {
  const fs = require('fs')

  /*
   * If sitemap exists in /public/sitemaps folder, move sitemap-0.xml
   * to root folder (/public) & rename to sitemap-docs.xml
   */
  if (fs.existsSync('./public/sitemaps/sitemap-0.xml')) {
    fs.renameSync(
      './public/sitemaps/sitemap-0.xml',
      './public/sitemap-docs.xml'
    )

    /* Remove the /public/sitemaps folder */
    fs.rmSync('./public/sitemaps', { recursive: true, force: true })
  }
}
