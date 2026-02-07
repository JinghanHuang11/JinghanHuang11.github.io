# GitHub 学习资料仓库设置指南

本指南将帮助你创建和管理两个GitHub仓库来托管CIMA和DMA学习资料。

---

## 📦 需要创建的仓库

### 1. CIMA 学习资料仓库
- **仓库名称**: `cima-resources`
- **用途**: 存储CIMA考试各级别的学习资料
- **访问地址**: `https://github.com/JinghanHuang11/cima-resources`

### 2. DMA 学习资料仓库
- **仓库名称**: `dma-resources`
- **用途**: 存储DMAI和DMAII的学习资料
- **访问地址**: `https://github.com/JinghanHuang11/dma-resources`

---

## 🚀 创建仓库的步骤

### 步骤 1: 在GitHub上创建仓库

1. 访问 https://github.com/new
2. 输入仓库名称（例如：`cima-resources`）
3. 选择 **Public**（公开）- 这样访客可以直接下载文件
4. **不要**勾选 "Add a README file"
5. 点击 "Create repository"

### 步骤 2: 本地克隆并设置目录结构

在本地命令行执行：

```bash
# 克隆仓库
git clone https://github.com/JinghanHuang11/cima-resources.git
cd cima-resources

# 创建CIMA资料目录结构
mkdir -p certificate/pdf
mkdir -p certificate/ppt
mkdir -p certificate/excel
mkdir -p certificate/word

mkdir -p operational/pdf
mkdir -p operational/ppt
mkdir -p operational/excel
mkdir -p operational/word

mkdir -p management/pdf
mkdir -p management/ppt
mkdir -p management/excel
mkdir -p management/word

mkdir -p strategic/pdf
mkdir -p strategic/ppt
mkdir -p strategic/excel
mkdir -p strategic/word

# 创建README文件
echo "# CIMA 学习资料仓库

本仓库包含CIMA考试各级别的学习资料。

## 目录结构

- **certificate**: Certificate Level 资料
- **operational**: Operational Level 资料
- **management**: Management Level 资料
- **strategic**: Strategic Level 资料

每个级别按文件类型分类：
- **pdf**: PDF文档
- **ppt**: PowerPoint演示文稿
- **excel**: Excel练习册和模板
- **word**: Word文档

## 使用方法

点击文件名可以直接下载。或使用以下命令克隆整个仓库：

\`\`\`bash
git clone https://github.com/JinghanHuang11/cima-resources.git
\`\`\`

" > README.md

# 提交初始结构
git add .
git commit -m "Initial repository structure"
git push origin main
```

对DMA仓库执行类似操作：

```bash
# 克隆DMA仓库
git clone https://github.com/JinghanHuang11/dma-resources.git
cd dma-resources

# 创建DMA资料目录结构
mkdir -p dmai/pdf
mkdir -p dmai/ppt
mkdir -p dmai/excel
mkdir -p dmai/word

mkdir -p dmaii/pdf
mkdir -p dmaii/ppt
mkdir -p dmaii/excel
mkdir -p dmaii/word

# 创建README文件
echo "# DMA 学习资料仓库

本仓库包含DMAI和DMAII的学习资料。

## 目录结构

- **dmai**: DMAI - Digital Management Accounting 资料
- **dmaii**: DMAII - Advanced Digital Management Accounting 资料

每个级别按文件类型分类：
- **pdf**: PDF文档
- **ppt**: PowerPoint演示文稿
- **excel**: Excel练习册和模板
- **word**: Word文档

## 使用方法

点击文件名可以直接下载。或使用以下命令克隆整个仓库：

\`\`\`bash
git clone https://github.com/JinghanHuang11/dma-resources.git
\`\`\`

" > README.md

# 提交初始结构
git add .
git commit -m "Initial repository structure"
git push origin main
```

---

## 📁 文件命名规范

使用清晰的英文或拼音命名，避免中文文件名：

### CIMA 文件命名示例
```
certificate/pdf/C01-Fundamentals-of-Management-Accounting.pdf
certificate/ppt/C01-Teaching-Slides.pptx
certificate/excel/C01-Practice-Questions.xlsx
certificate/word/C01-Course-Notes.docx

operational/pdf/E1-Managing-Finance-Digital-World.pdf
operational/ppt/E1-Lecture-Slides.pptx
operational/excel/E1-Practice-Questions.xlsx
management/pdf/F2-Advanced-Financial-Reporting.pdf
strategic/pdf/P3-Risk-Management.pdf
```

