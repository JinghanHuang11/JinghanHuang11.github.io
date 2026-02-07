export type CIMALevel = 'certificate' | 'operational' | 'management' | 'strategic';
export type ResourceType = 'pdf' | 'ppt' | 'excel' | 'word';

export interface CIMAResource {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  level: CIMALevel;
  type: ResourceType;
  fileUrl: string; // GitHub repository URL
  fileSize: string;
  date: string;
  downloadCount?: number;
}

export const cimaResources: CIMAResource[] = [
  // Certificate Level - PDF
  {
    id: 'cert-fundamentals-pdf',
    title: {
      en: 'CIMA Certificate Fundamentals - Study Guide',
      zh: 'CIMA 基础证书 - 学习指南',
    },
    description: {
      en: 'Comprehensive study guide covering all Certificate level fundamentals',
      zh: '涵盖所有证书级别基础知识的综合学习指南',
    },
    level: 'certificate',
    type: 'pdf',
    fileUrl: 'https://github.com/JinghanHuang11/cima-resources/raw/main/certificate/pdf/C01-Fundamentals-of-Management-Accounting.pdf',
    fileSize: '3.2 MB',
    date: '2024-01',
  },
  // Certificate Level - PPT
  {
    id: 'cert-fundamentals-ppt',
    title: {
      en: 'CIMA Certificate - Teaching Slides',
      zh: 'CIMA 证书 - 教学课件',
    },
    description: {
      en: 'Complete teaching slides for Certificate level courses',
      zh: '证书级别课程的完整教学课件',
    },
    level: 'certificate',
    type: 'ppt',
    fileUrl: 'https://github.com/JinghanHuang11/cima-resources/raw/main/certificate/ppt/C01-Teaching-Slides.pptx',
    fileSize: '15.8 MB',
    date: '2024-01',
  },
  // Certificate Level - Excel
  {
    id: 'cert-practice-excel',
    title: {
      en: 'CIMA Certificate - Practice Questions Bank',
      zh: 'CIMA 证书 - 习题库',
    },
    description: {
      en: 'Interactive Excel workbook with practice questions and answers',
      zh: '包含习题和答案的交互式Excel练习册',
    },
    level: 'certificate',
    type: 'excel',
    fileUrl: 'https://github.com/JinghanHuang11/cima-resources/raw/main/certificate/excel/C01-Practice-Questions.xlsx',
    fileSize: '1.5 MB',
    date: '2024-02',
  },
  // Certificate Level - Word
  {
    id: 'cert-notes-word',
    title: {
      en: 'CIMA Certificate - Course Notes',
      zh: 'CIMA 证书 - 课程笔记',
    },
    description: {
      en: 'Detailed course notes with key concepts and formulas',
      zh: '包含关键概念和公式的详细课程笔记',
    },
    level: 'certificate',
    type: 'word',
    fileUrl: 'https://github.com/JinghanHuang11/cima-resources/raw/main/certificate/word/C01-Course-Notes.docx',
    fileSize: '2.1 MB',
    date: '2024-01',
  },

  // Operational Level - PDF
  {
    id: 'oper-e1-pdf',
    title: {
      en: 'E1 - Managing Finance in a Digital World: Study Text',
      zh: 'E1 数字化世界的财务管理：学习文本',
    },
    description: {
      en: 'Complete study text for E1 exam preparation',
      zh: 'E1 考试完整学习文本',
    },
    level: 'operational',
    type: 'pdf',
    fileUrl: 'https://github.com/JinghanHuang11/cima-resources/raw/main/operational/pdf/E1-Study-Text.pdf',
    fileSize: '8.5 MB',
    date: '2024-03',
  },
  // Operational Level - PPT
  {
    id: 'oper-e1-ppt',
    title: {
      en: 'E1 - Lecture Slides Package',
      zh: 'E1 讲座课件包',
    },
    description: {
      en: 'Complete lecture slides covering all E1 topics',
      zh: '涵盖所有E1主题的完整讲座课件',
    },
    level: 'operational',
    type: 'ppt',
    fileUrl: 'https://github.com/JinghanHuang11/cima-resources/raw/main/operational/ppt/E1-Lecture-Slides.pptx',
    fileSize: '22.3 MB',
    date: '2024-03',
  },
  // Operational Level - Excel
  {
    id: 'oper-e1-excel',
    title: {
      en: 'E1 - Practice Questions & Mock Exam',
      zh: 'E1 习题与模拟考试',
    },
    description: {
      en: 'Practice questions with automated grading system',
      zh: '带自动评分系统的习题集',
    },
    level: 'operational',
    type: 'excel',
    fileUrl: 'https://github.com/JinghanHuang11/cima-resources/raw/main/operational/excel/E1-Practice-Questions.xlsx',
    fileSize: '3.8 MB',
    date: '2024-04',
  },

  // Management Level - PDF
  {
    id: 'mgmt-f2-pdf',
    title: {
      en: 'F2 - Advanced Financial Reporting: Study Guide',
      zh: 'F2 高级财务报告：学习指南',
    },
    description: {
      en: 'Advanced financial reporting concepts and IFRS standards',
      zh: '高级财务报告概念和IFRS准则',
    },
    level: 'management',
    type: 'pdf',
    fileUrl: 'https://github.com/JinghanHuang11/cima-resources/raw/main/management/pdf/F2-Study-Guide.pdf',
    fileSize: '6.7 MB',
    date: '2024-05',
  },
  // Management Level - PPT
  {
    id: 'mgmt-f2-ppt',
    title: {
      en: 'F2 - Case Study Presentations',
      zh: 'F2 案例研究演示',
    },
    description: {
      en: 'Case study analysis presentations with solutions',
      zh: '带解答的案例研究分析演示',
    },
    level: 'management',
    type: 'ppt',
    fileUrl: 'https://github.com/JinghanHuang11/cima-resources/raw/main/management/ppt/F2-Case-Studies.pptx',
    fileSize: '18.9 MB',
    date: '2024-05',
  },

  // Strategic Level - PDF
  {
    id: 'strat-p3-pdf',
    title: {
      en: 'P3 - Risk Management: Comprehensive Notes',
      zh: 'P3 风险管理：综合笔记',
    },
    description: {
      en: 'Risk management frameworks and strategic analysis',
      zh: '风险管理框架和战略分析',
    },
    level: 'strategic',
    type: 'pdf',
    fileUrl: 'https://github.com/JinghanHuang11/cima-resources/raw/main/strategic/pdf/P3-Risk-Management.pdf',
    fileSize: '7.2 MB',
    date: '2024-06',
  },
  // Strategic Level - PPT
  {
    id: 'strat-p3-ppt',
    title: {
      en: 'P3 - Strategic Case Study Preparation',
      zh: 'P3 战略案例研究准备',
    },
    description: {
      en: 'Strategic case study preparation materials and tips',
      zh: '战略案例研究准备材料和技巧',
    },
    level: 'strategic',
    type: 'ppt',
    fileUrl: 'https://github.com/JinghanHuang11/cima-resources/raw/main/strategic/ppt/P3-Case-Study-Prep.pptx',
    fileSize: '14.5 MB',
    date: '2024-06',
  },
];

