---
title: "How to setup Cloudflare with Google domains"
date: 2022-04-11T22:10:00Z
tags: ["Note", "GoogleDomains", "Cloudflare"]
categories: ["Note", "GoogleDomains", "Cloudflare"]
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
Cloudflare, Inc. is an American content delivery network and DDoS mitigation company. It acts as a reverse proxy between a website's visitor and the Cloudflare customer's hosting provider.

After bought a domain name, usally I will need a domain name provider to protect our domain. 

I recommended to use Cloudflare to protect you domain, they provide free CDN, Cache and DDoS mitigation etc.

But they don't charge you for these services.

We can follow below steps to use Cloudflare to manage your DNS.

## Step 1: Sign up a Cloudflare account

## Step 2: Add a Site in Cloudflare

* Logged in Cloudflare
* In Websites Home page press 'Add a Site'
* Fill in you bought domain name
* Choose Cloudflare free plan
* Press confirm button

## Step 3: Setting Cloudflare DNS

* Press your added site
* Go to DNS page
* Fill in your domain name in Search DNS records field
* Press Search button
* It will automatically copy your DNS settings from Google Domains
* Check the DNS records are corrected then save them

## Step 4: Cloudflare Name Server Setting

* Copy Cloudflare gave name server 1 & 2
* Back to Google Domains your domain > DNS
* Add NAMESERVERS to Custom DNS
* Fill in NameServer 1 & 2
* Confirm Settings

## Step 5: Back to Cloudflare to check settings status

* Ensure your settings are working now
