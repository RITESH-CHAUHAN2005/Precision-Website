<div align="center">

# 🏭 Precision Engineering Products

### Modern Corporate Website for Industrial Manufacturing Excellence

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**[Live Demo](https://precision-engineering.com) • [Documentation](#-documentation) • [Report Bug](#-support)**

</div>

---

## 📖 Overview

A modern, high-performance corporate website built for **Precision Engineering Products** - an ISO 9001:2015 certified manufacturer of heavy-duty machinery and automotive components established in 2007. This web application showcases precision-engineered components for mining, material handling, and industrial applications with a focus on user experience, performance, and accessibility.

### 🎯 Project Highlights

- ⚡ **Lightning Fast** - Vite-powered development with optimized production builds
- 📱 **Responsive Design** - Mobile-first approach ensures perfect display on all devices
- ♿ **Accessible** - WCAG 2.1 AA compliant for inclusive user experience
- 🔍 **SEO Optimized** - Built-in SEO components with dynamic meta tags
- 🎨 **Modern UI/UX** - Smooth animations and intuitive navigation
- 🔒 **Type Safe** - Full TypeScript implementation for robust code quality

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Key Components](#-key-components)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## ✨ Features

### 🏢 Business Features

| Feature                           | Description                                                                                                                  |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 🏭 **Product Catalog**            | Comprehensive showcase of 8+ product categories including rotary airlock valves, conveyor systems, and industrial components |
| 🔧 **Manufacturing Capabilities** | Detailed documentation of VTL, VMC, and CNC machining centers with technical specifications                                  |
| 👥 **Leadership Team**            | Professional profiles of executive team members                                                                              |
| 🏢 **Facility Showcase**          | Virtual tours of Unit 1 (Machining) and Unit 2 (Casting) facilities                                                          |
| 📸 **Media Gallery**              | Dynamic image gallery with lightbox functionality and categorization                                                         |
| 📱 **Contact System**             | Multi-step forms for inquiries and quote requests with validation                                                            |
| 🗺️ **Location Integration**       | Google Maps embedded for facility locations                                                                                  |
| 🏆 **Quality Certifications**     | ISO 9001:2015 and other quality certifications display                                                                       |

### 💻 Technical Features

| Category             | Features                                                                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ⚡ **Performance**   | • Vite build system for lightning-fast HMR<br>• Code splitting and lazy loading<br>• Optimized asset delivery                 |
| 🎨 **UI/UX**         | • Framer Motion animations<br>• Responsive design (mobile-first)<br>• Custom Tailwind design system<br>• Shadcn UI components |
| 🔍 **SEO**           | • Dynamic meta tags per page<br>• Sitemap.xml generation<br>• Robots.txt configuration<br>• Semantic HTML structure           |
| ♿ **Accessibility** | • WCAG 2.1 AA compliance<br>• Keyboard navigation<br>• ARIA labels<br>• Screen reader optimization                            |
| 🛡️ **Code Quality**  | • TypeScript for type safety<br>• ESLint for code linting<br>• Component-based architecture                                   |

---

## 🛠️ Tech Stack

<div align="center">

### Core Technologies

| Layer          | Technology   | Version | Purpose                             |
| -------------- | ------------ | ------- | ----------------------------------- |
| **Framework**  | React        | 18.3.x  | UI library with concurrent features |
| **Language**   | TypeScript   | 5.x     | Type-safe development               |
| **Build Tool** | Vite         | 5.x     | Next-gen frontend tooling           |
| **Routing**    | React Router | 6.x     | Client-side navigation              |

### Styling & UI

| Package           | Purpose                         |
| ----------------- | ------------------------------- |
| **Tailwind CSS**  | Utility-first styling framework |
| **Shadcn UI**     | High-quality React components   |
| **Framer Motion** | Production-ready animations     |
| **Lucide React**  | Beautiful icon library          |
| **Swiper**        | Modern touch slider             |

### Forms & Validation

| Package             | Purpose                            |
| ------------------- | ---------------------------------- |
| **React Hook Form** | Performant form management         |
| **Zod**             | TypeScript-first schema validation |

### Additional Libraries

```json
{
  "react-intersection-observer": "Scroll-based animations",
  "sonner": "Toast notifications",
  "embla-carousel-react": "Carousel functionality",
  "date-fns": "Date manipulation"
}
```

### Development Tools

- **ESLint** - Code quality and consistency
- **PostCSS** - CSS transformations
- **Autoprefixer** - Browser compatibility

</div>

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** - [Download](https://git-scm.com/)

Check your installations:

```bash
node --version
npm --version
git --version
```

---

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/precision-digital-presence.git
   cd precision-digital-presence
   ```

2. **Install dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

   Using bun:

   ```bash
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Quick Start (Alternative)

```bash
# One-liner setup
git clone https://github.com/yourusername/precision-digital-presence.git && cd precision-digital-presence && npm install && npm run dev
```

### Environment Setup

Create a `.env` file in the root directory (if needed):

```env
VITE_API_URL=your_api_url
VITE_GOOGLE_MAPS_KEY=your_google_maps_key
```

---

## 📁 Project Structure

```
precision-digital-presence/
├── 📂 public/                  # Static assets
│   ├── robots.txt              # SEO: Search engine crawling rules
│   └── sitemap.xml             # SEO: Site structure for search engines
│
├── 📂 src/
│   ├── 📂 assets/              # Media files
│   │   ├── facility.jpg
│   │   ├── factory.jpg
│   │   ├── machining.jpg
│   │   └── products-*.jpg
│   │
│   ├── 📂 components/          # Reusable React components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Hero.tsx            # Landing section
│   │   ├── SEO.tsx             # SEO meta tags component
│   │   ├── AnimatedSection.tsx # Scroll animations wrapper
│   │   ├── AnimatedCounter.tsx # Number counter animation
│   │   ├── TypewriterText.tsx  # Typing effect component
│   │   ├── PageTransition.tsx  # Page route transitions
│   │   ├── Breadcrumb.tsx      # Navigation breadcrumbs
│   │   ├── WhatsAppButton.tsx  # Floating WhatsApp contact
│   │   └── ui/                 # Shadcn UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── ...
│   │
│   ├── 📂 pages/               # Route page components
│   │   ├── Index.tsx           # Home page
│   │   ├── AboutPage.tsx       # Company information
│   │   ├── ProductsPage.tsx    # Product catalog
│   │   ├── ProductDetailPage.tsx
│   │   ├── FacilitiesPage.tsx  # Manufacturing units
│   │   ├── CapabilitiesPage.tsx
│   │   ├── GalleryPage.tsx     # Image gallery
│   │   ├── ContactPage.tsx     # Contact form
│   │   ├── LeadershipPage.tsx  # Team profiles
│   │   ├── VisionMissionPage.tsx
│   │   ├── SustainabilityPage.tsx
│   │   ├── QualityCertificationsPage.tsx
│   │   ├── IndustriesPage.tsx
│   │   ├── NotFound.tsx        # 404 page
│   │   └── facilities/
│   │       ├── Unit1MachiningPage.tsx
│   │       └── Unit2CastingPage.tsx
│   │
│   ├── 📂 hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx      # Mobile detection
│   │   └── use-toast.ts        # Toast notifications
│   │
│   ├── 📂 lib/                 # Utility functions
│   │   └── utils.ts            # Helper functions
│   │
│   ├── App.tsx                 # Main app component with routing
│   ├── main.tsx                # Application entry point
│   ├── index.css               # Global styles & Tailwind imports
│   └── vite-env.d.ts           # TypeScript definitions
│
├── 📄 package.json             # Dependencies and scripts
├── 📄 tsconfig.json            # TypeScript configuration
├── 📄 tailwind.config.ts       # Tailwind CSS configuration
├── 📄 vite.config.ts           # Vite build configuration
├── 📄 eslint.config.js         # ESLint rules
├── 📄 postcss.config.js        # PostCSS configuration
├── 📄 components.json          # Shadcn UI configuration
└── 📄 README.md                # Project documentation
```

---

## 📜 Available Scripts

| Command              | Description                                         |
| -------------------- | --------------------------------------------------- |
| `npm run dev`        | Start development server at `http://localhost:5173` |
| `npm run build`      | Build production bundle to `dist/` directory        |
| `npm run preview`    | Preview production build locally                    |
| `npm run lint`       | Run ESLint to check code quality                    |
| `npm run type-check` | Run TypeScript compiler checks                      |

### Development Workflow

```bash
# Start development
npm run dev

# In another terminal, watch for type errors
npm run type-check -- --watch

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎯 Key Components

### Core Components

| Component           | Purpose              | Features                                         |
| ------------------- | -------------------- | ------------------------------------------------ |
| **SEO**             | Meta tags management | Dynamic titles, descriptions, Open Graph tags    |
| **Header**          | Main navigation      | Responsive menu, active states, smooth scrolling |
| **Hero**            | Landing section      | Typewriter effect, animated background           |
| **AnimatedSection** | Scroll animations    | Intersection observer, fade-in effects           |
| **PageTransition**  | Route transitions    | Smooth page changes with Framer Motion           |

### Page Components

- **Index** - Home page with all sections
- **AboutPage** - Company history, vision, mission
- **ProductsPage** - Product catalog with categories
- **ProductDetailPage** - Individual product specifications
- **FacilitiesPage** - Manufacturing unit information
- **CapabilitiesPage** - Technical capabilities
- **GalleryPage** - Image gallery with filters
- **ContactPage** - Multi-step contact form
- **LeadershipPage** - Executive team profiles

### Utility Hooks

```typescript
// Mobile detection
import { useIsMobile } from "@/hooks/use-mobile";

// Toast notifications
import { useToast } from "@/hooks/use-toast";
```

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment Platforms

#### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

#### Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

#### Static Hosting (GitHub Pages, etc.)

```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
```

### Environment Variables

For production, set environment variables in your hosting platform:

```env
VITE_API_URL=https://api.example.com
VITE_GOOGLE_MAPS_KEY=your_production_key
```

---

## ⚡ Performance

### Optimization Techniques

| Technique              | Implementation          | Impact                      |
| ---------------------- | ----------------------- | --------------------------- |
| **Code Splitting**     | React.lazy() & Suspense | Reduced initial bundle size |
| **Image Optimization** | Lazy loading images     | Faster page loads           |
| **Tree Shaking**       | ES6 modules with Vite   | Smaller bundle size         |
| **Minification**       | Vite production build   | Reduced file sizes          |
| **Compression**        | Gzip/Brotli on server   | Faster downloads            |

### Performance Metrics

Target metrics for optimal user experience:

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Lighthouse Score**: > 90

### Performance Best Practices

```typescript
// Lazy load components
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'))

// Optimize images
<img loading="lazy" src={imageUrl} alt="Product" />

// Debounce search inputs
const debouncedSearch = useMemo(
  () => debounce(handleSearch, 300),
  []
)
```

---

## 🌐 Browser Support

| Browser | Version         |
| ------- | --------------- |
| Chrome  | Last 2 versions |
| Firefox | Last 2 versions |
| Safari  | Last 2 versions |
| Edge    | Last 2 versions |
| Opera   | Last 2 versions |

**Mobile Browsers:**

- iOS Safari 12+
- Chrome for Android (latest)

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Write meaningful component names
- Add comments for complex logic
- Keep components small and focused

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

### Get Help

- 📧 **Email**: info@precisionengineering.com
- 🌐 **Website**: [precision-engineering.com](https://precision-engineering.com)
- 📱 **Phone**: +91-XXXXXXXXXX
- 💬 **WhatsApp**: Available on website

### Report Issues

Found a bug or have a feature request? Please open an issue on GitHub:

[Report an Issue](https://github.com/yourusername/precision-digital-presence/issues)

### Documentation

For detailed documentation, visit our [Wiki](https://github.com/yourusername/precision-digital-presence/wiki).

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn UI](https://ui.shadcn.com/) - UI Components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide Icons](https://lucide.dev/) - Icon Library

---

<div align="center">

### ⭐ Star us on GitHub

If you find this project helpful, please consider giving it a star!

**Made with ❤️ by Precision Engineering Products Team**

**© 2026 Precision Engineering Products. All rights reserved.**

[Back to Top ↑](#-precision-engineering-products)

</div>
