---
title: "How to add Google Analytics to Hugo?"
date: 2022-02-04T14:25:00Z
# weight: 1
# aliases: ["/AirTag"]
tags: ["Hugo", "Note", "GoogleAnalytics"]
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
## What is Google Analytics?

Google Analytics is a web analytics service that provides statistics and basic analytical tools for search engine optimization (SEO) and marketing purposes. The service is part of the Google Marketing Platform and is available for free to anyone with a Google account.

## How to add google analytics to Hugo site?

### Step 1: Create a [google account](https://accounts.google.com/signup/v2/webcreateaccount?service=analytics&continue=https%3A%2F%2Fanalytics.google.com%2Fanalytics%2Fweb%2F&hl=en&dsh=S923789982%3A1643982945903281&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp&nogm=true)

### Step 2: Go to [google analytics](https://analytics.google.com/analytics/web/provision/#/provision) site

### Step 3:  Set up your site details in google analytics

### Step 4: Get your site google analytics ID

### Step 5: Set up your Hugo config.yml

Add `googleAnalytics: G-MEASUREMENT_ID` in your config.yml file.

### Step 6: Add google analytics template in your Hugo theme

Add `{{ template "_internal/google_analytics.html" . }}` in your theme’s head.html file `<head>` section

## Reference:

[DEFINITION Google Analytics](https://searchbusinessanalytics.techtarget.com/definition/Google-Analytics)

[Google Analytics](https://analytics.google.com/analytics/web/provision/#/provision)

[Internal Templates | Hugo](https://gohugo.io/templates/internal/)