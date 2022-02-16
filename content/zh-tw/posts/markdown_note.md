---
title: "Markdown 筆記 基本語法使用"
date: 2022-02-15T17:22:00Z
# weight: 1
# aliases: ["/AirTag"]
tags: ["Markdown", "筆記", "語法"]
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
## 什麼是Markdown?

Markdown是一種輕量級標記式語言，創始人為約翰·格魯伯。它允許人們使用易讀易寫的純文字格式編寫文件，然後轉換成有效的XHTML（或者HTML）文件。這種語言吸收了很多在電子郵件中已有的純文字標記的特性。

由於Markdown的輕量化、易讀易寫特性，並且對於圖片，圖表、數學式都有支援，目前許多網站都廣泛使用Markdown來撰寫說明文件或是用於論壇上發表訊息。如GitHub、Reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge、簡書等，甚至還能被用來撰寫電子書。

所以只要熟悉相關語法，Markdown可以讓您輕鬆快速地撰寫筆記、文章、說明文件等。

## 基本語法

### 標題

    # 標題一
    ## 標題二
    ### 標題三
    #### 標題四
    ##### 標題五
    ###### 標題六

**效果**

# 標題一
## 標題二
### 標題三
#### 標題四
##### 標題五
###### 標題六

### 強調

#### 粗體

    **粗體前後各兩個星號**
    __粗體前後各兩個底線__

**效果**

**粗體前後各兩個星號**

**粗體前後各兩個底線**

#### 斜體

    *斜體前後各一個星號*
    _斜體前後各一個星號_

**效果**

*斜體前後各一個星號*

*斜體前後各一個星號*

#### 粗斜體

    ***粗體前後各三個星號***
    ___粗體前後各三個底線___

**效果**

***粗體前後各三個星號***

___粗體前後各三個底線___

### 文字段落

一個段落是由一個以上相連接的行句組成，而一個以上的空行則會切分出不同的段落。

    第一段

    第二段

### 清單

Markdown支援有序清單和無序清單。無序清單使用 * 、 + 或 - 作為清單標記，有序清單使用數字接著一個英文句點做為清單標記。

#### 無序清單

    * 紅
    * 橙
    * 黃

    + 紅
    + 橙
    + 黃

    - 紅
    - 橙
    - 黃

**效果**

* 紅
* 橙
* 黃

+ 紅
+ 橙
+ 黃

- 紅
- 橙
- 黃

#### 有序清單

    1. 紅
    2. 橙
    3. 黃

**效果**

1. 紅
2. 橙
3. 黃

若要使用多層級清單，可在下一層級使用一個縮排或是兩個半形空白。

    - 紅
    - 橙
    - 黃
        - 粉紅色
        - 橙紅色
            - 橙黃色

**效果**

- 紅
- 橙
- 黃
    - 粉紅色
    - 橙紅色
        - 橙黃色

### 複選框

用於待辦事項或確認項目，使用 * [] 符號放到項目開頭，中括號內有 x 代表被選取。

    * [x] 這是已確認項目
    * [ ] 這是待確認項目

**效果**

* [x] 這是已確認項目
* [ ] 這是待確認項目

### 分隔線

在一行內使用三個或以上的 `*`、`-`、`_` 來建立分隔線，符號內不可有其他東西，但可以在符號內插入空白。

    ***
    ---
    ___

    ********
    * * *
    ----------
    - - -

**效果**

***
---
___
* * * *
* * *
----
- - -

## 進階語法

### 連結

語法如下。
1. 一個中括號，放置連結文字
2. 一個小括號，放置連結路徑或網址，一樣可使用雙引號來添加 prompt 文字

```
[GitHub](https://andrewwu29.github.io "My GitHub")
```

**效果**

[GitHub](https://andrewwu29.github.io "My GitHub")

### 圖片

語法如下
* 一個驚嘆號 ! 開頭
* 一對方括號，放置圖片的替代文字
* 一對括號，放置圖片的路徑或網址，另外還可選擇性的添加 prompt，當滑鼠停留在圖片上時，會自動顯示這段文字，並使用雙引號包住。

**PS:路徑可使用絕對路徑或相對路徑**

    ![Img](/path/image.jpg)
    ![Img](/path/image.jpg "title")

**效果**

無提示符的。
![York Minster Pic](https://i.imgur.com/C40N0ds.jpg)
有提示符的，當滑鼠停留在圖片上面時，會自動顯示提示符。
![York Minster Pic](https://i.imgur.com/C40N0ds.jpg "York Minster")

### 自動連結

Markdown支援比較簡短的自動連結形式來處理網址和電子郵件信箱，只要是用角括號包起來，Markdown就會自動把它轉成連結，連結的文字就和連結位置一樣，例如：

    <https://andrewwu29.github.io>

**效果**

<https://andrewwu29.github.io>

### 表格

Markdown 表格有點囉嗦，排版上也不是很美觀，若非必要盡量不做大張表格，實際運用時不太親民。

* 最外圍的豎線不一定需要。
* 靠左對齊的寫法是添加 : 在左側，如 :---，同理靠右對齊為在右側添加冒號 ---:
* 置中對齊呈現的方式為在兩側都添加冒號 :--:。

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

### 程式碼

要標記一小段程式碼，可以使用反引號`` ` ``包起來。但如果要在程式碼內插入反引號，可以使用兩個反引號來包。

    Use the `printf()` function.

    ``There is a literal backtick (`) here.``

    A single backtick in a code span: `` ` ``

    A backtick-delimited string in a code span: `` `foo` ``

**效果**

Use the `printf()` function.

``There is a literal backtick (`) here.``

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

#### 程式碼區塊

要標記多行的程式碼，可以使用4個空白或1個tab縮排即可或是頭尾三個反引號。

    Here is an example of AppleScript:

        tell application "Foo"
            beep
        end tell
    
    ```
    程式碼區塊
    ```

**效果**

Here is an example of AppleScript:

    tell application "Foo"
        beep
    end tell

```
程式碼區塊
```

### 跳脫字元

Markdown可以利用反斜線來插入一些在語法中有其他意義的符號。

Markdown支援在下面這些符號前面加上反斜線來幫助插入普通的符號：

符號|中文名稱|英文名稱
:-:|:-:|:-:
\ |反斜線|backslash
`|反引號|backtick
*|星號|asterisk
_|底線|underscore
{}|大括號|curly braces
[]|方括號|square brackets
()|括號|parentheses
#|井字號|hash mark
+|加號|plus sign
-|減號|minus sign (hyphen)
.|英文句點|dot
!|驚嘆號|exclamation mark

### 區塊引言

Markdown使用email形式的區塊引言，在區塊引言的區塊每行的最前面加上`>`：

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

Markdown也允許你只在整個段落的第一行最前面加上`>`：

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.

區塊引言可以有階層（例如：引言內的引言），只要根據層數加上不同數量的`>`：

> This is the first level of quoting.
>
> > This is nested blockquote.
> > > Back to the first level.

引言的區塊內也可以使用其他的Markdown語法，包括標題、清單、程式碼區塊等：

> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> 
>     return shell_exec("echo $input | $markdown_script");

## 參考資料

[Markdown文件](https://markdown.tw/)

[Markdown筆記神器](https://fakestandard.github.io/post/markdown/markdown-1-heymarkdown/)