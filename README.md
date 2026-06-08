
本文档是本学术网站的日常维护、内容更新及部署指南。
网站基于 [al-folio](https://github.com/alshedivat/al-folio) Jekyll 主题构建。

---

## 1. 启动工作台与本地预览

日常修改建议在云端直接进行，无需在本地配置复杂的 Ruby/Jekyll 环境。

### 1.1 启动环境
1. 登录 GitHub 仓库页面。
2. 点击绿色的 **`<> Code`** 按钮。
3. 切换到 **`Codespaces`** 标签，点击 `Create codespace on main`（或打开已有实例）。
4. 等待浏览器加载完成 VS Code 界面。

### 1.2 启动本地预览服务器
在底部的 Terminal（终端）中，依次运行以下命令：

```bash
# 如果是首次启动或更新了依赖，先执行：
bundle install

# 启动本地服务器：
bundle exec jekyll serve

```

> **提示**：启动成功后，终端会显示 `Server address: http://127.0.0.1:4000/`。Codespace 右下角会弹窗提示，点击 `Open in Browser` 即可实时预览网页。修改任何文件后按 `Ctrl + S` 保存，网页会自动刷新。

---

## 2. 核心文件路径说明

修改特定内容时，请前往对应的目录寻找文件：

| 目录/文件 | 主要功能 |
| --- | --- |
| `_config.yml` | 全局配置：网站标题、导航栏菜单、社交媒体链接、Google Scholar ID 等全局变量设定。 |
| `_pages/about.md` | 首页内容：个人简介（Biography）、头像路径配置等。 |
| `_bibliography/papers.bib` | 论文数据库：所有的出版物、期刊、会议文献都在这个 BibTeX 文件中管理。 |
| `_projects/` | 项目展示：科研项目（如 `wireless_sensing.md`）的具体介绍页面。 |
| `_news/` | 新闻动态：首页的最新消息（Announcements），每个 markdown 文件代表一条新闻。 |
| `assets/img/` | 图片库：存放头像、项目预览图、PPT 截图等静态图片资源。 |

---

## 3. 常见内容更新指南

### 3.1 更新个人基础信息

* **修改网站大标题、社交账号、邮箱**：打开 `_config.yml`，搜索对应字段（如 `email`, `github_username`）进行替换。
* **修改首页个人简介**：打开 `_pages/about.md`，直接修改正文内容。
* **修改首页头像**：替换 `assets/img/prof_pic.jpg` 文件，或在 `_pages/about.md` 中修改 `profile: image:` 的路径。

### 3.2 更新 News（新闻动态）

1. 进入 `_news/` 文件夹。
2. 新建一个 Markdown 文件，命名格式必须为 `YYYY-MM-DD-标题.md`（例如 `2026-05-29-new-paper.md`）。
3. 写入头部信息和正文内容：

```markdown
---
layout: post
title: 一句话新闻标题
date: 2026-05-29 11:36:00-0400
inline: true
---
这里是具体的新闻内容，支持 Markdown 语法。

```

> **注**：将 `inline` 设为 `true`，新闻就会直接显示在首页的列表中；设为 `false` 则会生成一个单独的详情页。

### 3.3 更新 Publications（论文与出版物）

所有的文献均由 `_bibliography/papers.bib` 驱动。

* **新增论文**：将标准的 BibTeX 格式代码粘贴到 `papers.bib` 文件中。
* **设置为首页高亮展示 (Selected)**：在对应的 BibTeX 条目内部，增加一行 `selected={true}`。

```bibtex
@article{zhang2021devicefree,
  title={A PRR and SNR Aided Localization System...},
  author={Zhang, D. and others},
  journal={IEEE Transactions on Mobile Computing},
  year={2021},
  selected={true}
}

```

* **添加 PDF 或项目链接**：在条目中加入 `pdf={your_paper.pdf}` 或 `html={https://...}`，网页会自动生成对应的按钮。

### 3.4 更新引用数 (Citation Counts)

al-folio 支持自动拉取引用数，无需手动频繁修改：

1. 打开 `_config.yml`。
2. 找到 `scholar:` 配置块，填入你的 Google Scholar ID：

```yaml
scholar_userid: "你的谷歌学术ID"

```

3. 确保你的 `papers.bib` 文件中，文章的标题与 Google Scholar 上的完全一致，系统编译时会自动生成类似 `[Citations: 12]` 的徽章。

> **提示**：如果需要手动显示特定徽章，可以在 `papers.bib` 的特定条目下添加 `dimensions={true}` 开启 Dimensions 引用统计。

---

## 4. 打包与上线发布 (Deployment)

当你在 Codespace 中改好了代码并确认预览无误后，通过 Git 将代码提交，GitHub Actions 会自动完成打包和上线。在终端执行以下三条命令：

```bash
# 1. 追踪所有修改过的文件
git add .

# 2. 提交修改说明 (引号内的文字可随意修改，方便日后回溯)
git commit -m "Update publication and news for May 2026"

# 3. 推送到远端仓库
git push

```

执行完 `git push` 后，可以关闭 Codespace。前往 GitHub 仓库主页，点击 `Actions` 标签页，看到绿色的 `✓` 即代表网站已成功更新上线。

