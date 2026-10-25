---
title: "用 Astro 搭一个不折腾的个人博客"
description: "从 Vite + Vue 简历站迁移到 Astro 静态博客的完整思路：内容用 Markdown，部署还是那台服务器。"
date: 2026-10-18
tags: ["技术", "Astro", "建站"]
---

## 为什么从 Vite 换成 Astro

原来的简历站是 Vite + Vue 的单页应用，做展示足够，但做博客有几个问题：

1. 每篇文章都要写一个 Vue 组件，写作体验不连贯
2. 文章内容没有统一的 frontmatter，列表、标签、RSS 都要自己维护
3. 页面全部由客户端渲染，SEO 和首屏加载都不占优势

Astro 的思路刚好相反：**默认输出静态 HTML，只有需要交互的地方才加载 JavaScript**。对于博客这种以内容为主的站点，非常合适。

## 内容组织

文章放在 `src/content/blog` 下，每篇一个 Markdown 文件：

```md
---
title: "文章标题"
description: "一句话摘要"
date: 2026-10-18
tags: ["技术", "Astro"]
---

正文从这里开始。
```

Astro 的 content collection 会自动校验 frontmatter 类型，构建时生成文章列表、标签页和 RSS。

## 部署方式

这部分和之前完全一样：

```bash
npm run build
# 把 dist/ 里的文件同步到 1Panel 站点目录
```

静态文件由 nginx 直接托管，不需要 Node 常驻，也不需要数据库。对个人博客来说，这是维护成本最低的方案。

## 接下来

先把首页、文章页、标签页和 RSS 跑通，再慢慢补评论、搜索和图片优化。内容比技术重要，先写起来。
