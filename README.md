# Ernest Jerome M. Magbanua - Portfolio

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer. Built with cutting-edge technologies and designed with a focus on user experience and performance.

## Features

- **Responsive Design** - Seamlessly adapts to all device sizes
- **Dark Mode Support** - Toggle between light and dark themes with smooth transitions
- **Interactive Tech Stack** - Filterable technology showcase with smooth animations
- **Project Gallery** - Showcase of personal projects with descriptions and tech tags
- **Experience Timeline** - Professional experience displayed in an elegant timeline
- **Contact Form** - Get in touch section for networking opportunities
- **Smooth Animations** - Polished fade-in and hover effects throughout
- **Modern UI Components** - Built with Radix UI primitives for accessibility

## Tech Stack

### Frontend
- **React 19** - Latest version with modern features
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe code for better development experience
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **tw-animate-css** - CSS animations for Tailwind

### Code Quality
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking

## Getting Started

### Prerequisites
- Node.js 20+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yomzyyy/jerome-magbanua.git
cd jerome-magbanua/portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   └── ui/                  # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── tabs.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── profile.jpg          # Profile image
├── .gitignore
├── components.json          # shadcn/ui configuration
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json
├── postcss.config.mjs       # PostCSS configuration
├── README.md
└── tsconfig.json            # TypeScript configuration
```

## Key Sections

### Hero Section
- Profile image with name and title
- Social media links (GitHub, LinkedIn, Facebook, Instagram)
- Resume request button

### Tech Stack
- Filterable by category (All, Frontend, Backend, Database, Tools)
- Smooth fade-in animations when switching filters
- Hover effects on technology cards
- Colored tech logos with dark mode support

### Projects
- Grid layout of personal projects
- Project descriptions and tech tags
- External links to live demos

### Experience
- Timeline-style display of work history
- Company names, roles, and periods
- Descriptions of responsibilities

### Contact
- Contact form with name, email, and message fields
- Clean, accessible form design

## Customization

### Adding Projects
Edit the `projects` array in `app/page.tsx`:
```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    tech: ["React", "Node.js"],
    image: "/project-image.jpg",
    link: "https://project-url.com"
  },
];
```

### Adding Technologies
Update the `techStack`, `techLogos`, and `techDescriptions` objects in `app/page.tsx`.

### Updating Experience
Modify the `experiences` array in `app/page.tsx`.

## Performance

- Optimized images with Next.js Image component
- Code splitting for faster initial load
- Lazy loading of components
- Minimal bundle size with tree shaking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

**Ernest Jerome M. Magbanua**
- GitHub: [@yomzyyy](https://github.com/yomzyyy)
- LinkedIn: [Jerome Magbanua](https://www.linkedin.com/in/magbanuajerome/)
- Facebook: [Jerome Magbanua](https://www.facebook.com/MaelStrong.18)
- Instagram: [@yomz.ej](https://www.instagram.com/yomz.ej/)

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components from [Radix UI](https://www.radix-ui.com)
- Icons from [Lucide](https://lucide.dev)
- Tech logos from [Devicon](https://devicon.dev)
