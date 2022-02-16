---
title: "How to add an RSS feed to your Hugo PaperMod theme?"
date: 2022-02-06T12:52:00Z
# weight: 1
# aliases: ["/AirTag"]
tags: ["Hugo", "Note", "PaperMod", "RSS", "RSS feed"]
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
Hugo is a popular static site generator, and PaperMod comes with a default RSS 2.0 template.

## What is an RSS feed?

RSS stands for Really Simple Syndication, and it’s is a simple, standardized content distribution method that can help you stay up-to-date with your favorite newscasts, blogs, websites, and social media channels.

Means supported an RSS feed function on your blog, can keep those who follow you up-to-date with your newest posts.

## Add an RSS feed on your Hugo PaperMod theme only three steps

### Step 1: Ensure `RSS` is listed as an `output` format inside your `config.yml` file

### Step 2: Add an RSS feed icon on your site

### Step 3: Enable full content support generated RSS XML file

So your `config.yml` file must include as below code:

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

**After finishing the above steps, now your Hugo PaperMod theme site can support an RSS feed.**

## References

[Setting up an RSS feed for a Hugo blog using the PaperMod Theme](https://link.medium.com/8MgjDu9vqnb)