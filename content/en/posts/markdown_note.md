---
title: "Markdown Basic Systax"
date: 2022-02-15T17:22:00Z
# weight: 1
# aliases: ["/AirTag"]
tags: ["Markdown", "note", "systax"]
categories: ["Note", "Markdown", "systax"]
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
## What is Markdown?

Markdown is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber and Aaron Swartz created Markdown in 2004 as a markup language that is appealing to human readers in its source code form. Markdown is widely used in blogging, instant messaging, online forums, collaborative software, documentation pages, and readme files. from Wikipedia.

**PHILOSOPHY**

Markdown is intended to be as **easy-to-read** and **easy-to-write** as is feasible.

So when you are familiar with Markdown syntax, You can easily and quickly write notes, articles and documentation etc...

## BASIC SYNTAX

### HEADERS

    # This is an H1
    ## This is an H2
    ### This is an H3
    #### This is an H4
    ##### This is an H5
    ###### This is an H6

**Result**

# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5
###### This is an H6

### EMPHASIS

#### BOLD

    **double asterisks**
    __double underscores__

**Result**

**double asterisks**

__double underscores__

#### ITALIC

    *single asterisks*
    _single underscores_

**Result**

*single asterisks*

_single underscores_

#### BOLD ITALIC

    ***Triple asterisks***
    ___Triple underscores___

**Result**

***Triple asterisks***

___Triple underscores___

### PARAGRAPHS

A paragraph is composed of more than one connected line sentence, and more than one blank line will split into different paragraphs.

    This is the first paragraph.

    This is the second paragraph.

### LISTS

Markdown supports ordered (numbered) and unordered (bulleted) lists.

Unordered lists use asterisks, pluses, and hyphens — interchangably — as list markers:

#### Unordered lists

    * Red
    * Orange
    * Yellen

    + Red
    + Orange
    + Yellen

    - Red
    - Orange
    - Yellen

**Result**

* Red
* Orange
* Yellen

+ Red
+ Orange
+ Yellen

- Red
- Orange
- Yellen

#### Ordered lists use numbers followed by periods:

    1. Red
    2. Orange
    3. Yellen

**Result**

1. Red
2. Orange
3. Yellen

To use a multi-level list, use an indent or two half-spaces on the next level.

    - Red
    - Orange
    - Yellen
        - Sub Red
        - Sub Orange
            - three

**Result**

- Red
- Orange
- Yellen
    - Sub Red
    - Sub Orange
        - three

### CHECKBOX

For to-do or confirmation items, use the * [] symbol at the beginning of the item, and an x in brackets means it is selected.

    * [x] This is a complete item
    * [ ] This is an incomplete item

**Result**

* [x] This is a complete item
* [ ] This is an incomplete item

### HORIZONTAL RULES

You can produce a horizontal rule tag (\<hr \/\>) by placing three or more hyphens, asterisks, or underscores on a line by themselves. If you wish, you may use spaces between the hyphens or asterisks. Each of the following lines will produce a horizontal rule:

    ***
    ---
    ___

    ********
    * * *
    ----------
    - - -

**Result**

***
---
___
* * * *
* * *
----
- - -

## ADVANCE SYNTAX

### LINKS

1. A square bracket to place the link text
2. A parenthesis, place the link path or URL, enclosed in double quotes to add prompt text

```
[GitHub](https://andrewwu29.github.io "My GitHub")
```

**Result**

[GitHub](https://andrewwu29.github.io "My GitHub")

### IMAGES

Admittedly, it’s fairly difficult to devise a “natural” syntax for placing images into a plain text document format.

Markdown uses an image syntax that is intended to resemble the syntax for links, allowing for two styles: inline and reference.

Inline image syntax looks like this:

    ![Img](/path/image.jpg)
    ![Img](/path/image.jpg "title")

**Result**

inline
![York Minster Pic](https://i.imgur.com/C40N0ds.jpg)
reference
![York Minster Pic](https://i.imgur.com/C40N0ds.jpg "York Minster")

### AUTOMATIC LINKS

Markdown supports a shortcut style for creating “automatic” links for URLs and email addresses: simply surround the URL or email address with angle brackets. What this means is that if you want to show the actual text of a URL or email address, and also have it be a clickable link, you can do this:

    <https://andrewwu29.github.io>

**Result**

<https://andrewwu29.github.io>

### TABLE

Markdown table is a little bit complicated, and the layout is not too beautiful if you want to use it, and try not to make a large table.

* The outer pipe is not required.
* Left-aligned writing is to add : on the left side, such as :---, similarly, right-aligned is to add a colon on the right ---:
* Center alignment is rendered by adding colons :--: on both sides.

```
| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |
```

### CODE

To indicate a span of code, wrap it with backtick quotes (`). Unlike a pre-formatted code block, a code span indicates code within a normal paragraph. For example:

    Use the `printf()` function.

    ``There is a literal backtick (`) here.``

    A single backtick in a code span: `` ` ``

    A backtick-delimited string in a code span: `` `foo` ``

**Result**

Use the `printf()` function.

``There is a literal backtick (`) here.``

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

#### CODE BLOCKS

To produce a code block in Markdown, simply indent every line of the block by at least 4 spaces or 1 tab. For example, given this input:

    Here is an example of AppleScript:

        tell application "Foo"
            beep
        end tell

**Result**

Here is an example of AppleScript:

    tell application "Foo"
        beep
    end tell

### BACKSLASH ESCAPES

Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown’s formatting syntax.

Markdown provides backslash escapes for the following characters:

characters|name
:-:|:-:
\ |backslash
`|backtick
*|asterisk
_|underscore
{}|curly braces
[]|square brackets
()|parentheses
#|hash mark
+|plus sign
-|minus sign (hyphen)
.|dot
!|exclamation mark

### BLOCKQUOTES

Markdown uses email-style > characters for blockquoting.

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

Markdown allows you only put the > before the first line of a hard-wrapped paragraph:

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.

Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by adding additional levels of >:

> This is the first level of quoting.
>
> > This is nested blockquote.
> > > Back to the first level.

Blockquotes can contain other Markdown elements, including headers, lists, and code blocks:

> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> 
>     return shell_exec("echo $input | $markdown_script");

## References

[Markdown: Syntax](https://daringfireball.net/projects/markdown/syntax#img)

[Markdown](https://en.wikipedia.org/wiki/Markdown)

[Markdown筆記神器](https://fakestandard.github.io/post/markdown/markdown-1-heymarkdown/)