# Jinghan (Jane) Huang - Personal Website

A modern, responsive personal portfolio and blog website built with [Astro](https://astro.build), featuring bilingual support (Chinese/English), dark mode, and static generation for optimal performance.

## ✨ Features

- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🌍 **Bilingual** - Full Chinese/English language support
- 📱 **Responsive Design** - Mobile-first, works on all devices
- 🎨 **Modern UI** - Clean, academic aesthetic with Tailwind CSS
- 📝 **Blog System** - Markdown-based blog with syntax highlighting
- 🏷️ **Tag Filtering** - Filter blog posts and projects by tags
- 📄 **Resume Page** - Professional resume with print functionality
- 🚀 **Static & Fast** - Pre-rendered for optimal performance
- 🔍 **SEO Friendly** - Optimized meta tags and sitemap

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) v4
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: Custom Astro components
- **Content**: Markdown with MDX support
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
jane.github.io/
├── public/                 # Static assets
│   ├── images/            # Images (add your avatar here)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/        # Reusable components
│   │   ├── layout/       # Header, Footer
│   │   └── ui/           # UI components (ThemeToggle, Cards, etc.)
│   ├── content/          # Blog content (Markdown files)
│   │   ├── blog/        # Blog posts
│   │   └── config.ts    # Content collection config
│   ├── data/            # Site data (profile, projects, etc.)
│   │   ├── profile.ts   # Your personal information
│   │   ├── projects.ts  # Project data
│   │   └── site.ts      # Site configuration
│   ├── i18n/            # Internationalization
│   │   ├── config.ts    # Locale configuration
│   │   ├── ui.ts        # UI translations
│   │   └── utils.ts     # Translation utilities
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   │   ├── index.astro       # Home page
│   │   ├── about.astro       # About page
│   │   ├── projects.astro    # Projects page
│   │   ├── blog/             # Blog pages
│   │   ├── resume.astro      # Resume page
│   │   └── contact.astro     # Contact page
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json         # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jane/jane.github.io.git
   cd jane.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:4321](http://localhost:4321)

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Start the development server (alias)
npm start
```

## ✏️ Customization

### Personal Information

Edit `src/data/profile.ts` to update your personal information:

```typescript
export const profile = {
  name: {
    en: 'Jinghan (Jane) Huang',
    zh: '黄婧涵',
  },
  tagline: {
    en: "Don't rush, feel the way.",
    zh: '不要匆忙，感受过程。',
  },
  // ... more fields
};
```

### Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
export const projects = [
  {
    id: 'your-project-id',
    title: { en: 'Project Title', zh: '项目标题' },
    description: { en: 'Description', zh: '描述' },
    tags: ['Tag1', 'Tag2'],
    image: '/images/projects/your-image.jpg',
    demo: 'https://demo-url.com',
    github: 'https://github.com/username/repo',
    featured: true,
  },
  // ... more projects
];
```

### Blog Posts

Add new blog posts by creating Markdown files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Post description"
publishedAt: 2024-02-15
tags: ["Tag1", "Tag2"]
locale: "en"
draft: false
---

Your post content here...
```

### Images

Add your images to the `public/images/` directory:

- **Avatar**: `public/images/avatar.jpg`
- **Project images**: `public/images/projects/`

### Contact Form

The contact page uses Formspree for form submissions. To enable it:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Replace `your-form-id` in `src/pages/contact.astro` with your Formspree form ID

Alternatively, remove the form and keep only the contact information.

## 🌐 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Initial Setup

1. **Create a GitHub repository** named `jane.github.io` (replace with your username)

2. **Push your code** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Jane/jane.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Under **Build and deployment**, select **Source**: `GitHub Actions`

4. **Enable Workflows**:
   - Go to **Actions** tab
   - Click "I understand my workflows, go ahead and enable them"

5. **Automatic Deployment**:
   - Every push to the `main` branch will automatically build and deploy your site
   - Your site will be available at `https://Jane.github.io` (replace with your username)

#### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the site
npm run build

# The built site will be in the `dist/` directory
# Upload the contents of `dist/` to your hosting service
```

### Other Hosting Platforms

This static site can be deployed to any platform that supports static sites:

- **Netlify**: Connect your GitHub repository
- **Vercel**: Import your project
- **Cloudflare Pages**: Connect your Git repository
- **Surge.sh**: `npm run build && surge dist`

## 🌙 Dark Mode

Dark mode is automatically enabled based on user's system preference. Users can manually toggle between light and dark modes using the theme toggle button in the header.

## 🌍 Bilingual Support

The site supports Chinese and English:

- Language is determined by URL parameter: `?lang=en` or `?lang=zh`
- Default language is English
- Use language switcher in header or footer to switch languages
- Add translations in `src/i18n/ui.ts`

## 🔧 Configuration

### Site Configuration

Edit `src/data/site.ts` to update site metadata:

```typescript
export const siteConfig = {
  name: { en: "Your Name", zh: '你的名字' },
  url: 'https://yourusername.github.io',
  // ... more config
};
```

### Astro Configuration

Edit `astro.config.mjs` to change site URL and other Astro settings.

### Tailwind Configuration

Edit `tailwind.config.mjs` to customize colors, fonts, and other design tokens.

## 📈 Analytics & SEO

### Add Analytics

1. **Google Analytics**:
   - Add your GA tracking ID in `src/layouts/BaseLayout.astro`

2. **Privacy-Friendly Analytics**:
   - Consider [Umami](https://umami.is/) or [Plausible](https://plausible.io/)

### SEO

The site includes basic SEO optimization:
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Semantic HTML
- Sitemap (auto-generated by Astro)

## 📝 Content Management

### Writing Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with metadata
3. Write your content in Markdown
4. Save and rebuild

### Supported Markdown Features

- Headers (##, ###)
- Bold (**text**), Italic (*text*)
- Links [text](url)
- Images ![alt](url)
- Code blocks with syntax highlighting
- Tables
- Blockquotes
- Lists (ordered and unordered)

## 🤝 Contributing

This is a personal website, but feel free to fork it for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from SVG
- Fonts from system fonts

## 📧 Contact

- Email: huangjh2022@163.com
- GitHub: [@JinghanHuang11](https://github.com/JinghanHuang11)
- RedNote:931707952(https://www.xiaohongshu.com/explore)

---

Made with ❤️ and [Astro](https://astro.build)
