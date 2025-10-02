# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

This repository is set up for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Push your code to GitHub** (if not already done)
2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
3. **Push to main branch**:
   - The workflow will automatically trigger
   - Your site will be deployed to `https://yourusername.github.io/your-repo-name`

### Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Commit the `/out` folder**:
   ```bash
   git add out/
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Configure GitHub Pages**:
   - Go to repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Select "/out" folder (this option should now appear)

## Troubleshooting

- If you don't see the "/out" option in GitHub Pages settings, make sure you've run `npm run build` and committed the `/out` folder
- The GitHub Actions workflow will handle this automatically
- Your site will be available at `https://yourusername.github.io/your-repo-name`

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `/out` folder with your domain
2. Configure your domain's DNS to point to GitHub Pages
