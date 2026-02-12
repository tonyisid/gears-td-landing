# Gears Tower Defense - 官网部署指南

## 📁 文件结构

```
gears-td-landing/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js      # 交互脚本
└── README.md      # 本文件
```

## 🚀 本地部署

### 方法 1：使用 Python（推荐）

```bash
# Python 3.x
cd /root/.openclaw/workspace/gears-td-landing
python3 -m http.server 8000

# 访问：http://localhost:8000
```

### 方法 2：使用 Node.js

```bash
# 全局安装 http-server
npm install -g http-server

# 启动
cd /root/.openclaw/workspace/gears-td-landing
http-server -p 8000

# 访问：http://localhost:8000
```

### 方法 3：直接用浏览器打开

```bash
# 直接双击 index.html 文件
# 或在浏览器中打开 file:///root/.openclaw/workspace/gears-td-landing/index.html
```

## 🎨 网站特色

### 设计风格
- **蒸汽朋克主题**：齿轮动画、金属质感的配色方案
- **响应式设计**：完美适配桌面、平板和手机
- **流畅动画**：渐变背景、悬停效果、滚动触发动画

### 页面结构
1. **Hero 区**：首屏大标题 + 下载按钮 + 蒸汽朋克齿轮动画
2. **游戏特色**：6 个核心卖点卡片
3. **核心玩法**：4 步游戏流程介绍
4. **CTA 区**：最终行动号召
5. **页脚**：版权信息

## 📊 内容要点

### SEO 优化
- ✅ Meta 标签（描述、关键词）
- ✅ 语义化 HTML 标签
- ✅ 移动端友好

### 转化优化
- ✅ 多处 CTA 按钮
- ✅ 清晰的价值主张
- ✅ Google Play 直接下载链接

## 🔧 自定义修改

### 修改下载链接
编辑 `index.html`，搜索以下代码：
```html
https://play.google.com/store/apps/details?id=com.defense.tower.gears.merge
```
替换为你的实际链接。

### 修改配色
编辑 `style.css`，修改 `:root` 中的 CSS 变量：
```css
:root {
    --primary-gold: #d4a537;      /* 金色 */
    --primary-bronze: #a67c32;    /* 青铜色 */
    --primary-copper: #b87333;    /* 铜色 */
    --bg-dark: #0a0e1a;          /* 深色背景 */
}
```

### 添加图片/视频
在 Hero 区添加视频：
```html
<div class="hero-video">
    <video autoplay muted loop playsinline>
        <source src="your-video.mp4" type="video/mp4">
    </video>
</div>
```

## 📱 浏览器兼容性

- ✅ Chrome/Edge (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ 移动端浏览器

## 🚀 下一步

### 优化建议
1. 添加实际游戏截图/视频
2. 添加 Press Kit 页面（供媒体下载素材）
3. 添加预注册表单（如果游戏未上线）
4. 添加社交媒体链接
5. 添加 Google Analytics 追踪代码

### 生产环境部署
- **Vercel/Netlify**：免费静态托管
- **GitHub Pages**：免费托管
- **自建服务器**：使用 Nginx/Apache

## 📞 支持

如有问题，联系开发团队。

---

⚙️ Gears Tower Defense - 蒸汽朋克塔防革命
