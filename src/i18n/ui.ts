export const ui = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      resume: 'Resume',
      contact: 'Contact',
    },
    home: {
      hero: {
        greeting: "Hi, I'm",
        tagline: 'AI × Sustainable Operations + Data-Driven × Financial Management',
        cta: 'View My Work',
      },
      latestProjects: 'Latest Projects',
      latestPosts: 'Latest Posts',
    },
    about: {
      title: 'About Me',
      education: 'Education',
      qualifications: 'Professional Qualifications',
      skills: 'Skills',
      interests: 'Research Interests',
    },
    projects: {
      title: 'Projects',
      filter: 'Filter by',
      all: 'All',
      viewProject: 'View Project',
    },
    blog: {
      title: 'Blog',
      readMore: 'Read More',
      readingTime: 'min read',
      tags: 'Tags',
      allPosts: 'All Posts',
    },
    resume: {
      title: 'Resume',
      download: 'Download PDF',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: "Let's connect and create something amazing together",
      email: 'Email',
      social: 'Social Media',
    },
    footer: {
      copyright: '© {year} Jinghan (Jane) Huang. All rights reserved.',
      madeWith: 'Made with ❤️ and Astro',
    },
    theme: {
      toggle: 'Toggle theme',
      light: 'Light',
      dark: 'Dark',
    },
    lang: {
      switch: 'Switch to Chinese',
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于',
      projects: '项目',
      blog: '博客',
      resume: '简历',
      contact: '联系',
    },
    home: {
      hero: {
        greeting: '你好，我是',
        tagline: 'AI×可持续运营+数据驱动×财务管理',
        cta: '查看我的作品',
      },
      latestProjects: '最新项目',
      latestPosts: '最新文章',
    },
    about: {
      title: '关于我',
      education: '教育经历',
      qualifications: '职业资格',
      skills: '技能',
      interests: '研究方向',
    },
    projects: {
      title: '项目展示',
      filter: '筛选',
      all: '全部',
      viewProject: '查看项目',
    },
    blog: {
      title: '博客',
      readMore: '阅读更多',
      readingTime: '分钟阅读',
      tags: '标签',
      allPosts: '所有文章',
    },
    resume: {
      title: '简历',
      download: '下载 PDF',
    },
    contact: {
      title: '联系我',
      subtitle: '让我们一起创造精彩',
      email: '邮箱',
      social: '社交媒体',
    },
    footer: {
      copyright: '© {year} 黄婧涵。保留所有权利。',
      madeWith: '用 ❤️ 和 Astro 构建',
    },
    theme: {
      toggle: '切换主题',
      light: '浅色',
      dark: '深色',
    },
    lang: {
      switch: 'Switch to English',
    },
  },
} as const;

export type Locale = keyof typeof ui;
export type TranslationKey = keyof typeof ui.en;
