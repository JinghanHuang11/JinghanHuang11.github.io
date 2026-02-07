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
  {
    id: 'dma-study-resources',
    title: {
      en: 'DMA Study Resources',
      zh: 'DMA 学习资料',
    },
    description: {
      en: 'Digital Marketing Analytics learning materials including DMA I and DMA II course resources. Hosted on GitHub.',
      zh: '数字营销分析学习资料，包括 DMA I 和 DMA II 课程资源。托管于GitHub。',
    },
    tags: ['DMA', 'Marketing', 'Study Resources'],
    coverImage: '/images/projects/dma-study-resources-cover.png',
    image: '/images/projects/dma-study-resources-cover.png',
    demo: '/dma-resources',
    github: 'https://github.com/JinghanHuang11/dma-resources',
    featured: true,
  },
  {
    id: 'gbc-case-study',
    title: {
      en: 'GBC Case Study',
      zh: 'GBC 案例研究',
    },
    description: {
      en: 'Global Business Competition case studies and analysis materials for 2024 and 2025. Hosted on GitHub.',
      zh: '全球商业竞赛案例研究和分析资料，包括2024和2025年的案例。托管于GitHub。',
    },
    tags: ['GBC', 'Case Study', 'Business'],
    coverImage: '/images/projects/gbc-case-study-cover.png',
    image: '/images/projects/gbc-case-study-cover.png',
    demo: '/gbc-case-study',
    github: 'https://github.com/JinghanHuang11/gbc-case-study',
    featured: true,
  },
] as const;

export type Project = (typeof projects)[number];
