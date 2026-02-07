export const profile = {
  name: {
    en: 'Jinghan (Jane) Huang',
    zh: '黄婧涵',
  },
  tagline: {
    en: 'AI × Sustainable Operations + Data-Driven × Financial Management',
    zh: 'AI×可持续运营+数据驱动×财务管理',
  },
  bio: {
    en: `I'm a PhD student in Business Analytics at Shanghai University of Finance and Economics, with a passion for data-driven decision making and financial analysis.

    My research focuses on leveraging advanced analytical methods to solve complex business problems. I combine strong quantitative skills with practical business acumen to deliver actionable insights.`,
    zh: `我是上海财经大学商务分析硕博在读学生，对数据驱动决策和财务分析充满热情。

    我的研究专注于利用先进的分析方法解决复杂的商业问题。我将强大的定量技能与实用的商业洞察力相结合，提供可操作的见解。`,
  },
  avatar: '/images/avatar.jpg',
  social: {
    email: 'huangjh2022@163.com',
    github: 'JinghanHuang11',
    xiaohongshu: '931707952',
  },
  education: [
    {
      institution: {
        en: 'Shanghai University of Finance and Economics',
        zh: '上海财经大学',
      },
      degree: {
        en: 'PhD in Business Analytics',
        zh: '商务分析硕博在读',
      },
      period: '2025 - Present',
    },
    {
      institution: {
        en: 'Zhejiang University of Finance and Economics',
        zh: '浙江财经大学',
      },
      degree: {
        en: 'Bachelor of Management in Financial Management (CIMA)',
        zh: '管理学学士（财务管理CIMA方向）',
      },
      period: '2021 - 2025',
    },
  ],
  qualifications: [
    {
      name: {
        en: 'CIMA Candidate (Exams Complete)',
        zh: 'CIMA 候选人（考试完成）',
      },
      issuer: 'CIMA',
    },
    {
      name: {
        en: 'Diploma in Digital Management Accounting',
        zh: '数字管理会计文凭',
      },
      issuer: 'CIMA',
    },
  ],
  certificates: [
    {
      id: 'dmai',
      name: {
        en: 'DMAI - Digital Management Accounting',
        zh: 'DMAI - 数字管理会计',
      },
      issuer: {
        en: 'CIMA (Chartered Institute of Management Accountants)',
        zh: 'CIMA（特许管理会计师公会）',
      },
      date: '2023',
      image: '/images/certificates/DMAI.jpg',
      description: {
        en: 'Certification in digital management accounting principles and practices',
        zh: '数字管理会计原则与实践认证',
      },
    },
    {
      id: 'dmaii',
      name: {
        en: 'DMAII - Advanced Digital Management Accounting',
        zh: 'DMAII - 高级数字管理会计',
      },
      issuer: {
        en: 'CIMA (Chartered Institute of Management Accountants)',
        zh: 'CIMA（特许管理会计师公会）',
      },
      date: '2024',
      image: '/images/certificates/DMAII.jpg',
      description: {
        en: 'Advanced certification in strategic digital management and analytics',
        zh: '战略数字管理与分析高级认证',
      },
    },
  ],
  skills: [
    {
      category: {
        en: 'Design',
        zh: '设计',
      },
      items: ['PPT Design', 'UI/UX Design'],
    },
    {
      category: {
        en: 'Analysis',
        zh: '分析',
      },
      items: ['Financial Analysis', 'Case Analysis', 'Business Analytics'],
    },
    {
      category: {
        en: 'Technical',
        zh: '技术',
      },
      items: ['Python', 'Stata', 'Agent Development', 'Data Visualization'],
    },
  ],
  interests: {
    en: [
      'Business Analytics',
      'Financial Management',
      'Data-Driven Decision Making',
      'AI Agents in Business',
    ],
    zh: [
      '商务分析',
      '财务管理',
      '数据驱动决策',
      '商业AI智能体',
    ],
  },
} as const;

export type Profile = typeof profile;
export type Certificate = typeof profile.certificates[number];
