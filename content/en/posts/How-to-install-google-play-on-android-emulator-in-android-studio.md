---
title: "How to install Google Play on Android emulator in Androi Studio?"
date: 2023-03-13T14:25:00Z
# weight: 1
# aliases: ["/AirTag"]
tags: ["Android", "Emulator", "Google Play"]
categories: ["Note", "Android", "Mac OS", "Google Play", "Android Studio"]
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
## How to install Google Play on Android emulator in Androi Studio?

### Step 1: Open Android Studio SDK manager, and download the image

![SDK manager](https://i.imgur.com/b8qmBjQ.png)

### Step 2: Create a device with the right API and Hardware, then finish

![Imgur](https://i.imgur.com/JPLgWmY.png)

### Step 3: Edit the new AVD config.ini file

![Imgur](https://i.imgur.com/UpsoXYR.png)
![Imgur](https://i.imgur.com/wfdGnJZ.png)

```
PlayStore.enabled=true
avd.ini.displayname=<your deives name> Play
image.sysdir.1=system-images\android-32\google_apis_playstore\arm64-v8a\
tag.display=Google Play
tag.id=google_apis_playstore
```

### Step 4: Start the AVD, and you should see the Play Store Icon on your device homepage, log in then done