---
title: "Insert raw HTML in Hugo with a simple shortcode"
date: 2022-04-01T14:58:00Z
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
I love to use Markdown to write my notes to help me learn new things.

And sometimes, if I forget something, I can use my notes to help me remember how to do it.

But Markdown in a table or some layouts is not pretty to use, so I have to insert raw HTML to help me create a stunning table or some designs you want.

## What a Shortcode is?

Hugo loves Markdown because of its simple content format, but there are times when Markdown falls short. Often, content authors are forced to add raw HTML (e.g., video `<iframe>`’s) to Markdown content. We think this contradicts the beautiful simplicity of Markdown’s syntax.

Hugo created shortcodes to circumvent these limitations.

Here is how to create your own custom `shortcode` to make that possible.

Add a shortcode template to your site in `layouts/shortcodes/rawhtml.html`, with the content below:

    <!-- raw html -—>
    {{.Inner}}

This shortcode template tells Hugo to render the inner content passed to your shortcode directly into the HTML of your site.

You can use this shortcode in your `.md` file, it will like below:

```
    {{</* rawhtml */>}}
        <p class="speshal-fancy-custom">
            This is raw HTML, inside Markdown.
        </p>
    {{</* /rawhtml */>}}
```

## References

[shortcodes](https://gohugo.io/content-management/shortcodes/)