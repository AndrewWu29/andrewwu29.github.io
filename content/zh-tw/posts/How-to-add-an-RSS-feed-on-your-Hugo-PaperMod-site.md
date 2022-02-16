---
title: "如何添加RSS feed到您的Hugo PaperMod主題?"
date: 2022-02-06T12:52:00Z
# weight: 1
# aliases: ["/AirTag"]
tags: ["Hugo", "筆記", "PaperMod", "RSS", "RSS feed", "簡易資訊聚合"]
categories: ["Hugo", "筆記", "PaperMod", "RSS feed", "簡易資訊聚合"]
author: "Andrew Wu"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: true
#description: "template description!"
#canonicalURL: "https://canonical.url/to/page"
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowCodeCopyButtons: true
#cover:
#    image: "<image path/url>" # image path/url
#    alt: "<alt text>" # alt text
#    caption: "<text>" # display caption under cover
#    relative: true # when using page bundles set this to true
#    hidden: true # only hide on current single page
#editPost:
#    URL: "https://github.com/<path_to_repo>/content"
#    Text: "Suggest Changes" # edit text
#    appendFilePath: false # to append file path to Edit link
---
Hugo是一個熱門的靜態網站產生工具，而PaperMod本身就內建了RSS 2.0模板。

## 什麼是RSS feed?

RSS其實是「Really Simple Syndication」的簡稱，中文翻譯為簡易資訊據合，目的其實很簡單，主要提供一個標準化格式，將新聞、部落格、網站或是社交平台頻道的更新資訊彙整到一個頁面。

所以意思指，如果有支援RSS服務的話，可以讓那些追蹤者，可以更簡單的追蹤到您最新文章或資訊。

## 建立RSS feed到您的Hugo PaperMod主題，只要三步驟

### 步驟一: 確認`config.yml`檔案裡的`output`的清單有`RSS`

### 步驟二: 新增RSS feed圖示到您的網站

### 步驟三: 開啟所有文章內容支持產生RSS XML檔案

所以現在`config.yml`檔案裡應該要有以下的代碼::

```
params:
  ShowFullTextinRSS: true # Supports to show your whole contents in RSS, not just summary
  
  socialIcons:
    - name: rss # Shows an RSS feed icon on your site`
      url: "index.xml" # Your RSS feed url path

outputs:
    home:
        - HTML
        - RSS # Supports your site output including RSS format
        - JSON
```

**完成以上步驟後，現在您的Hugo PaperMod主題網站，已經可以支援RSS feed了。**

## 參考資料

[Setting up an RSS feed for a Hugo blog using the PaperMod Theme](https://link.medium.com/8MgjDu9vqnb)
