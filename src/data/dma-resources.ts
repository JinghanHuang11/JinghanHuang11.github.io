export type DMALevel = 'dmai' | 'dmaii';
export type ResourceType = 'pdf' | 'ppt' | 'excel' | 'word';

export interface DMAResource {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  level: DMALevel;
  type: ResourceType;
  fileUrl: string; // GitHub repository URL
  fileSize: string;
  date: string;
  downloadCount?: number;
}

export const dmaResources: DMAResource[] = [
  // DMAI - PDF
  {
    id: 'dmai-fundamentals-pdf',
    title: {
      en: 'DMAI - Digital Management Accounting Fundamentals',
      zh: 'DMAI - 数字管理会计基础',
    },
    description: {
      en: 'Complete fundamentals of digital management accounting',
      zh: '数字管理会计完整基础知识',
    },
    level: 'dmai',
    type: 'pdf',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmai/pdf/DMAI-Fundamentals.pdf',
    fileSize: '4.5 MB',
    date: '2023-06',
  },
  {
    id: 'dmai-digital-transformation-pdf',
    title: {
      en: 'DMAI - Digital Transformation in Management Accounting',
      zh: 'DMAI - 管理会计数字化转型',
    },
    description: {
      en: 'Understanding digital transformation in finance and accounting',
      zh: '理解财务会计的数字化转型',
    },
    level: 'dmai',
    type: 'pdf',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmai/pdf/DMAI-Digital-Transformation.pdf',
    fileSize: '3.8 MB',
    date: '2023-07',
  },
  // DMAI - PPT
  {
    id: 'dmai-introduction-ppt',
    title: {
      en: 'DMAI - Introduction to Digital Management Accounting',
      zh: 'DMAI - 数字管理会计介绍',
    },
    description: {
      en: 'Comprehensive introduction slides with examples',
      zh: '带实例的综合介绍课件',
    },
    level: 'dmai',
    type: 'ppt',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmai/ppt/DMAI-Introduction.pptx',
    fileSize: '12.3 MB',
    date: '2023-06',
  },
  {
    id: 'dmai-case-studies-ppt',
    title: {
      en: 'DMAI - Digital Transformation Case Studies',
      zh: 'DMAI - 数字转型案例研究',
    },
    description: {
      en: 'Real-world case studies of digital transformation',
      zh: '数字化转型的真实案例研究',
    },
    level: 'dmai',
    type: 'ppt',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmai/ppt/DMAI-Case-Studies.pptx',
    fileSize: '18.7 MB',
    date: '2023-08',
  },
  // DMAI - Excel
  {
    id: 'dmai-practice-questions-excel',
    title: {
      en: 'DMAI - Practice Questions Workbook',
      zh: 'DMAI - 习题练习册',
    },
    description: {
      en: 'Interactive practice questions with answer key',
      zh: '带答案的交互式习题练习册',
    },
    level: 'dmai',
    type: 'excel',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmai/excel/DMAI-Practice-Questions.xlsx',
    fileSize: '2.1 MB',
    date: '2023-09',
  },
  {
    id: 'dmai-financial-modeling-excel',
    title: {
      en: 'DMAI - Digital Financial Modeling Templates',
      zh: 'DMAI - 数字化财务建模模板',
    },
    description: {
      en: 'Ready-to-use financial modeling templates',
      zh: '可直接使用的财务建模模板',
    },
    level: 'dmai',
    type: 'excel',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmai/excel/DMAI-Financial-Models.xlsx',
    fileSize: '1.8 MB',
    date: '2023-07',
  },
  // DMAI - Word
  {
    id: 'dmai-study-notes-word',
    title: {
      en: 'DMAI - Complete Study Notes',
      zh: 'DMAI - 完整学习笔记',
    },
    description: {
      en: 'Detailed study notes covering all exam topics',
      zh: '涵盖所有考试主题的详细学习笔记',
    },
    level: 'dmai',
    type: 'word',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmai/word/DMAI-Study-Notes.docx',
    fileSize: '2.9 MB',
    date: '2023-08',
  },

  // DMAII - PDF
  {
    id: 'dmaii-advanced-digital-pdf',
    title: {
      en: 'DMAII - Advanced Digital Management Accounting',
      zh: 'DMAII - 高级数字管理会计',
    },
    description: {
      en: 'Advanced concepts in digital management accounting',
      zh: '数字管理会计高级概念',
    },
    level: 'dmaii',
    type: 'pdf',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmaii/pdf/DMAII-Advanced-Digital.pdf',
    fileSize: '5.2 MB',
    date: '2024-01',
  },
  {
    id: 'dmaii-strategic-analytics-pdf',
    title: {
      en: 'DMAII - Strategic Data Analytics',
      zh: 'DMAII - 战略数据分析',
    },
    description: {
      en: 'Strategic use of data analytics in management accounting',
      zh: '管理会计中数据分析的战略应用',
    },
    level: 'dmaii',
    type: 'pdf',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmaii/pdf/DMAII-Strategic-Analytics.pdf',
    fileSize: '4.7 MB',
    date: '2024-02',
  },
  // DMAII - PPT
  {
    id: 'dmaii-automation-ppt',
    title: {
      en: 'DMAII - Automation in Finance',
      zh: 'DMAII - 财务自动化',
    },
    description: {
      en: 'Finance automation tools and implementation strategies',
      zh: '财务自动化工具和实施策略',
    },
    level: 'dmaii',
    type: 'ppt',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmaii/ppt/DMAII-Automation.pptx',
    fileSize: '16.5 MB',
    date: '2024-03',
  },
  {
    id: 'dmaii-ai-in-accounting-ppt',
    title: {
      en: 'DMAII - AI Applications in Management Accounting',
      zh: 'DMAII - AI在管理会计中的应用',
    },
    description: {
      en: 'AI and machine learning applications in finance',
      zh: 'AI和机器学习在财务中的应用',
    },
    level: 'dmaii',
    type: 'ppt',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmaii/ppt/DMAII-AI-Applications.pptx',
    fileSize: '20.1 MB',
    date: '2024-04',
  },
  // DMAII - Excel
  {
    id: 'dmaii-dashboard-excel',
    title: {
      en: 'DMAII - Digital Dashboard Templates',
      zh: 'DMAII - 数字化仪表板模板',
    },
    description: {
      en: 'Interactive dashboard templates for management reporting',
      zh: '管理报告的交互式仪表板模板',
    },
    level: 'dmaii',
    type: 'excel',
    fileSize: '3.5 MB',
    date: '2024-02',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmaii/excel/DMAII-Dashboards.xlsx',
  },
  {
    id: 'dmaii-mock-exam-excel',
    title: {
      en: 'DMAII - Mock Exam with Solutions',
      zh: 'DMAII - 模拟考试及解答',
    },
    description: {
      en: 'Complete mock exam with detailed solutions',
      zh: '完整模拟考试及详细解答',
    },
    level: 'dmaii',
    type: 'excel',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmaii/excel/DMAII-Mock-Exam.xlsx',
    fileSize: '2.8 MB',
    date: '2024-05',
  },
  // DMAII - Word
  {
    id: 'dmaii-exam-guide-word',
    title: {
      en: 'DMAII - Exam Preparation Guide',
      zh: 'DMAII - 考试准备指南',
    },
    description: {
      en: 'Comprehensive exam preparation guide and tips',
      zh: '综合考试准备指南和技巧',
    },
    level: 'dmaii',
    type: 'word',
    fileUrl: 'https://github.com/JinghanHuang11/dma-resources/raw/main/dmaii/word/DMAII-Exam-Guide.docx',
    fileSize: '1.6 MB',
    date: '2024-03',
  },
];

// Helper functions
export const getResourcesByLevel = (level: DMALevel): DMAResource[] => {
  return dmaResources.filter(resource => resource.level === level);
};

export const getResourcesByType = (type: ResourceType): DMAResource[] => {
  return dmaResources.filter(resource => resource.type === type);
};

export const getResourcesByLevelAndType = (
  level: DMALevel,
  type: ResourceType
): DMAResource[] => {
  return dmaResources.filter(
    resource => resource.level === level && resource.type === type
  );
};

// DMA level labels
export const DMALevelLabels = {
  dmai: {
    en: 'DMAI - Digital Management Accounting',
    zh: 'DMAI - 数字管理会计',
  },
  dmaii: {
    en: 'DMAII - Advanced Digital Management Accounting',
    zh: 'DMAII - 高级数字管理会计',
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
