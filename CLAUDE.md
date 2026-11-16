# xoleigh.com — project notes

The home page for Leigh's small apps for friends and family. Live at https://xoleigh.com.

Read this first in any session working on this repo. Keep it current: when a decision changes, update this file in the same commit.

## Who it's for

Friends and family of all ages, mostly on iPhone and iPad, including people in their 80s. Large text and tap targets beat density. No jargon.

## How it's built

- Plain HTML/CSS/JS. No build step, no framework.
- GitHub Pages, deployed from `main`, root folder. `CNAME` holds `xoleigh.com`.
- DNS: four A records on `@` to GitHub Pages (185.199.108–111.153) and `www` CNAME to `leighwetzel.github.io`. The `walk` and `tv` subdomains point at their own repos; leave them alone.
- Cache-busting: bump the `?v=` number on any CSS, JS or image you change in `index.html` / `site.js`.

| File | What it does |
|---|---|
| `index.html` | The page |
| `style.css` | The look; phone layout is the `max-width: 760px` block at the bottom |
| `updates.js` | Release notes, newest first |
| `site.js` | Settings (Substack, Writing, how many updates) and renders the updates list |
| `images/` | App photos and app icons |

## Design (decided — don't drift)

Square newspaper style: newspaper type with square, graphic structure.

- **Type:** Playfair Display 900 for the "xoleigh" nameplate; Source Serif 4 for headlines and body; Libre Franklin for labels, buttons, dates.
- **Color:** black `#121212` and white, one accent: navy `#1F3A5F`. Pale tint `#EAF0F6`. Light text on navy `#D6E1EE`.
- **Header stays black** (nameplate and its rules). Navy is for labels, buttons and the sign-up box.
- **Square corners everywhere. No drop shadows.** Thick black outlines (3px desktop, 2px phone) on cards, photos and BETA tags. Buttons and the navy sign-up box have no outline (decided Nov 15, 2026: felt heavy). The Subscribe button inside the sign-up box spans the box's full width. Exception: app icons in Latest updates use the iOS app-icon corner (`border-radius: 22.5%`) with a thin 1.5px #CFCFCF outline so the white icons read on the white page (decided Nov 15, 2026).
- **Section labels** are black bars with white caps text ("THE APPS", "LATEST UPDATES").
- **Apps are the first thing on the page**, as two equal cards side by side on desktop, stacked full width on phone. Each card: photo, small tilted navy **BETA** tag, web address, name, subtitle, description, navy Open button.
- **Latest updates** rows: app icon + **app name** · date, then the update. Not text tags, not icon-only.
- **Sign-up box** sits to the right of Latest updates on desktop. Turned on Nov 15, 2026, linking to Leigh's Substack (@leighwetzel).
- **Footer:** "xoleigh" and the app names (linked), not URLs.
- Never refer to Leigh in the third person on the site (no "Leigh using…", no "By Leigh").

Directions tried and rejected: index cards, color tiles, Pocket-style, bright/playful shapes, Lush-style, Calm-style, Headspace-style (rounded corners). The design canvas with all of them: https://claude.ai/artifact/Q71bgoUPv5gq111vRFEZ8S

## Copy (current)

**Wiki Walk** — walk.xoleigh.com
- Subtitle: A walking tour in your pocket.
- Description: Built for our trip to France: see what's nearby and listen to the Wikipedia article as you walk by. Works offline, in English and French.
- Photo: tall shot of Leigh with her phone in a narrow street in Saint-Rémy-de-Provence (not Aix). Credit line: "Photo: Saint-Rémy-de-Provence".

**TV Rex** — tv.xoleigh.com (the app was renamed from "TV"; the address stays tv.)
- Subtitle: What we're all loving on TV.
- Description: Streaming recommendations shared among friends and family.
- Photo: wide living-room shot with a pretend dinosaur movie on the TV. No network logos on screen.

## Common tasks

**Add an update:** in `updates.js`, copy a line to the top, change date (YYYY-MM-DD), app ("Wiki Walk" or "TV Rex") and text. Write it the way you'd tell a relative, one short sentence. Bump `updates.js?v=` in `index.html`. Dates come from real ship dates (the app repos' commit history is a good source).

**Substack:** on. `substackUrl` in `site.js` is `https://leighwetzel.substack.com/subscribe`; it shows the Subscribe button (top bar) and the sign-up box. If the custom domain (write.xoleigh.com, one-time $50) gets set up, change that URL. Set `showWriting: true` once there's a post.

**Add a new app:** a third card in `.apps`, an icon in `images/`, an entry in `APP_ICONS` in `site.js`. Check the desktop layout still works with three cards.

## Related repos

- `leighwetzel/wiki-walk` → walk.xoleigh.com (root of repo). Icons in `icons/`.
- `leighwetzel/tv` → tv.xoleigh.com (served from `docs/`). Icon `docs/apple-touch-icon.png`.
- App icons come from those repos; keep them in sync when an app's icon changes.

## Open items

- Substack: sign-up is live (leighwetzel.substack.com). Still open: custom domain write.xoleigh.com, write the Wiki Walk story (a draft exists).
- "Read the story" links stay hidden until a story exists.
- App pages (one per app with its own Updates list) were designed on the canvas but not built.
- No favicon yet.

## Analytics
Google Analytics loads through the Google tag `GTM-K6GPQTLB` (added Nov 16, 2026), pasted at the top of `<head>` in `index.html`. One GA4 stream covers xoleigh.com and the walk/tv subdomains; keep the same tag on all three.
