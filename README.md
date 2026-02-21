# Kapzo Bioactives

A modern website for Kapzo Bioactives - providing comprehensive bioactive ingredient solutions for food, nutraceutical, cosmetic, and pharmaceutical industries.

## Features

- **Multi-page website** with Home, About, Products, Industries, and Contact pages
- **Dark mode support** with persistent user preference
- **Responsive design** - works seamlessly on desktop, tablet, and mobile
- **Co-founder profiles** with direct contact information
- **Product & Industry showcase** with detailed information
- **Smooth routing** with React Router

## Tech Stack

- **React 19** - UI framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **CSS3** - Styling with CSS variables for theme support
- **JavaScript (ES6+)** - Modern JavaScript

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kapzobio
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5174`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

## Deployment

Deploy to Cloudflare Pages:
```bash
npm install -g wrangler
wrangler login
wrangler pages deploy dist
```

## Project Structure

```
src/
├── components/          # Reusable components (Header, Hero, etc.)
├── pages/              # Full page components (Products, Industries, Contact)
├── context/            # React Context (DarkModeContext)
├── assets/             # Images and static files
├── App.jsx             # Main app component with router
└── App.css             # Global styles with CSS variables

public/
└── assets/             # Static assets (logos, images)
```

## Pages

- **Home** - Landing page with hero, products, industries, and why choose section
- **About** - Company information, mission, and vision
- **Products** - Detailed product categories with descriptions
- **Industries** - Industry-specific solutions
- **Contact** - Meet our co-founders section

## Co-Founders

- **Dr. Arun Kasturi** - MBBS
  - Email: arun@kapzobioactives.com
  - Phone: +91 6383981422

- **Kishore Kasturi** - B.Tech, IIT BHU
  - Email: kishorekasturi28@gmail.com
  - Phone: +91 7993575899

## Dark Mode

Toggle dark mode using the sun/moon icon in the header. Your preference is automatically saved.

## License

Private project - Kapzo Bioactives
