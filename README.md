# 🇳🇵 With Nepal, Through the Storm

**A quiet message from around the world.**

A respectful humanitarian website expressing solidarity with people and communities affected by flooding in Nepal.

This project is intentionally designed as a calm, human-centred editorial experience rather than a commercial campaign or disaster-news portal.

## Purpose

The website brings together:

- empathy for affected families and communities
- responsible flood-awareness guidance
- community solidarity
- responsible information sharing
- verified support resources
- a message of hope and recovery

The project avoids graphic imagery, sensational language, fabricated statistics, and unverified emergency claims.

## Features

- Full-screen editorial hero
- Five-image Nepal photography sequence
- Automatic hero carousel
- Human-impact storytelling
- Community and recovery sections
- Responsible support guidance
- Verified external resource links supplied for the project
- Responsive desktop, tablet and mobile layouts
- Keyboard-accessible navigation
- Reduced-motion support
- Progressive enhancement
- PWA manifest
- Service worker and offline caching
- Installable app icons
- No analytics or tracking
- No visitor data collection
- Local fonts and local assets
- Works as a static website

## Technology

This is deliberately a simple static project:

- HTML5
- CSS3
- JavaScript
- jQuery

There is no React, Vue, Angular, Node build step, or package installation requirement.

## Project structure

```text
.
├── index.html
├── manifest.json
├── sw.js
├── .htaccess
├── README.md
│
├── assets/
│   └── icons/
│       ├── icon-192.png
│       ├── icon-512.png
│       └── icon-512-maskable.png
│
├── css/
│   └── style.css
│
├── js/
│   ├── jquery-3.7.1.min.js
│   └── script.js
│
├── images/
│   ├── 01-storm.jpg
│   ├── 02-community.jpg
│   ├── 03-volunteers.jpg
│   ├── 04-after-storm.jpg
│   └── 05-sunrise.jpg
│
└── fonts/
    ├── EB Garamond
    └── Gillius ADF
```

## Run locally

Because this is a static website, the main page is:

```text
index.html
```

For the normal website experience, it can be opened directly in a browser.

For PWA/service-worker testing, use a local HTTPS server or `localhost`.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

PWA installation is normally unavailable when opening the page directly with `file://` because browsers restrict service workers to secure contexts.

## GitHub Pages

This project is suitable for GitHub Pages because it is a static website.

Recommended repository settings:

1. Push the project files to a GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Select the main branch and `/ (root)`.
5. Save the configuration.
6. Open the GitHub Pages URL after deployment.

GitHub Pages provides HTTPS, which allows the service worker and PWA features to operate in supported browsers.

## Progressive Web App

The project includes:

- `manifest.json`
- `sw.js`
- installable icons
- offline caching
- cached homepage fallback

The service worker caches local website resources and provides the cached homepage when a navigation request cannot reach the network.

The core site does not depend on the service worker. If service-worker support is unavailable, the normal website remains usable.

## Accessibility

The project includes:

- semantic HTML
- descriptive image alternatives
- keyboard navigation
- visible focus states
- accessible carousel controls
- responsive typography
- reduced-motion support

When `prefers-reduced-motion: reduce` is enabled, unnecessary animation and automatic carousel movement are reduced/disabled.

## Privacy

This project intentionally does not include:

- analytics
- advertising
- visitor tracking
- tracking pixels
- newsletter collection
- unnecessary cookies
- personal-data collection

## Security

The project uses a restrictive Content Security Policy and security-conscious external links.

External links use:

```html
target="_blank"
rel="noopener noreferrer"
```

The project does not use:

- `eval()`
- unsafe dynamic script injection
- unnecessary third-party scripts
- unknown runtime dependencies

### Hosting note

The included `.htaccess` contains Apache-oriented security configuration. GitHub Pages does **not** process `.htaccess` files.

For GitHub Pages, the site's static content remains functional, but server-level headers should be configured at the hosting layer when using a platform that supports them.

## Content responsibility

This is a solidarity and awareness project.

The website intentionally does not publish:

- casualty statistics
- fabricated flood statistics
- invented emergency numbers
- unverified government announcements
- unverified donation claims
- graphic depictions of suffering

Information that can change during an emergency should always be checked against current official or established sources before being acted upon or shared.

## External support resources

The website contains the following resources as supplied for this project:

- [Where to Donate](https://www.joinritmo.com/blog/where-to-donate-nepal-floods)
- [Nepal: Flash Floods 2026](https://www.ifrc.org/emergency/nepal-flash-floods-2026)
- [Save the Children: Nepal Flash Floods](https://www.savethechildren.net/donate/nepal-floods)

These links are provided as resources. Visitors should independently review the destination and verify information before making decisions.

## Design principle

> **Do less, but do it with care.**

The visual direction is intentionally restrained:

**Storm → Human impact → Compassion → Community → Action → Hope**

The website is designed to communicate dignity and solidarity without turning human suffering into a visual spectacle.

## License

No license has been assigned to this project yet.

If this repository is intended for public reuse, add an appropriate license before granting others permission to copy, modify, or redistribute the project.

## Disclaimer

This website is an independent solidarity and awareness project.

It is not an emergency-response authority and should not be treated as a substitute for current instructions from relevant official authorities.

---

**With Nepal, Through the Storm.**  
**A quiet message from around the world.**
