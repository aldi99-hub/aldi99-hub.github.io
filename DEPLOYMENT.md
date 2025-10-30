# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages at the root directory (/).

## Automatic Deployment

A GitHub Actions workflow is set up at `.github/workflows/deploy.yml` that automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Navigate to **Pages** in the left sidebar
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **The workflow will automatically:**
   - Build your project using `npm run build:gh-pages`
   - Deploy the `dist` folder to GitHub Pages
   - Your site will be available at `https://<username>.github.io/<repository-name>/`

## Manual Build

To build the project locally for GitHub Pages:

```bash
npm run build:gh-pages
```

This will create a production build in the `dist` folder with the base URL set to `/` (root directory).

## Vite Configuration

The `vite.config.ts` is already configured with:
- `base: '/'` - Sets the base path to root directory for GitHub Pages
- `host: "0.0.0.0"` - Allows external access (for Replit preview)
- `port: 5000` - Default development server port

## Preview Locally

After building, you can preview the production build:

```bash
npm run preview
```

## Troubleshooting

If your site doesn't load correctly:
1. Verify GitHub Pages is enabled in repository settings
2. Check that the workflow ran successfully in the **Actions** tab
3. Ensure your repository is public or you have GitHub Pro for private repo pages
4. Wait a few minutes after the workflow completes for changes to propagate
