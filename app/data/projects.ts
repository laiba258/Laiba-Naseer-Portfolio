export interface Project {
  slug: string
  title: string
  type: string
  year: string
  description: string
  longDescription: string
  stack: string[]
  liveUrl: string
  color: string
  accent: string
  teamProject: boolean
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: 'nutrimate',
    title: 'NutriMate',
    type: 'Full-Stack Web App',
    year: '2024',
    description: 'A nutrition tracking app built with Nuxt 3 — clean UI, modular architecture, and smooth UX.',
    longDescription: 'NutriMate is a nutrition tracking application built as a team learning project. It features a modular Nuxt 3 architecture, Tailwind CSS styling, and a focus on clean, accessible UI. The project helped the team explore full-stack patterns with Nuxt including SSR, composables, and API routes.',
    stack: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    liveUrl: 'https://nutrimate-sigma.vercel.app',
    color: '#7c3aed',
    accent: '#a78bfa',
    teamProject: true,
    highlights: [
      'Built with Nuxt 3 and Tailwind CSS',
      'Modular component architecture',
      'Responsive and accessible UI',
      'Deployed on Vercel',
    ],
  },
  {
    slug: 'vantage-blog',
    title: 'Vantage Blog',
    type: 'Blog Platform',
    year: '2024',
    description: 'A custom blog engine exploring Vue state management, API integration, and content-first design.',
    longDescription: 'Vantage Blog is a team learning project focused on building a full-featured blog platform with Vue.js and Nuxt. It explores complex state management patterns, REST API integration, and a content-first reading experience. The project was a deep dive into the Vue ecosystem.',
    stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'REST API', 'Vercel'],
    liveUrl: 'https://blogsite-nine-iota.vercel.app',
    color: '#db2777',
    accent: '#f472b6',
    teamProject: true,
    highlights: [
      'Custom blog engine with Nuxt',
      'REST API integration',
      'Content-first reading experience',
      'Team collaboration project',
    ],
  },
]
