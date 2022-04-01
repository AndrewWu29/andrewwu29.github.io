---
title: "How to escape Hugo shortcode"
date: 2022-04-02T10:58:00Z
tags: ["Hugo", "note", "shortcode", "HTML"]
categories: ["Note", "Hugo", "HTML"]
author: "Andrew Wu"
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: true
disableHLJS: true
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowCodeCopyButtons: true
---
Sometimes you need to write about shortcodes, as I do in [Insert raw HTML in Hugo with a simple shortcode](https://andrewu.page/2022/04/insert-raw-html-in-hugo-with-a-simple-shortcode/), you need to escape these shortcode calls.

Hugo uses the following syntax to escape these delimiters in the a content source file

    {{</* escape's_shortcode_name */>}}

    {{%/* /escape's_shortcode_name */%}}