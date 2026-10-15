# Step 08 — whole-site QA

Local preview only. This is not a launch check. No inquiry is sent or stored.

## Changed files

- `index.html` — the homepage insights note no longer calls the guides a future section. It links to `/insights/`. The three concept cards are unchanged.
- `contact/index.html` — the header “Talk to our team” control goes to `#inquiry` on this page. The shorter duplicate dialog was removed so Contact has one form.
- `css/styles.css` — the new homepage Insights link uses the existing teal underline treatment.
- `internal/step-08-qa.md` — this report.

No new public pages. No deployment, hosting, or DNS changes.

## Inquiry mode

**Preview only.** There is no verified backend, recipient, or mail provider.

Contact page and the inquiry dialogs on the other six pages validate locally. Success copy is “Preview validated. Nothing was sent.” The contact form also shows “Preview only. No inquiry is sent.” and its button is “Preview inquiry.”

Checked in the browser: a valid contact submit made no request and wrote nothing to `localStorage` or `sessionStorage`. Entered values stayed in the fields after both a failed and a successful validation.

Live delivery was not tested. Do not describe the site as able to receive inquiries.

Supported query context, fields left editable:

- `/contact/?client=exchange` selects Exchange
- `/contact/?client=token-issuer` selects Token Issuer
- `/contact/?service=market-making` shows “Selected service: Market Making”
- Unknown values, including an email in the query string, are ignored

Dialogs that already pass context still do:

- Market Making buttons set “Selected service: Market Making”
- Who We Serve buttons set Exchange or Token issuer

## Checks run

| Check | Result |
| --- | --- |
| Seven routes return HTTP 200 with a trailing slash | Pass |
| `/contact`, `/firm`, and `/services/market-making` without a slash redirect to the slash form | Pass |
| One `h1`, a title, and a meta description on each route | Pass |
| In-page hash targets exist | Pass |
| Horizontal overflow at 360, 390, 768, 1024, and 1440 | Pass, 0 px |
| Root font size at 200% on home, Who We Serve, Contact, Insights, and Market Making | Pass, no overflow |
| Console exceptions and responses at HTTP 400 or higher during the smoke pass | Pass, none |
| Footer Contact link on all seven pages | Pass |
| Current-page marker in the header, except Contact, which is only in the footer | Pass |
| Mobile menu opens, Escape closes it, and a nav link leaves the page | Pass |
| Back and forward between Home and The Firm | Pass |
| Home inquiry dialog, preview success, no send | Pass |
| Insights reader opens, Escape/close returns focus to “Read the guide” | Pass |
| Contact empty-field error, `aria-invalid`, first-field focus, Gmail address accepted | Pass |
| `prefers-reduced-motion` rule present | Pass |
| Build, typecheck, lint, Lighthouse, or other performance scores | Not run — this project has no package script or test runner |
| Delivery to a real inbox | Not run |

Header is not sticky, so hash targets are not covered by a fixed bar. Contact `#inquiry` and the other in-page anchors keep a small scroll margin.

There are no raster images. Lazy-loading and hero-image sizing were not applicable. Illustrations are inline SVG and are labeled when they could be read as market data.

No canonical URL, social image, or organization schema was added. No production domain is confirmed.

## Route coverage

Desktop (1440) and mobile (390), plus the widths above:

- `/` Home
- `/services/market-making/` Market Making
- `/who-we-serve/` Who We Serve
- `/approach/` Our Approach
- `/firm/` The Firm
- `/insights/` Insights
- `/contact/` Contact

Screenshots of the local home and contact pages were reviewed at desktop and mobile during this pass. They are not launch evidence.

## Remaining blockers

Names only. No secret values exist in the project.

- Approved company name and domain
- Legal entity name and jurisdiction
- Official email, phone, or address
- Verified inquiry recipient and delivery path
- Approved privacy notice, before any consent checkbox or legal link
- Confirmed leadership names, roles, biographies, and portraits
- Registration or license claims, only with an official source

The homepage firm block still says legal entity, registered location, and leadership are “To be supplied.” That is a placeholder, not a fact. It was left in place and recorded here rather than replaced with a new claim. The Firm page does not show a counterparty panel.

No legal, privacy, or social destination is linked, because none is verified.

## Not ready for live inquiries

Presentation QA above is separate from operating readiness. The site is a design concept. Preview validation is not a received inquiry.
