# Miles Notes

Miles Zhang的个人博客，基于 **Astro 5 + Markdown** 的纯静态站点。首页开场的手写动画由 [Tegaki](https://tegaki.ink/) 在构建期生成 SVG，不依赖运行时 JavaScript 或外部字体。

## 本地开发

```bash
npm install
npm run dev
```

## 写文章

在 `src/content/blog/` 新建 `.md` 文件，frontmatter 格式：

```md
---
title: "文章标题"
description: "一句话摘要"
date: 2026-10-25
tags: ["技术", "随笔"]
draft: false
---

正文……
```

## 构建与部署

```bash
npm run build
```

构建产物在 `dist/`。当前部署目录：

```bash
/opt/1panel/www/sites/spock.bbs0.cc/index
```

同步方式：

```bash
cp -a /opt/personal-blog/dist/. /opt/1panel/www/sites/spock.bbs0.cc/index/
```

站点通过海外 FRP（`frpc-overseas.service`）对外提供服务。

## 目录结构

- `src/pages/`：首页、文章列表、文章详情、标签、关于、RSS
- `src/pages/lab/reactbits.astro`：React Bits 动效展示页（`/lab/reactbits/`）
- `src/content/blog/`：Markdown 文章
- `src/layouts/BaseLayout.astro`：页面骨架与主题切换
- `src/styles/global.css`：全局样式
- `design/`：实际页面截图

## 设计稿

Penpot 中的设计文件包含三个画板：

- 首页 / 博客 Home
- 文章页 / 博客 Article
- 首页 / 移动端 Mobile
