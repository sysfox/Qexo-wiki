# 使用短链接
这个教程将帮助你为博客接入唯一链接，使你的博客链接更加简洁。
## 接入短链接
安装 Hexo 插件
```shell
npm install hexo-abbrlink --save
```
在 `_config.yml` 文件中修改文章固定连接:
```yaml
permalink: posts/:abbrlink/     # 可改为你需要的连接，例如archives/:abbrlink.html
```
然后添加两个设置:
```yaml
# abbrlink 配置
abbrlink:
  alg: crc32      # 算法--支持 crc16(默认) 和 crc32
  rep: hex        # 进制--支持 dec(默认/十进制) and hex(十六进制)
  drafts: false   # (true)处理草稿/(false)默认不处理草稿
```
## 使用 Qexo 自动填写
首先，修改文章模板 `scaffolds/post.md` 添加 `abbrlink` 字段
```yaml
---
title: {{ title }}
date: {{ date }}
updated: {{ date }}
abbrlink: {{ abbrlink }}
categories: 
tags: 
---
```
接下来，修改 Qexo 设置中的 `短链接配置` ，其中的算法和进制对应上文

现在试着创建一个文章，你会发现文章的头部已经自动填写了 `abbrlink` 字段

