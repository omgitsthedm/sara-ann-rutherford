# Sara Ann Rutherford (Static HTML for Netlify)

This is a lightweight static HTML build intended for Netlify.

## Quick deploy
1. Drag-and-drop this folder (or the zip) into Netlify.
2. Set the Site Name + domain.
3. Update `https://example.com` placeholders in:
   - `sitemap.xml`
   - `robots.txt`
   - `<link rel="canonical">` tags in HTML files

## Images
This build references the existing Wix-hosted images (wixstatic URLs) for now.
If you want the site to be fully independent (recommended), replace image URLs with local files in:
`/assets/img/art/...`
