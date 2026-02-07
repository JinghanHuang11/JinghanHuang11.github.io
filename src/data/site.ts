export const siteConfig = {
  name: {
    en: "Jinghan (Jane) Huang",
    zh: '黄婧涵',
  },
  title: {
    en: 'Jinghan Huang - Portfolio & Blog',
    zh: '黄婧涵 - 个人主页与博客',
  },
  description: {
    en: 'Personal website of Jinghan (Jane) Huang - PhD student in Business Analytics, researcher, and data enthusiast.',
    zh: '黄婧涵的个人主页 - 商务分析博士生、研究者和数据爱好者。',
  },
  url: 'https://Jane.github.io',
  author: {
    name: 'Jinghan (Jane) Huang',
    email: 'huangjh2022@163.com',
  },
  nav: [
    { href: '/', label: { en: 'Home', zh: '首页' } },
    { href: '/about', label: { en: 'About', zh: '关于' } },
    { href: '/projects', label: { en: 'Projects', zh: '项目' } },
    { href: '/blog', label: { en: 'Blog', zh: '博客' } },
    { href: '/resume', label: { en: 'Resume', zh: '简历' } },
    { href: '/contact', label: { en: 'Contact', zh: '联系' } },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/JinghanHuang11',
      icon: 'github',
    },
    {
      name: 'Email',
      href: 'mailto:huangjh2022@163.com',
      icon: 'email',
    },
    {
      name: 'Xiaohongshu',
      href: 'https://www.xiaohongshu.com/user/profile/931707952',
      icon: 'xiaohongshu',
    },
  ],
} as const;
