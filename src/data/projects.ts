export const projects = [
  {
    id: 'cima-study-resources',
    title: {
      en: 'CIMA Study Resources',
      zh: 'CIMA 学习资料',
    },
    description: {
      en: 'Free CIMA learning materials, study notes, and practice resources for all levels and subjects. Hosted on GitHub.',
      zh: '所有级别和科目的免费CIMA学习资料、笔记和练习资源。托管于GitHub。',
    },
    tags: ['CIMA', 'Finance', 'Study Resources'],
    coverImage: '/images/projects/cima-study-resources-cover.png',
    image: '/images/projects/case-studies.jpg',
    demo: '/cima-resources',
    github: 'https://github.com/JinghanHuang11/cima-resources',
    featured: true,
  },
] as const;

export type Project = (typeof projects)[number];
