# Fashion E-Commerce Website

## Overview
A modern fashion e-commerce website built with React, TypeScript, and Vite. Features a responsive design with high-quality product images across multiple categories.

## Recent Updates (October 30, 2025)

### GitHub Pages Configuration
- Configured Vite for GitHub Pages deployment with `base: '/'` for root directory
- Updated server to run on port 5000 with host `0.0.0.0` for Replit compatibility
- Created automated GitHub Actions workflow (`.github/workflows/deploy.yml`) for continuous deployment
- Added `build:gh-pages` script for manual GitHub Pages builds
- See `DEPLOYMENT.md` for detailed deployment instructions

### Product Catalog Enhancement
Expanded product catalog from 8 to 30 items with high-quality stock images:

**Categories (5 items each):**
1. **Women** - Evening dresses, cocktail dresses, maxi dresses
2. **Men** - Business shirts, Oxford shirts, polo shirts, dress shirts
3. **Outerwear** - Blazers, sport jackets, winter coats, bomber jackets, trench coats
4. **Tops** - Silk blouses, tank tops, casual t-shirts, sweaters
5. **Kids** - Graphic tees, hoodies, denim jackets, activewear
6. **Accessories** - Designer watches, sunglasses, handbags, belts, scarves

All products feature:
- Professional high-quality images
- Detailed descriptions
- Multiple size options
- Color variations
- Competitive pricing

## Project Structure
- `/src/data/products.ts` - Product catalog with 30 items
- `/attached_assets/stock_images/` - High-quality product images
- `/.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `/vite.config.ts` - Vite configuration with @assets alias

## Development

### Running Locally
```bash
npm run dev
```
The app runs on `http://localhost:5000`

### Building for Production
```bash
npm run build
```

### GitHub Pages Deployment
```bash
npm run build:gh-pages
```

## Technical Stack
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS + shadcn/ui components
- React Router for navigation
- Radix UI primitives
- High-quality stock images

## Configuration
- Vite configured with `@assets` alias pointing to `attached_assets` directory
- Server configured for Replit environment (0.0.0.0:5000)
- GitHub Pages ready with automated deployment workflow
