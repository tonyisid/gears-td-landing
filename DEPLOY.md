# 🚀 Gears Tower Defense - 部署指南

## ⚠️ GitHub 令牌权限问题

由于你提供的 GitHub 令牌没有创建仓库的权限，我无法自动推送代码。

**解决方法：** 请手动选择以下任一方案。

---

## 🎯 推荐方案（按速度排序）

### 方案 1：Netlify Drop ⭐ 最快（30 秒）

1. **访问：** https://app.netlify.com/drop
2. **拖拽文件夹：** `/root/.openclaw/workspace/gears-td-landing/` 到网页
3. **等待 10 秒** → 自动获得 HTTPS 链接

**优点：**
- ✅ 无需注册
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 免费

---

### 方案 2：Tiiny Host（无需注册）

1. **访问：** https://tiiny.host
2. **上传文件：** `/root/.openclaw/workspace/gears-td-landing/index.html`
3. **立即获得链接**

---

### 方案 3：Surge.sh（命令行）

```bash
cd /root/.openclaw/workspace/gears-td-landing
surge
```

按提示操作即可。

---

### 方案 4：GitHub Pages（完全免费）

#### 步骤 1：创建 GitHub 仓库

1. 访问：https://github.com/new
2. 仓库名：`gears-td-landing`
3. 选择 **Public**
4. 点击 **Create repository**

#### 步骤 2：推送代码

```bash
cd /root/.openclaw/workspace/gears-td-landing.github
git remote add origin https://github.com/tonyisid/gears-td-landing.git
git push -u origin main
```

#### 步骤 3：启用 GitHub Pages

1. 访问：https://github.com/tonyisid/gears-td-landing/settings/pages
2. Source: **Deploy from a branch**
3. Branch: **main / (root)**
4. 点击 **Save**

#### 步骤 4：访问网站

等待 1-2 分钟，访问：
**https://tonyisid.github.io/gears-td-landing/**

---

## 📁 文件位置

所有网站文件都在：
```
/root/.openclaw/workspace/gears-td-landing/
├── index.html          # 主页面
├── style.css           # 样式
├── script.js           # 交互
├── vercel.json        # Vercel 配置
├── README.md          # 说明文档
└── DEPLOY_GUIDE.html # 本部署指南
```

---

## ✅ 已完成的工作

- ✅ 响应式 HTML 页面（蒸汽朋克主题）
- ✅ 完整 CSS 样式（动画、响应式）
- ✅ JavaScript 交互（滚动动画、齿轮旋转）
- ✅ SEO 优化（Meta 标签、关键词）
- ✅ 多处 CTA 按钮（Google Play 链接）
- ✅ Git 仓库初始化（已提交）
- ✅ 本地服务器运行（http://localhost:8000）

---

## 🎨 网站特色

- **蒸汽朋克设计**：齿轮旋转动画、金属质感配色
- **响应式布局**：完美适配手机、平板、电脑
- **流畅动画**：渐变背景、悬停效果、滚动触发
- **SEO 优化**：语义化 HTML、Meta 标签
- **转化优化**：多处 CTA 按钮、清晰价值主张

---

## 🎯 推荐操作

**最快方案：Netlify Drop（30 秒搞定）**

1. 打开：https://app.netlify.com/drop
2. 拖拽 `/root/.openclaw/workspace/gears-td-landing/` 文件夹
3. 完成！获得 HTTPS 链接

---

有问题随时问我！
