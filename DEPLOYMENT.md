# Vercel 部署指南

## 方法一：通过 Vercel 网站部署（推荐，最简单）

### 步骤：

1. **注册/登录 Vercel**
   - 访问：https://vercel.com
   - 点击 "Sign Up" 或 "Log In"
   - 选择 "Continue with GitHub"（使用您的 GitHub 账号登录）

2. **导入项目**
   - 登录后，点击 "Add New" → "Project"
   - 在 "Import Git Repository" 列表中找到 `JinghanHuang11.github.io`
   - 点击 "Import"

3. **配置项目**
   - **Framework Preset**: Vercel 会自动检测为 "Astro"
   - **Root Directory**: 保持默认 `./`
   - **Build Command**: 应该自动填充为 `npm run build`
   - **Output Directory**: 应该自动填充为 `dist`
   - **Install Command**: 应该自动填充为 `npm install`

4. **环境变量（可选）**
   - 如果需要设置环境变量，在 "Environment Variables" 部分添加
   - 当前项目不需要额外配置

5. **部署**
   - 点击 "Deploy" 按钮
   - 等待 30-60 秒，部署完成
   - 您会获得一个类似 `https://jane-portfolio-xxxxx.vercel.app` 的链接

6. **自定义域名（可选）**
   - 在项目设置中，点击 "Domains"
   - 您可以：
     - 使用免费的 Vercel 域名（如 `jane-portfolio.vercel.app`）
     - 绑定自己的域名（如 `jinghanhuang.com`）

---

## 方法二：通过 Vercel CLI 部署

### 安装 Vercel CLI：

```bash
npm install -g vercel
```

### 登录：

```bash
vercel login
```

### 部署：

```bash
# 在项目根目录执行
vercel
```

### 按提示操作：
1. 登录您的 Vercel 账号
2. 选择是否要链接到现有项目（第一次选 "No"）
3. 确认项目设置
4. 等待部署完成

### 生产环境部署：

```bash
vercel --prod
```

---

## 自动部署配置

部署完成后，每次您推送代码到 GitHub，Vercel 会自动重新部署。

### 查看部署状态：
- 访问您的 Vercel Dashboard
- 进入项目页面
- 查看 "Deployments" 标签

---

## 两个平台同时部署

您可以同时在 GitHub Pages 和 Vercel 上部署：

### GitHub Pages：
- **地址**: https://JinghanHuang11.github.io
- **用途**: 长期稳定的官方网站
- **更新**: 每次推送到 main 分支自动部署

### Vercel：
- **地址**: https://[your-project].vercel.app
- **用途**: 快速预览和分享
- **更新**: 每次推送到 main 分支自动部署
- **优势**: 速度快，全球 CDN，预览部署

---

## 部署后检查清单

✅ 网站可以正常访问
✅ 所有页面链接正常（/zh/, /about, /projects 等）
✅ 图片和资源文件正常加载
✅ 语言切换功能正常
✅ CIMA 资源链接可以跳转到 GitHub
✅ 移动端显示正常

---

## 常见问题

### Q: 部署失败怎么办？
A: 检查 Vercel 的部署日志，通常是构建错误或依赖安装失败

### Q: 如何回滚到之前的版本？
A: 在 Vercel Dashboard → Deployments → 找到之前的版本 → 点击 "Promote to Production"

### Q: 如何添加自定义域名？
A: Vercel Dashboard → Your Project → Settings → Domains → Add Domain

### Q: Vercel 免费额度？
A:
- 100GB 带宽/月
- 无限部署
- 无限站点
- 自动 HTTPS
- 全球 CDN

对于个人作品集网站，免费版完全够用！

---

## 下一步

1. 按照**方法一**的步骤在 Vercel 网站上部署
2. 部署完成后，您会获得一个可分享的链接
3. 将链接分享给您的同伴！

需要帮助？
- Vercel 文档：https://vercel.com/docs
- Astro 部署指南：https://docs.astro.build/en/guides/deploy/vercel/