### DMA 文件命名示例
```
dmai/pdf/DMAI-Fundamentals.pdf
dmai/ppt/DMAI-Introduction.pptx
dmai/excel/DMAI-Practice-Questions.xlsx
dmai/word/DMAI-Study-Notes.docx

dmaii/pdf/DMAII-Advanced-Digital.pdf
dmaii/ppt/DMAII-Automation.pptx
dmaii/excel/DMAII-Dashboards.xlsx
dmaii/word/DMAII-Exam-Guide.docx
```

---

## 📤 上传文件到仓库

### 方法 1: 通过网页上传（适合小文件）

1. 访问仓库页面（如 https://github.com/JinghanHuang11/cima-resources）
2. 点击 "Upload files"
3. 将文件拖拽到对应目录
4. 在页面底部填写提交信息
5. 点击 "Commit changes"

### 方法 2: 通过命令行（推荐）

```bash
# 复制文件到对应目录
cp /path/to/your/C01-Fundamentals.pdf cima-resources/certificate/pdf/

# 进入仓库目录
cd cima-resources

# 添加文件
git add certificate/pdf/C01-Fundamentals.pdf

# 提交
git commit -m "Add C01 fundamentals PDF"

# 推送到GitHub
git push origin main
```

---

## 🔗 获取文件的下载链接

上传文件后，获取下载链接的格式为：

### 原始文件下载链接（推荐）
```
https://github.com/JinghanHuang11/cima-resources/raw/main/certificate/pdf/C01-Fundamentals.pdf
```

### 文件预览链接
```
https://github.com/JinghanHuang11/cima-resources/blob/main/certificate/pdf/C01-Fundamentals.pdf
```

---

## ✅ 更新网站中的资源数据

上传文件后，需要更新网站的数据文件以添加新资源：

### 1. 更新 CIMA 资源数据

编辑 `src/data/cima-resources.ts`，添加新的资源条目：

```typescript
{
  id: 'cert-c01-fundamentals',
  title: {
    en: 'C01 Fundamentals of Management Accounting',
    zh: 'C01 管理会计基础',
  },
  description: {
    en: 'Complete study text for C01 exam',
    zh: 'C01 考试完整学习文本',
  },
  level: 'certificate',
  type: 'pdf',
  fileUrl: 'https://github.com/JinghanHuang11/cima-resources/raw/main/certificate/pdf/C01-Fundamentals.pdf',
  fileSize: '3.2 MB',
  date: '2024-01',
},
```

### 2. 更新 DMA 资源数据

编辑 `src/data/dma-resources.ts`，添加新的资源条目：

```typescript
{
  id: 'dmai-fundamentals',
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
```

---

## 📊 资源分类参考

### CIMA 级别分类
- **Certificate Level**: C01-C04 基础证书
- **Operational Level**: E1, P1, F1 运营级别
- **Management Level**: E2, P2, F2 管理级别
- **Strategic Level**: E3, P3, F3 战略级别

### DMA 级别分类
- **DMAI**: 数字管理会计基础
- **DMAII**: 高级数字管理会计

### 文件类型分类
- **PDF**: 学习指南、讲义、笔记
- **PPT**: 教学课件、演示文稿
- **Excel**: 习题集、模板、财务模型
- **Word**: 课程笔记、考试指南

---

## 🎯 下一步操作

1. ✅ 在GitHub上创建两个仓库
2. ✅ 按照目录结构组织文件
3. ✅ 上传学习资料文件
4. ✅ 更新网站的数据文件（cima-resources.ts 和 dma-resources.ts）
5. ✅ 测试网站上的下载链接是否正常工作

---

## ❓ 常见问题

**Q: 文件太大无法上传怎么办？**
A: GitHub单个文件限制为100MB。如果文件更大，考虑：
- 压缩文件（如使用zip）
- 使用Git LFS（Large File Storage）
- 使用云存储服务（如阿里云OSS）

**Q: 如何批量上传多个文件？**
A: 使用命令行的git命令批量添加：
```bash
git add certificate/pdf/*
git commit -m "Add all certificate PDFs"
git push origin main
```

**Q: 如何删除或替换文件？**
A: 直接在GitHub网页上删除旧文件，然后上传新文件。或使用命令行：
```bash
git rm certificate/pdf/old-file.pdf
git add certificate/pdf/new-file.pdf
git commit -m "Replace old file with new version"
git push origin main
```

**Q: 如何设置文件下载统计？**
A: GitHub不提供原生下载统计。可以使用第三方服务如：
- GitHub Releases（发布版本）
- Cloudflare Analytics
- 自建统计服务

---

需要帮助？随时联系！
