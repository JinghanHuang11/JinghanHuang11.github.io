# GitHub 仓库创建指南

## 需要创建的仓库

您需要创建以下两个 GitHub 仓库来存放学习资源：

---

## 1. DMA Resources 仓库

### 仓库名称
`dma-resources`

### 完整 URL
https://github.com/JinghanHuang11/dma-resources

### 目录结构
```
dma-resources/
├── DMAI/
│   ├── (您的 DMA I 学习资料)
│   ├── 讲义、笔记、作业等文件
│   └── ...
└── DMAII/
    ├── (您的 DMA II 学习资料)
    ├── 讲义、笔记、作业等文件
    └── ...
```

### 创建步骤

1. **创建新仓库**
   - 访问：https://github.com/new
   - Repository name: `dma-resources`
   - Description: `Digital Marketing Analytics learning materials including DMA I and DMA II course resources`
   - 选择 **Public**（公开）
   - **不要**勾选 "Add a README file"
   - 点击 "Create repository"

2. **创建目录结构**
   - 在仓库页面，点击 "Add file" → "Create new file"
   - 文件名输入：`DMAI/.gitkeep`（这会创建 DMAI 文件夹）
   - 点击 "Commit changes"
   - 重复以上步骤创建 `DMAII/.gitkeep`

3. **上传文件**
   - 进入 `DMAI` 文件夹
   - 点击 "Add file" → "Upload files"
   - 拖拽或选择您的 DMA I 学习资料
   - 在提交信息框输入文件描述
   - 点击 "Commit changes" 直接提交
   - 重复相同步骤上传 DMA II 的文件

---

## 2. GBC Case Study 仓库

### 仓库名称
`gbc-case-study`

### 完整 URL
https://github.com/JinghanHuang11/gbc-case-study

### 目录结构
```
gbc-case-study/
├── 2024GBC/
│   ├── (您的 2024 年 GBC 案例资料)
│   ├── 案例分析、演示文稿、报告等
│   └── ...
└── 2025GBC/
    ├── (您的 2025 年 GBC 案例资料)
    ├── 案例分析、演示文稿、报告等
    └── ...
```

### 创建步骤

1. **创建新仓库**
   - 访问：https://github.com/new
   - Repository name: `gbc-case-study`
   - Description: `Global Business Competition case studies and analysis materials for 2024 and 2025`
   - 选择 **Public**（公开）
   - **不要**勾选 "Add a README file"
   - 点击 "Create repository"

2. **创建目录结构**
   - 在仓库页面，点击 "Add file" → "Create new file"
   - 文件名输入：`2024GBC/.gitkeep`（这会创建 2024GBC 文件夹）
   - 点击 "Commit changes"
   - 重复以上步骤创建 `2025GBC/.gitkeep`

3. **上传文件**
   - 进入 `2024GBC` 文件夹
   - 点击 "Add file" → "Upload files"
   - 拖拽或选择您的 2024 年 GBC 案例资料
   - 在提交信息框输入文件描述
   - 点击 "Commit changes" 直接提交
   - 重复相同步骤上传 2025 年的文件

---

## 网页链接说明

### DMA Study Resources 卡片
- **View Details**: 跳转到 `/dma-resources` 页面
- **GitHub 链接**: https://github.com/JinghanHuang11/dma-resources
- **科目链接**:
  - DMA I: https://github.com/JinghanHuang11/dma-resources/tree/main/DMAI
  - DMA II: https://github.com/JinghanHuang11/dma-resources/tree/main/DMAII

### GBC Case Study 卡片
- **View Details**: 跳转到 `/gbc-case-study` 页面
- **GitHub 链接**: https://github.com/JinghanHuang11/gbc-case-study
- **年份链接**:
  - 2024GBC: https://github.com/JinghanHuang11/gbc-case-study/tree/main/2024GBC
  - 2025GBC: https://github.com/JinghanHuang11/gbc-case-study/tree/main/2025GBC

---

## 批量上传文件的方法

### 方法一：GitHub 网页界面（适合少量文件）
1. 进入对应的文件夹
2. 点击 "Upload files"
3. 选择多个文件拖拽上传
4. 提交更改

### 方法二：Git 命令行（适合大量文件）

#### DMA Resources
```bash
# 克隆仓库到本地
git clone https://github.com/JinghanHuang11/dma-resources.git
cd dma-resources

# 创建目录
mkdir DMAI DMAII

# 复制文件到对应目录
# (将您的文件复制到 DMAI 和 DMAII 文件夹)

# 提交
git add .
git commit -m "Add DMA learning materials"
git push origin main
```

#### GBC Case Study
```bash
# 克隆仓库到本地
git clone https://github.com/JinghanHuang11/gbc-case-study.git
cd gbc-case-study

# 创建目录
mkdir 2024GBC 2025GBC

# 复制文件到对应目录
# (将您的文件复制到 2024GBC 和 2025GBC 文件夹)

# 提交
git add .
git commit -m "Add GBC case study materials"
git push origin main
```

### 方法三：GitHub Desktop（图形界面）
1. 下载 GitHub Desktop: https://desktop.github.com/
2. 登录您的 GitHub 账号
3. File → Clone Repository → 选择刚创建的仓库
4. 在文件管理器中复制文件到仓库文件夹
5. 在 GitHub Desktop 中提交并推送

---

## 完成检查清单

### DMA Resources 仓库
- [ ] 仓库已创建：https://github.com/JinghanHuang11/dma-resources
- [ ] DMAI 文件夹已创建
- [ ] DMAII 文件夹已创建
- [ ] 学习资料已上传
- [ ] 网页链接可以正常访问

### GBC Case Study 仓库
- [ ] 仓库已创建：https://github.com/JinghanHuang11/gbc-case-study
- [ ] 2024GBC 文件夹已创建
- [ ] 2025GBC 文件夹已创建
- [ ] 案例资料已上传
- [ ] 网页链接可以正常访问

---

## 常见问题

### Q: 为什么要创建公开仓库？
A: 公开仓库可以让任何人访问和下载资源，实现知识分享。如果只想自己访问，可以创建私有仓库，但网页上的链接将无法访问。

### Q: 可以后期更改仓库名称吗？
A: 可以，但需要同步更新网页配置文件中的链接。建议一次性命名正确。

### Q: 文件大小有限制吗？
A: 单个文件不能超过 100 MB。如果需要上传大文件，建议使用 Git LFS（Large File Storage）。

### Q: 如何删除错误的文件？
A: 在 GitHub 网页上找到文件 → 点击 "Delete" → 提交更改。

### Q: 可以上传文件夹吗？
A: GitHub 网页界面不支持直接上传文件夹，需要逐个上传文件，或使用 Git 命令行/GitHub Desktop。

---

## 下一步

1. 按照"创建步骤"在 GitHub 上创建两个仓库
2. 上传您的学习资料到对应目录
3. 在您的个人网站上测试链接是否正常工作
4. 如果使用 Vercel 部署，推送代码后网站会自动更新

---

需要帮助？
- GitHub 文档：https://docs.github.com
- Git 教程：https://git-scm.com/docs
- 如有问题，随时联系我！
