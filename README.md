# TechLux

Static frontend website for TechLux — Premium Garage Tile, Sports Tile, and Auto Parts.

## Project Structure

```
.
├── css/
│   ├── base.css
│   ├── components.css
│   ├── layout.css
│   └── pages.css
├── js/
│   ├── bundle.js
│   └── utils.js
├── products/
│   ├── air-filter.html
│   ├── control-cable.html
│   ├── garage-floor.html
│   ├── sports-floor.html
│   ├── tpms.html
│   └── wiper-blade.html
├── about.html
├── contact.html
├── index.html
└── vercel.json
```

## Local Preview

Any static file server works. For example:

```bash
npx serve .
```

## Deploy to Vercel

Push to a Git repository and import the project in the Vercel dashboard. No build step is required — `vercel.json` configures static hosting with clean URLs.
