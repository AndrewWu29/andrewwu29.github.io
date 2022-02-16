---
title: "如何整合Disqus到您的Hugo網站?"
date: 2022-02-05T16:44:00Z
# weight: 1
# aliases: ["/AirTag"]
tags: ["Hugo", "筆記", "Disqus", "留言"]
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
## 什麼是Disqus?

是互聯網最受歡迎的評論外掛程式，使出版者可輕鬆將他們的內容更加靈活，增加豐富多元的討論，並有效地審核評論和建立社群。

## 手把手教學，教您整合Disqus到您的Hugo網站

### 步驟一: 註冊Disqus

### 步驟二: 安裝Disqus

### 步驟三: 選擇"I want to install Disqus on my site."

### 步驟四: 填寫表單資料

### 步驟五: 複製留言的模板，並建立disqus.html檔案在您的Hugo網站的檔案夾底下的layouts/partials，然後並貼上您獲得的留言模板

範本應該會長得跟下面的代碼一樣:

```
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    // Don't ever inject Disqus on localhost--it creates unwanted
    // discussions from 'localhost:1313' on your Disqus account...
    if (window.location.hostname == "localhost")
        return;


    var d = document, s = d.createElement('script');
    s.src = 'https://your_disqus_name.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
```

### 步驟六: 建立comments.html檔案在您的Hugo網站的檔案夾底下的layouts/partials，然後複製並貼上以下代碼到這個檔案裡面

```
{{- /* Comments area start */ -}}
{{- /* partial "disqus.html" . */ -}}
{{ template "_internal/disqus.html" . }}
{{- /* to add comments read => https://gohugo.io/content-management/comments/ */ -}}
{{- /* Comments area end */ -}}
```

### 步驟七: 增加Disqus簡稱`disqusShortname = "<your-disqus-shortname>"`到config.yml檔案裡

### 步驟八: 恭喜! 現在所有步驟都結束了，您可以發布到您的GitHub倉庫

## 參考資料

[Disqus](https://disqus.com)

[Internal Templates | Hugo](https://gohugo.io/templates/internal/)