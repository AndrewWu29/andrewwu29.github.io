---
title: "如何添加Google Analytics到Hugo?"
date: 2022-02-04T14:25:00Z
# weight: 1
# aliases: ["/AirTag"]
tags: ["Hugo", "筆記", "GoogleAnalytics"]
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
## 什麼是Google Analytics?

Google Analytics是一個網站分析服務，它提供統計和基本分析的工具，給搜尋引擎最佳化和行銷目的。這個服務是一部分Google行銷平台並免費提供給任何有Google帳號的用戶使用。

## 如何添加google analytics到Hugo網站?

### 步驟一: 建立一個[google帳號](https://accounts.google.com/signup/v2/webcreateaccount?service=analytics&continue=https%3A%2F%2Fanalytics.google.com%2Fanalytics%2Fweb%2F&hl=en&dsh=S923789982%3A1643982945903281&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp&nogm=true)

### 步驟二: 到[google analytics](https://analytics.google.com/analytics/web/provision/#/provision)網站

### 步驟三:  在google analytics設定好您要分析的網站資訊

### 步驟四: 取得您給google analytics分析的ID

### 步驟五: 編輯您Hugo的config.yml

添加 `googleAnalytics: G-MEASUREMENT_ID` 到您的config.yml檔案。

### 步驟六: 添加google analytics模板到您Hugo的主題

添加 `{{ template "_internal/google_analytics.html" . }}` 到您的主題底下的head.html檔案 `<head>` 區塊內

## 參考資源

[DEFINITION Google Analytics](https://searchbusinessanalytics.techtarget.com/definition/Google-Analytics)

[Google Analytics](https://analytics.google.com/analytics/web/provision/#/provision)

[Internal Templates | Hugo](https://gohugo.io/templates/internal/)
