# Vedanga Infratech — Website

The public marketing website for Vedanga Infratech (Goa, India) — a plain static HTML/CSS/JS site with **no build step**. Open any `.html` file in a server or push the folder as-is to GitHub Pages.

## Run locally

Any static file server works, e.g.:

```
python3 -m http.server 8000
```

then open http://localhost:8000. (Opening `index.html` directly via `file://` also works — nothing here requires a server, though a few browsers restrict `fetch`/module features over `file://`; this site uses neither.)

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In the repo settings, under **Pages**, set the source to the `main` branch, root folder.
3. The site will be published at `https://<username>.github.io/<repo>/`.

No build, no `npm install`, no CI step required.

## Structure

- `index.html`, `about.html`, `businesses.html`, `manufacturing.html`, `roofing.html`, `pipes.html`, `contact.html`, `terms.html`, `privacy.html` — one self-contained page per route. Header/footer markup is duplicated across pages by design (no server-side includes), so a copy in every file works when opened directly from disk.
- `assets/css/style.css` — theme variables (colors, fonts) and small custom utilities (fade-in, FAQ accordion, sticky header transition).
- `assets/js/tailwind-config.js` — Tailwind CDN theme config (must load after the `cdn.tailwindcss.com` script tag, before `main.js`).
- `assets/js/main.js` — all page behavior: sticky auto-hiding header, mobile nav, scroll-to-top, scroll-triggered fade-ins, FAQ accordions, and the contact form's WhatsApp redirect.
- `assets/icons/` — favicon/apple-touch-icon variants generated from the brand logo.
- `assets/images/` — downloaded photography; see `assets/images/CREDITS.md` for source/license/attribution per file.

Tailwind is loaded via the CDN JIT build (`cdn.tailwindcss.com`) rather than a local build pipeline, so utility classes are compiled in-browser — keeping this a genuinely zero-build static site at the cost of a small runtime dependency on that CDN (and on `unpkg.com` for the Lucide icon set).
