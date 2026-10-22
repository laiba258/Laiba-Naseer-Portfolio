export interface Project {
  slug: string
  title: string
  type: string
  year: string
  description: string
  longDescription: string
  stack: string[]
  liveUrl: string
  mockupUrl: string
  color: string
  accent: string
  highlights: string[]
}

export interface TeamSnapshot {
  title: string
  description: string
  image: string
  stack: string[]
  color: string
}

// Individual projects — built & deployed by Laiba
export const projects: Project[] = [
  {
    slug: 'my-food-restaurant',
    title: 'My Food Restaurant',
    type: 'Restaurant Brand Website',
    year: '2026',
    description: 'A premium restaurant landing page built to showcase menu highlights, brand personality, and an inviting dining experience.',
    longDescription: 'My Food Restaurant is a polished restaurant brand website designed for a modern food business. It focuses on visual storytelling, elegant typography, warm color palette, and a seamless browsing experience for visitors exploring the menu and ambiance.',
    stack: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Responsive Design', 'Brand UI'],
    liveUrl: 'https://myfoodresturent.vercel.app/',
    mockupUrl: '/my-food-restaurant-mockup.pdf',
    color: '#f97316',
    accent: '#fdba74',
    highlights: [
      'Luxury restaurant-inspired brand design',
      'Responsive landing page with clear call-to-actions',
      'Food-focused visual storytelling and layout flow',
      'Built for strong first impressions and conversions',
    ],
  },
  {
    slug: 'blush-heaven',
    title: 'Blush Heaven',
    type: 'Beauty & Lifestyle Store',
    year: '2026',
    description: 'A soft, feminine beauty showcase with bold product presentation and premium minimal styling.',
    longDescription: 'Blush Heaven is a beauty and lifestyle brand website designed with a luxurious editorial look. The experience balances soft tones, elegant spacing, and strong product emphasis to help customers discover best-selling items and the brand story more naturally.',
    stack: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Brand Design', 'Landing Page UX'],
    liveUrl: 'https://blushheaven.pages.dev/',
    mockupUrl: '/blush-heaven-mockup%20(1).pdf',
    color: '#ec4899',
    accent: '#f9a8d4',
    highlights: [
      'Premium beauty brand aesthetic and soft palette',
      'High-conversion landing page structure',
      'Polished product-first presentation',
      'Clean and elegant interface for brand storytelling',
    ],
  },
  {
    slug: 'nutrimate',
    title: 'NutriMate',
    type: 'Full-Stack Web App',
    year: '2024',
    description: 'A nutrition tracking app built with Nuxt 3 — clean UI, modular architecture, and smooth UX.',
    longDescription: 'NutriMate is a nutrition tracking application built with Nuxt 3 and Tailwind CSS. It features a modular component architecture, SEO optimization, and a smooth responsive user experience. Deployed on Vercel.',
    stack: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    liveUrl: 'https://nutrimate-sigma.vercel.app',
    mockupUrl: '',
    color: '#7c3aed',
    accent: '#a78bfa',
    highlights: [
      'Built with Nuxt 3 and Tailwind CSS',
      'Modular component architecture',
      'SEO-optimized and fully responsive',
      'Deployed on Vercel',
    ],
  },
  {
    slug: 'vantage-blog',
    title: 'Vantage Blog',
    type: 'Blog Platform',
    year: '2024',
    description: 'A custom blog engine exploring Vue state management, API integration, and content-first design.',
    longDescription: 'Vantage Blog is a custom-built blog platform with Vue.js and Nuxt. It features complex state management, REST API integration, and a content-first reading experience focused on accessibility and clean typography.',
    stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'REST API', 'Vercel'],
    liveUrl: 'https://blogsite-nine-iota.vercel.app',
    mockupUrl: '',
    color: '#db2777',
    accent: '#f472b6',
    highlights: [
      'Custom blog engine with Nuxt',
      'REST API integration',
      'Content-first reading experience',
      'Accessible and responsive UI',
    ],
  },
]

// Team learning snapshots — practice projects, not deployed individually
export const teamSnapshots: TeamSnapshot[] = [
  {
    title: 'Chat App',
    description: 'Real-time chat interface with sidebar, search and dark theme',
    image: '/projects/chat.jpg',
    stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
    color: '#ec4899',
  },
  {
    title: 'Book Hub — Home',
    description: 'Personal book library with hero section and create/explore flow',
    image: '/projects/bookhub-home.jpg',
    stack: ['Nuxt 3', 'Vue 3', 'Tailwind CSS'],
    color: '#10b981',
  },
  {
    title: 'Book Hub — Explorer',
    description: 'Public book explorer with search, read, like & share features',
    image: '/projects/bookhub-explorer.jpg',
    stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
    color: '#f59e0b',
  },
  {
    title: 'Book Hub — Books',
    description: 'Book detail view with versions, volumes and sections management',
    image: '/projects/bookhub-books.jpg',
    stack: ['Nuxt 3', 'Drizzle ORM', 'SQLite'],
    color: '#8b5cf6',
  },
  {
    title: 'Book Hub — Volumes',
    description: 'Volume management with nested sections and chapter organization',
    image: '/projects/bookhub-volumes.jpg',
    stack: ['Nuxt 3', 'Vue 3', 'Tailwind CSS'],
    color: '#06b6d4',
  },
  {
    title: 'Book Hub — Sections',
    description: 'Chapter management view with sidebar navigation and rich content',
    image: '/projects/bookhub-sections.jpg',
    stack: ['Nuxt 3', 'Vue 3', 'Tailwind CSS'],
    color: '#a78bfa',
  },
  {
    title: 'Book Hub — Chapters',
    description: 'Deep chapter view with breadcrumb navigation and chapter grid',
    image: '/projects/bookhub-chapters.jpg',
    stack: ['Nuxt 3', 'Vue 3', 'Tailwind CSS'],
    color: '#34d399',
  },
  {
    title: 'MiniShop — Home',
    description: 'E-commerce storefront with hero banner and featured products',
    image: '/projects/minishop-home.jpg',
    stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
    color: '#0ea5e9',
  },
  {
    title: 'MiniShop — Categories',
    description: 'Product category browsing with circular image cards and clean layout',
    image: '/projects/minishop-categories.jpg',
    stack: ['Vue.js', 'Tailwind CSS', 'Pinia'],
    color: '#fb923c',
  },
  {
    title: 'MiniShop — Products',
    description: 'Product listing with filters, cart and wishlist functionality',
    image: '/projects/minishop-products.jpg',
    stack: ['Vue.js', 'Pinia', 'Tailwind CSS'],
    color: '#f472b6',
  },
  {
    title: 'MiniShop — Detail',
    description: 'Product detail page with dark mode, reviews and add to cart',
    image: '/projects/minishop-2.jpg',
    stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
    color: '#fbbf24',
  },
]
