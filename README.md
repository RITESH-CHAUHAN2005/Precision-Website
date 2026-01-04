# Precision Engineering Products - Official Website

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Precision-engineered components for mining, material handling, and industrial applications. ISO 9001:2015 certified manufacturing excellence.**

A modern, responsive corporate website built with React, TypeScript, and cutting-edge web technologies for Precision Engineering Products - a leading manufacturer of heavy-duty machinery and automotive components established in 2007.

🌐 **Live Demo:** [precision-engineering.com](https://precision-engineering.com)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Product Categories](#-product-categories)
- [Manufacturing Capabilities](#-manufacturing-capabilities)
- [Deployment](#-deployment)
- [Performance Optimization](#-performance-optimization)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

### Core Functionality
- 🏭 **Product Showcase** - Comprehensive display of 8+ product categories with detailed specifications
- 🔧 **Manufacturing Capabilities** - VTL, VMC, and CNC machining centers documentation
- 🏢 **Company Information** - About us, leadership team, manufacturing units
- 📸 **Dynamic Gallery** - Image gallery with lightbox functionality
- 📱 **Contact Forms** - Multi-step contact and quote request forms
- 🗺️ **Interactive Maps** - Google Maps integration for facility locations

### Technical Features
- ⚡ **Blazing Fast Performance** - Built with Vite for optimal load times
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎨 **Smooth Animations** - Framer Motion powered transitions
- 🔍 **SEO Optimized** - Dynamic meta tags, sitemap, robots.txt
- 🎯 **Type Safety** - Full TypeScript implementation
- 🎭 **Modern UI/UX** - Tailwind CSS with custom design system
- 🚀 **PWA Ready** - Progressive Web App capabilities

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3** - UI library with latest features
- **TypeScript 5.x** - Type-safe development
- **Vite 5.x** - Next-generation build tool

### Styling & Animation
- **Tailwind CSS 3.x** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Modern icon library

### Routing & State
- **React Router DOM** - Client-side routing
- **React Hooks** - State management (useState, useEffect, useRef)

### Form Handling
- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation

### Additional Libraries
- **Swiper** - Modern slider/carousel
- **React Intersection Observer** - Scroll animations
- **Sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS transformations
- **Autoprefixer** - CSS vendor prefixing

---

## 📁 Project Structure

precision-digital-presence/
├── public/
│ ├── robots.txt
│ └── sitemap.xml
├── src/
│ ├── assets/ # Images, logos, product images
│ │ ├── facility.jpg
│ │ ├── factory.jpg
│ │ ├── machining.jpg
│ │ ├── products-*.jpg
│ │ └── RotaryAirlockValve.jpeg
│ ├── components/ # Reusable React components
│ │ ├── AnimatedSection.tsx
│ │ ├── AnimatedCounter.tsx
│ │ ├── Breadcrumb.tsx
│ │ ├── Capabilities.tsx
│ │ ├── Footer.tsx
│ │ ├── Header.tsx
│ │ ├── Hero.tsx
│ │ ├── Leadership.tsx
│ │ ├── PageTransition.tsx
│ │ ├── Products.tsx
│ │ ├── SEO.tsx
│ │ └── TypewriterText.tsx
│ ├── pages/ # Page components
│ │ ├── AboutPage.tsx
│ │ ├── ProductsPage.tsx
│ │ ├── FacilitiesPage.tsx
│ │ ├── ContactPage.tsx
│ │ └── Index.tsx
│ ├── lib/ # Utility functions
│ │ └── utils.ts
│ ├── App.tsx # Main app component
│ ├── main.tsx # Application entry point
│ └── index.css # Global styles
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md