---
title: "How to integrate Disqus into your Hugo site?"
date: 2022-02-05T16:44:00Z
# weight: 1
# aliases: ["/AirTag"]
tags: ["Hugo", "Note", "Disqus", "Commands"]
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
## What is Disqus?

The internet's favorite comment plug-in makes it easy for publishers to bring their content to life, fuel colorful discussions, efficiently moderate comments, and build engaged communities.

## Steps by steps to integrate Disqus into your Hugo Site

### Step 1: Sign up for Disqus

### Step 2: Install Disqus

### Step 3: Chose "I want to install Disqus on my site."

### Step 4: Fill in the Form details for your Hugo site

### Step 5: Copy the discussion templates, and create a disqus.html file under your Hugo site folder layouts/partials, then paste it inside the file

The template will be like below:
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

### Step 6: Create a comments.html file under your Hugo site folder layouts/partials, and copy and paste the below code inside the file

```
{{- /* Comments area start */ -}}
{{- /* partial "disqus.html" . */ -}}
{{ template "_internal/disqus.html" . }}
{{- /* to add comments read => https://gohugo.io/content-management/comments/ */ -}}
{{- /* Comments area end */ -}}
```

### Step 7: Add Disqus shortname `disqusShortname = "<your-disqus-shortname>"` in your config.yml file

### Step 8: Congratulations, now it is all done. You can push it to your GitHub repo

## Resources

[Disqus](https://disqus.com)

[Internal Templates | Hugo](https://gohugo.io/templates/internal/)