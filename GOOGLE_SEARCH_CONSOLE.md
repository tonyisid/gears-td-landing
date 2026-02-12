# Google Search Console 提交指南

## ✅ 已完成的配置

### 1. 自定义域名
- **域名：** https://gears.gemini-game.com/
- **CNAME：** 已创建并推送到 GitHub
- **所有 URL：** 已更新为新域名

### 2. SEO 优化
- ✅ Meta 标签（Title, Description, Keywords）
- ✅ Open Graph 标签（Facebook/LinkedIn 分享）
- ✅ Twitter Card 标签
- ✅ 结构化数据（Schema.org JSON-LD）
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ 语义化 HTML（Alt 文本，Heading 标签）

---

## 📋 下一步：提交到 Google Search Console

### 步骤 1：添加资源到 Google Search Console

1. 访问：https://search.google.com/search-console
2. 点击左侧菜单 **"资源"** → **"添加资源"**
3. 选择 **"网址前缀"**
4. 输入：`https://gears.gemini-game.com/`
5. 点击 **"继续"**

### 步骤 2：验证网站所有权

**方法 A：HTML 标记验证（推荐）**

1. 选择 **"HTML 标记"** 验证方式
2. 复制 Google 提供的 meta 标签，例如：
   ```html
   <meta name="google-site-verification" content="xxxxxxxxxxxxxxxxxxxxxxx" />
   ```
3. 将此标签添加到 `<head>` 部分
4. 提交代码
5. 点击 **"验证"**

**方法 B：Google Analytics（如果已有）**

如果网站已安装 Google Analytics，可以直接用它来验证。

### 步骤 3：提交 Sitemap

验证成功后：

1. 在左侧菜单选择 **"站点地图"**
2. 点击 **"添加新的站点地图"**
3. 输入站点地图 URL：`https://gears.gemini-game.com/sitemap.xml`
4. 点击 **"提交"**

### 步骤 4：请求编入索引

1. 在左侧菜单选择 **"网址检查"**
2. 输入首页 URL：`https://gears.gemini-game.com/`
3. 点击 **"请求编入索引"**
4. 对以下重要页面重复此步骤：
   - 首页：`https://gears.gemini-game.com/`
   - 游戏特色：`https://gears.gemini-game.com/#features`
   - Google Play：`https://play.google.com/store/apps/details?id=com.defense.tower.gears.merge`

---

## 🔍 索引状态检查

提交后，Google 通常需要 **几天到几周** 来索引新网站。

你可以通过以下方式检查索引状态：

1. **Google 搜索：** `site:gears.gemini-game.com`
2. **Search Console：** 查看"覆盖率"报告
3. **网址检查：** 检查特定页面的索引状态

---

## 📊 Search Console 使用建议

### 1. 监控核心指标

| 指标 | 说明 |
|--------|------|
| **总展示次数** | 网站在搜索结果中出现的次数 |
| **总点击次数** | 用户点击搜索结果的次数 |
| **点击率 (CTR)** | 点击次数 / 展示次数 |
| **平均排名** | 网站在搜索结果中的平均位置 |

### 2. 优化关键词

查看"搜索结果"报告，了解：
- 用户搜索什么关键词找到你的网站
- 哪些关键词带来最多流量
- 哪些关键词需要优化

### 3. 修复问题

在"覆盖率"和"增强"报告中：
- 查看被排除的网址
- 修复索引错误
- 改进移动端可用性

---

## 🎯 下一步 SEO 建议

### 短期（1-2 周）

- [ ] 提交网站到 Google Search Console
- [ ] 提交 Sitemap
- [ ] 请求编入索引（首页 + 重要页面）
- [ ] 设置 Google Analytics（如果还没有）
- [ ] 创建 Robots.txt 测试

### 中期（1-2 月）

- [ ] 监控搜索流量和关键词
- [ ] 优化点击率低的关键词
- [ ] 建设外链（游戏论坛、社交媒体）
- [ ] 创建博客内容（游戏攻略、更新日志）

### 长期（3-6 月）

- [ ] 定期更新内容
- [ ] 分析竞争对手 SEO
- [ ] 优化技术 SEO（页面速度、移动友好）
- [ ] 建设品牌搜索

---

## 🔗 有用的工具

| 工具 | 用途 | URL |
|--------|------|-----|
| **Google Search Console** | 提交和监控 | https://search.google.com/search-console |
| **Google Analytics** | 流量分析 | https://analytics.google.com |
| **PageSpeed Insights** | 页面速度测试 | https://pagespeed.web.dev/ |
| **Mobile-Friendly Test** | 移动端测试 | https://search.google.com/test/mobile-friendly |
| **Schema Validator** | 结构化数据验证 | https://validator.schema.org/ |
| **Rich Results Test** | 富媒体结果测试 | https://search.google.com/test/rich-results |

---

## ✅ 快速检查清单

在提交到 Google 之前，确认：

- [ ] 域名 DNS 已正确配置（CNAME 记录）
- [ ] 网站可以访问（https://gears.gemini-game.com/）
- [ ] 所有页面都有正确的 Meta 标签
- [ ] 所有图片都有 Alt 文本
- [ ] Sitemap.xml 可以访问
- [ ] Robots.txt 允许搜索引擎爬取
- [ ] 网站在移动端正常显示
- [ ] 页面加载速度可接受（< 3 秒）

---

完成提交后，等待几天让 Google 爬取和索引你的网站！
