# Perfect Temp Landing Page

A high-converting landing page for Perfect Temp - Refrigeration, Heating & Air Conditioning / Appliances & Repair in Edmonton, AB.

## Features

- **Mobile-first responsive design** with Tailwind CSS
- **High performance** - optimized for Lighthouse scores > 95
- **WCAG AA accessible** with proper semantic HTML and ARIA labels
- **SEO optimized** with JSON-LD LocalBusiness schema
- **Conversion focused** with multiple CTAs and sticky mobile elements
- **Modern UI** with smooth animations and hover effects

## Tech Stack

- Next.js 14 with App Router
- React 18
- TypeScript
- Tailwind CSS
- Custom brand colors and components

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add the logo file:**
   - Place `perfect-temp-logo-transparent.png` in the `public/` directory
   - The logo should be a transparent PNG for best results

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── globals.css             # Global styles and brand colors
│   ├── layout.tsx              # Root layout with SEO meta tags
│   └── page.tsx                # Main landing page
├── components/
│   ├── Header.tsx              # Sticky navigation header
│   ├── Hero.tsx                # Hero section with quick quote
│   ├── BadgeStrip.tsx          # Trust badges section
│   ├── Services.tsx            # Services grid
│   ├── About.tsx               # About us section
│   ├── HoursArea.tsx           # Hours and service area
│   ├── Reviews.tsx             # Customer reviews
│   ├── Contact.tsx             # Contact form
│   ├── Footer.tsx              # Footer with links
│   └── StickyCta.tsx           # Mobile sticky CTAs
├── lib/
│   └── hours.ts                # Business hours utility functions
└── public/
    └── perfect-temp-logo-transparent.png
```

## Brand Colors

The landing page uses custom CSS variables for brand colors:

- `--brand-blue: #1f69c9`
- `--brand-blue-dark: #0f4ea8`
- `--brand-red: #c62828`
- `--brand-red-dark: #a31f1f`

## Key Features

### Conversion Optimization
- Multiple call-to-action buttons throughout the page
- Sticky mobile CTA bar with Call and Message buttons
- Floating "Call Now" button that appears after scrolling
- Quick quote form in hero section
- Prominent phone number: (780) 655-5017

### Performance
- Optimized images and lazy loading
- Minimal JavaScript bundle
- CSS-only animations where possible
- System font stack for fast loading

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Focus rings for keyboard navigation
- High contrast colors
- Screen reader friendly

### SEO
- JSON-LD LocalBusiness schema
- Optimized meta tags
- Structured data for local business
- Mobile-friendly design

## Customization

### Colors
Update the CSS variables in `app/globals.css` to change brand colors.

### Content
All text content is in the component files and can be easily updated.

### Contact Form
The contact form posts to `/api/contact` - update the endpoint to integrate with your preferred service.

### Business Hours
Update the hours in `lib/hours.ts` to match your business schedule.

## Deployment

This is a standard Next.js application and can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting provider

## License

This project is created for Perfect Temp. All rights reserved.
