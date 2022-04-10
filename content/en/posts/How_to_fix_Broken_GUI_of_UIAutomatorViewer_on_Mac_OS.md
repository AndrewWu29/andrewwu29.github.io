---
title: "How to fix broken GUI of UIAutomatorViewer on Mac OS?"
date: 2022-04-10T12:44:00Z
tags: ["Note", "UIAutomatorViewer"]
categories: ["Note"]
author: "Andrew Wu"
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: true
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowCodeCopyButtons: true
---
First you have to check your java version to make sure your version is 1.8.0_xxx.

You can use the command below to check your java version:

    java -version

After go to download swt, the version has to be 4.20(it works for me).

When [downloaded swt 4.20](https://archive.eclipse.org/eclipse/downloads/drops4/R-4.20-202106111600/), open the folder, and we have to rename the file swt.jar to swt2.jar.

Open your your android sdk path: `/Users/<USERNAME>/Library/Android/sdk/tools/lib`, cd to x86 and x86_64 folder, then copy the swt2.jar file and paste to these two folders.

Finally you can reopen a new terminal and type `uiautomatorviewer` to open your UIAutomatorViewer to located your elements on the physical devices or emulator devices
