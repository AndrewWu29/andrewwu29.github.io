---
title: "Git clone a repository with submodules"
date: 2022-06-06T12:58:00Z
tags: ["Note", "Git", "Submodule"]
categories: ["Note", "Git", "Submodule"]
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
When you clone a Git repository with submodules, you'll realise that it does not bring down all of the branches and code for the associate submodules.

A few steps need to be taken.

## Step 1: Clone the repository
    git clone <your_repository_url>

## Step 2: Init submodules
    git submodule init

## Step 3: Update submodules
    git submodule update

