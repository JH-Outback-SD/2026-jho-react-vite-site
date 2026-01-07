# Cloudflare Pages Setup Guide

This guide covers deploying the JHO Public Site (React + Vite + TypeScript) to Cloudflare Pages.

## Prerequisites

- A [Cloudflare account](https://dash.cloudflare.com/sign-up)
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Methods

### Method 1: Git Integration (Recommended)

1. **Log in to Cloudflare Dashboard**
   - Navigate to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Select **Workers & Pages** from the sidebar

2. **Create a New Project**
   - Click **Create application**
   - Select **Pages**
   - Click **Connect to Git**

3. **Connect Your Repository**
   - Authorize Cloudflare to access your Git provider
   - Select the `JHO-Public-Site` repository
   - Click **Begin setup**

4. **Configure Build Settings**

   | Setting | Value |
   |---------|-------|
   | **Project name** | `jho-public-site` (or your preferred name) |
   | **Production branch** | `main` |
   | **Root directory** | `public-site` |
   | **Framework preset** | `Vite` |
   | **Build command** | `pnpm run build` |
   | **Build output directory** | `dist` |

5. **Environment Variables (Build)**

   Add the following environment variable:

   | Variable | Value |
   |----------|-------|
   | `NODE_VERSION` | `20` |
   | `PNPM_VERSION` | `10` |

6. **Deploy**
   - Click **Save and Deploy**
   - Wait for the build to complete

### Method 2: Direct Upload (Wrangler CLI)

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate**
   ```bash
   wrangler login
   ```

3. **Build the Project**
   ```bash
   cd public-site
   pnpm install
   pnpm run build
   ```

4. **Deploy**
   ```bash
   wrangler pages deploy dist --project-name=jho-public-site
   ```

## Build Configuration Reference

### package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "serve": "vite preview",
    "test": "vitest run",
    "lint": "eslint . --max-warnings 0"
  }
}
```

### Output Structure

After building, the `dist` directory contains:
- `index.html` - Entry point
- `assets/` - Bundled JS, CSS, and static assets
- Static files from `public/`

## SPA Routing Configuration

Since this is a Single Page Application with React Router, you need to handle client-side routing. Create a `public-site/public/_redirects` file:

```
/*    /index.html   200
```

Or add a `public/_routes.json` file:

```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": ["/assets/*", "/images/*", "/*.svg", "/*.png", "/*.ico"]
}
```

## Custom Domain Setup

1. **Navigate to your Pages project** in Cloudflare Dashboard
2. Go to **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `www.yourdomain.com`)
5. Follow DNS configuration instructions

### DNS Records

If your domain is on Cloudflare:
- Cloudflare will automatically configure the CNAME record

If your domain is external:
- Add a CNAME record pointing to `<project-name>.pages.dev`

## Environment Variables

### Build-time Variables

Set in Cloudflare Pages Dashboard under **Settings > Environment variables**:

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_VERSION` | Node.js version | `20` |
| `PNPM_VERSION` | pnpm version | `10` |
| `VITE_*` | Vite env vars (exposed to client) | `VITE_API_URL` |

### Runtime Variables (if using Functions)

For Cloudflare Pages Functions, use:
- Dashboard: **Settings > Environment variables**
- Wrangler: `wrangler pages secret put SECRET_NAME`

## Preview Deployments

Cloudflare Pages automatically creates preview deployments for:
- Pull requests
- Non-production branches

Preview URLs follow the pattern:
```
<commit-hash>.<project-name>.pages.dev
```

## Build Caching

Cloudflare caches `node_modules` between builds. To clear the cache:
1. Go to **Settings > Builds & deployments**
2. Click **Clear cache and retry**

## Troubleshooting

### Build Fails with pnpm Error

Ensure `PNPM_VERSION` environment variable is set:
```
PNPM_VERSION=10
```

### 404 on Page Refresh

Add the `_redirects` file to handle SPA routing (see above).

### Assets Not Loading

Verify the build output directory is set to `dist` (not `build` or `public`).

### TypeScript Errors

The build command includes `tsc` for type checking. Fix all TypeScript errors before deploying or modify the build command:
```bash
vite build
```

## Monitoring & Analytics

1. **Web Analytics**
   - Enable in Cloudflare Dashboard under **Analytics**
   - Add the tracking snippet or use automatic injection

2. **Build Logs**
   - View in **Deployments** tab
   - Click any deployment to see build output

## Useful Commands

```bash
# Local development
pnpm dev

# Production build
pnpm build

# Preview production build locally
pnpm serve

# Run tests before deploy
pnpm test

# Lint check
pnpm lint

# Deploy via CLI
wrangler pages deploy dist
```

## Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#cloudflare-pages)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/)
- [Wrangler CLI Reference](https://developers.cloudflare.com/workers/wrangler/)
