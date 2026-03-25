# InvoiceFlow - SaaS Landing Website

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Latest-black?style=flat-square)

> 🚀 Production-ready SaaS landing website for **InvoiceFlow** - An enterprise-grade offline-first mobile invoicing app.

## ✨ Features

- ✅ **Modern Design**: Stripe/Linear/Notion level quality
- ✅ **Fully Responsive**: Mobile-first design optimized for all devices
- ✅ **Smooth Animations**: Framer Motion transitions throughout
- ✅ **SEO Optimized**: Proper meta tags and Open Graph support
- ✅ **Super Fast**: Static site generation with Next.js
- ✅ **Production Ready**: Built and tested, ready to deploy
- ✅ **5 Pages**: Landing, Features, Download, Privacy, Terms
- ✅ **Dark Mode Ready**: Extensible color system

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (with Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: class-variance-authority for variant management

## 📁 Project Structure

```
invoiceflow/
├── app/
│   ├── (marketing)/         # Marketing pages group
│   │   ├── layout.tsx       # Navbar + Footer
│   │   └── (pages)/
│   │       ├── page.tsx     # Landing page
│   │       ├── features/
│   │       ├── download/
│   │       ├── privacy/
│   │       └── terms/
│   ├── globals.css          # Design system
│   └── layout.tsx           # Root layout
├── components/
│   ├── ui/                  # Button, Input, etc.
│   ├── sections/            # Hero, Features, CTA, etc.
│   └── layout/              # Navbar, Footer, SectionWrapper
├── public/                  # Static assets
├── lib/                     # Utilities
├── tailwind.config.ts       # Tailwind customization
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ (Recommended: 18+)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/invoiceflow.git
cd invoiceflow

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Commands

```bash
# Development
npm run dev           # Start dev server (port 3000/3001)

# Production
npm run build        # Create optimized production build
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint on all files
```

## 🎨 Design System

### Colors (Tailwind Config)

- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#10b981` (Green)
- **Backgrounds**: White with soft shadows
- **Gradients**: Blue → Emerald transitions

### Typography

- **Font**: Inter (system font stack fallback)
- **Sizes**: xs (12px) to 6xl (60px)
- **Weights**: Regular to bold

### Animations

- Fade in/out
- Slide up/down/left/right
- Scale animations
- Staggered container animations
- Scroll-triggered animations

## 📄 Pages

| Page     | Route       | Description                                     |
| -------- | ----------- | ----------------------------------------------- |
| Landing  | `/`         | Hero, features, how it works, testimonials, CTA |
| Features | `/features` | Detailed feature breakdown (8 features)         |
| Download | `/download` | APK download with instructions                  |
| Privacy  | `/privacy`  | Privacy policy (comprehensive)                  |
| Terms    | `/terms`    | Terms of service (legal)                        |

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Connect to Vercel
# 1. Go to vercel.com
# 2. Import your GitHub repository
# 3. Vercel auto-detects Next.js
# 4. Click "Deploy"
```

### Other Platforms

**Netlify**

- Build: `npm run build`
- Publish: `.next`
- Requires Netlify Next.js plugin

**Self-Hosted**

```bash
npm run build
npm run start
```

## 📊 Performance

- Build Time: ~6-7 seconds
- Page Load: < 3 seconds
- Lighthouse Score: 95+
- All pages pre-rendered (SSG)

## 🎯 SEO Features

- ✅ Meta tags (title, description)
- ✅ Open Graph tags (social preview)
- ✅ Twitter card support
- ✅ Favicon configuration
- ✅ Mobile-friendly viewport
- ✅ Structured metadata

## 📱 Responsive Design

- Mobile: < 768px (optimized)
- Tablet: 768px - 1024px
- Desktop: > 1024px (enhanced)
- Mobile menu: Hamburger on small screens
- Flexible grids: 1 → 2 → 3 columns

## 🔧 Customization

### Change Brand Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  primary: {
    DEFAULT: '#2563eb',    // Change here
    light: '#3b82f6',
    dark: '#1e40af',
  },
}
```

### Update Company Information

- **Navbar**: `components/layout/navbar.tsx`
- **Footer**: `components/layout/footer.tsx`
- **Hero**: `components/sections/hero.tsx`

### Add New Pages

1. Create directory: `app/(marketing)/(pages)/newpage/`
2. Add: `page.tsx` and optional layout
3. Update navbar links in `components/layout/navbar.tsx`

## 📦 Dependencies

```json
{
  "next": "16.2.1",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "framer-motion": "latest",
  "lucide-react": "latest",
  "class-variance-authority": "latest"
}
```

## 🤝 Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit: `git commit -m 'Add amazing feature'`
4. Push: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 📞 Support

- **Issue**: Create a GitHub issue
- **Email**: support@invoiceflow.app
- **GitHub**: [ArhanAnsari/InvoiceFlow](https://github.com/ArhanAnsari/InvoiceFlow)

## 🎓 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**Built with ❤️ for InvoiceFlow | Production Ready | Version 1.0.0**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