// Helper function to get resources by level
export const getResourcesByLevel = (level: CIMALevel): CIMAResource[] => {
  return cimaResources.filter(resource => resource.level === level);
};

// Helper function to get resources by type
export const getResourcesByType = (type: ResourceType): CIMAResource[] => {
  return cimaResources.filter(resource => resource.type === type);
};

// Helper function to get resources by level and type
export const getResourcesByLevelAndType = (
  level: CIMALevel,
  type: ResourceType
): CIMAResource[] => {
  return cimaResources.filter(
    resource => resource.level === level && resource.type === type
  );
};

// CIMA level labels for display
export const CIMALevelLabels = {
  certificate: {
    en: 'Certificate Level',
    zh: '证书级别',
  },
  operational: {
    en: 'Operational Level',
    zh: '运营级别',
  },
  management: {
    en: 'Management Level',
    zh: '管理级别',
  },
  strategic: {
    en: 'Strategic Level',
    zh: '战略级别',
  },
};

// Resource type labels and icons
export const ResourceTypeLabels = {
  pdf: {
    en: 'PDF',
    zh: 'PDF文档',
    icon: '📄',
  },
  ppt: {
    en: 'Presentation',
    zh: '演示文稿',
    icon: '📊',
  },
  excel: {
    en: 'Spreadsheet',
    zh: '电子表格',
    icon: '📈',
  },
  word: {
    en: 'Document',
    zh: '文档',
    icon: '📝',
  },
};
