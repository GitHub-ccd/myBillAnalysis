# myBillAnalysis

Minimal Next.js single-page boilerplate intended for static export and hosting on GitHub Pages.

Quick start:

1. Install dependencies: `npm install`
2. Dev server: `npm run dev`
3. Build: `npm run build`
4. Export static files: `npm run export` (this creates the `out/` folder)
5. Deploy `out/` to GitHub Pages (use the provided GitHub Action or publish `out/` to the `gh-pages` branch).

Notes:

- GitHub Pages only supports static files. For full Next.js features (server rendering, API routes), deploy to Vercel or another Node-capable host.
- When using `next export` avoid `getServerSideProps` or other server-only features.

Automatic deployment:
- The repository includes a GitHub Actions workflow that builds the site and deploys the `out/` folder to the `gh-pages` branch on pushes to `main`.

Local deploy (alternative):
- Install the `gh-pages` package: `npm i -D gh-pages`
- Add scripts:
  - `predeploy`: `npm run build && npm run export`
  - `deploy`: `gh-pages -d out`
- Then run `npm run deploy` to publish `out/` to the `gh-pages` branch from your machine.