---
title: "How to setup Google domains for GitHub Pages"
date: 2022-04-11T10:10:00Z
tags: ["Note", "GoogleDomains", "GitHubPages"]
categories: ["Note", "GoogleDomains", "GitHubPages"]
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
GitHub Pages is easy to setup your owm blog with Hugo or another frameworks, but to a custom domain with Google Domains, you may run into some problems.

Here is how you can do it in below steps:

## Step 1: Let GitHub Pages know your custom domain
* Go to your github repo settings page.
* Add you custom domain name at Settings > GitHub Pages > Custom domain.

## Step 2: Go to your domain provider points your domain to GitHub Pages
* Go to registar page on your google domains, select your domain.
* Go to DNS > Custom resource records.
* Add the record shown in the screenshot bellow. Note that you need to use the "+" button to add more urls.

Here is the list of ips in the screenshot:
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153

## Step 3: Let your www sub-domain point to your GitHub Pages
* Add the following CNAME record.
* Add a CNAME file, it contents your domain in your Hugo static folder.

## Step 4: Enable HTTPS for your GitHub Pages
* Go to your github repository settings page, under Settings > GitHub Pages > Custom domain(remove and add it back and save again) > Check Enforce HTTPS checkbox.