export type CIMALevel = 'certificate' | 'operational' | 'management' | 'strategic';
export type Cimasubject = 'BA1' | 'BA2' | 'BA3' | 'BA4' | 'E1' | 'P1' | 'F1' | 'OCS' | 'E2' | 'P2' | 'F2' | 'MCS' | 'E3' | 'P3' | 'F3' | 'SCS';

// CIMA Levels and Subjects with GitHub paths
export const CIMALevels = {
  certificate: {
    id: 'certificate' as CIMALevel,
    name: {
      en: 'Certificate Level',
      zh: '证书级别',
    },
    subjects: [
      {
        code: 'BA1' as Cimasubject,
        name: {
          en: 'BA1: Fundamentals of Business Economics',
          zh: 'BA1: 商业经济学基础',
        },
        githubPath: 'certificate/BA1',
      },
      {
        code: 'BA2' as Cimasubject,
        name: {
          en: 'BA2: Fundamentals of Management Accounting',
          zh: 'BA2: 管理会计基础',
        },
        githubPath: 'certificate/BA2',
      },
      {
        code: 'BA3' as Cimasubject,
        name: {
          en: 'BA3: Fundamentals of Financial Accounting',
          zh: 'BA3: 财务会计基础',
        },
        githubPath: 'certificate/BA3',
      },
      {
        code: 'BA4' as Cimasubject,
        name: {
          en: 'BA4: Fundamentals of Ethics, Corporate Governance and Business Law',
          zh: 'BA4: 道德、公司治理与商法基础',
        },
        githubPath: 'certificate/BA4',
      },
    ],
  },
  operational: {
    id: 'operational' as CIMALevel,
    name: {
      en: 'Operational Level',
      zh: '运营级别',
    },
    subjects: [
      {
        code: 'E1' as Cimasubject,
        name: {
          en: 'E1: Organisational Management',
          zh: 'E1: 组织管理',
        },
        githubPath: 'operational/E1',
      },
      {
        code: 'P1' as Cimasubject,
        name: {
          en: 'P1: Management Accounting',
          zh: 'P1: 管理会计',
        },
        githubPath: 'operational/P1',
      },
      {
        code: 'F1' as Cimasubject,
        name: {
          en: 'F1: Financial Reporting and Taxation Management',
          zh: 'F1: 财务报告与税务管理',
        },
        githubPath: 'operational/F1',
      },
      {
        code: 'OCS' as Cimasubject,
        name: {
          en: 'OCS: Operational Case Study Exam',
          zh: 'OCS: 运营级别案例分析考试',
        },
        githubPath: 'operational/OCS',
      },
    ],
  },
  management: {
    id: 'management' as CIMALevel,
    name: {
      en: 'Management Level',
      zh: '管理级别',
    },
    subjects: [
      {
        code: 'E2' as Cimasubject,
        name: {
          en: 'E2: Project and Relationship Management',
          zh: 'E2: 项目与关系管理',
        },
        githubPath: 'management/E2',
      },
      {
        code: 'P2' as Cimasubject,
        name: {
          en: 'P2: Advanced Management Accounting',
          zh: 'P2: 高级管理会计',
        },
        githubPath: 'management/P2',
      },
      {
        code: 'F2' as Cimasubject,
        name: {
          en: 'F2: Advanced Financial Reporting',
          zh: 'F2: 高级财务报告',
        },
        githubPath: 'management/F2',
      },
      {
        code: 'MCS' as Cimasubject,
        name: {
          en: 'MCS: Management Case Study Exam',
          zh: 'MCS: 管理级别案例分析考试',
        },
        githubPath: 'management/MCS',
      },
    ],
  },
  strategic: {
    id: 'strategic' as CIMALevel,
    name: {
      en: 'Strategic Level',
      zh: '战略级别',
    },
    subjects: [
      {
        code: 'E3' as Cimasubject,
        name: {
          en: 'E3: Strategic Management',
          zh: 'E3: 战略管理',
        },
        githubPath: 'strategic/E3',
      },
      {
        code: 'P3' as Cimasubject,
        name: {
          en: 'P3: Risk Management',
          zh: 'P3: 风险管理',
        },
        githubPath: 'strategic/P3',
      },
      {
        code: 'F3' as Cimasubject,
        name: {
          en: 'F3: Financial Strategy',
          zh: 'F3: 财务战略',
        },
        githubPath: 'strategic/F3',
      },
      {
        code: 'SCS' as Cimasubject,
        name: {
          en: 'SCS: Strategic Case Study Exam',
          zh: 'SCS: 战略级别案例分析考试',
        },
        githubPath: 'strategic/SCS',
      },
    ],
  },
};
