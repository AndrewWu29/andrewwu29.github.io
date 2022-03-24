---
title: "Vim note"
date: 2022-03-12T15:07:00Z
tags: ["Vim", "note", "shortcut"]
categories: ["Note", "Vim", "shortcut"]
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
## What is Vim?

Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as "vi" with most UNIX systems and with Apple OS X.

Vim is rock stable and is continuously being developed to become even better. Among its features are:

* persistent, multi-level undo tree
* extensive plugin system
* support for hundreds of programming languages and file formats
* powerful search and replace
* integrates with many tools

## BASIC

### Vim modes

Vim supports multiple modes. This section discusses some of the important modes which will be used on day-to-day basis.

### Command mode

This is the default mode in which Vim starts. We can enter editor commands in this mode. We can use variety of commands in this mode like copy, paste, delete, replace and many more. We’ll discuss these commands in later sections.

### Insert mode

You can use this mode to enter/edit text. To switch from default command to insert mode press i key. It will show current mode in bottom left corner of editor.

Use Escape key to switch back to command mode from this mode.

We can enter any text once we are in insert mode. Below image shows this.

### Command line mode

This mode is also used to enter commands. Commands in this mode starts with colon(:). For instance, in previous section quit command was entered in this mode. We can go to this mode either from command or insert mode.

* To switch from command mode to this mode just type colon

* To switch from insert mode to this mode press Escape and type colon

### Visual mode

In this mode we can visually select text and run commands on selected sections.

* To switch from command mode to visual mode type v

* To switch from any other mode to visual mode first switch back to command mode by pressing Escape, then type v to switch to visual mode

In below image bottom left corner shows visual mode.

### Create new file

Perform below steps to create and save new file −

* Execute following command to open Vim

    `$ vim`

* Type following command in Vim

    `:edit message.txt`

It will reload file if, it exist already

* Switch to insert mode

    `i`

* Enter some text

* Switch back to command mode

    `Esc`

* Save changes to file

    `:w`

Now message.txt file will be created.

* Quit Vim

    `:q`

### Open file in read-only mode

Use –R option to open file in read-only mode

    `$ vim -R message.txt`

### Edit existing file

Perform below steps to edit existing file −

* Open file using Vim

    `$ vim message.txt`

* Switch to insert mode and enter some text there.

    `i`

* Quit editor without saving changes.

    `:q!`

OR

* Save changes and quit editor using following command.

    `:wq`

### Access help manual

Help manual is shipped with Vim editor itself and it is really comprehensive. To access help execute below command

    :help

### Help on specific topic

Help manual will show entire help about Vim. But what if, we are only interested in certain topic. Vim provides command for that as well with following syntax

    :help <topic-name>

In above command replace \<topic-name\> with topic in which you are interested. Forinstance to access help about vim mode, execute following command

    :help modes

### Search help phrase in manual

You can search specific topic only if you know its name. But what if, you don’t know the exact name of help topic. In that case you can use below command

    :helpgrep <phrase>

For instance, to access help about navigation in Vim execute below command

    :helpgrep navigation

Vim provides many commands which make editing functionality really powerful. In this chapter, we will discuss following items −

* Insert
* Append
* Open new line
* Substitute
* Change
* Replace
* Join

### Insert text before cursor

To insert text before cursor perform following steps −

* To insert text before cursor perform following steps
* Switch to insert mode
    i

### Insert text at the beginning of line

Let us suppose you are in the middle of line and you want to insert text at the beginning of current line then perform following steps

* Switch to command mode
    Esc
* Activate insert mode
    I

This action will move cursor to the beginning of current line and switch Vim in insert mode

### Append text after cursor

To append text after cursor perform following steps

* Switch to command mode and move cursor to appropriate position
    Esc
* Switch to insert mode
    a
This action will move cursor next by one position and switch Vim in insert mode.

### Append text at the end of line

Let us suppose you are in the middle of line and you want to append text at the end of current line then perform following steps

* Switch to command mode
    Esc
* Switch to insert mode
    A

This action will move cursor to the end of line and switch Vim in insert mode

### Open new line below cursor

Let us suppose you are in the middle of line and you want to open new line below current line then perform following steps

* Switch to command mode
    Esc
* Switch to insert mode
    o
This action will insert blank line below current line and switch Vim in insert mode

### Open new line above cursor

Let us suppose you are in the middle of line and you want to open new line above current line then perform following steps

Switch to command mode
    Esc
Switch to insert mode
    o
This action will insert blank line above current line and switch Vim in insert mode

### Substitute text

Let us suppose you want to substitute single character then perform following steps

* Switch to command mode
    Esc
* Move cursor to appropriate position

* Switch to insert mode
    s
This action will delete character under cursor and switch Vim in insert mode To substitute entire line use

    s
This action will delete entire line and switch Vim in insert mode.

### Change text

Let us suppose you want to change text in current line then perform following steps

* Switch to command mode
    Esc
* Execute following command
    cc
This is similar to substitute action using S

To change text from current cursor position, execute following command

    C
This action will delete text after current cursor position and switch Vim in insert mode.

### Replace text

To replace single character perform following steps

* Switch to command mode
    Esc
* Move cursor to appropriate position

* Execute following command
    r
* Enter character to be substituted.
Note that this command will not switch Vim in insert mode

To replace entire line execute

    R

### Join text

To join two lines perform following steps

* Switch to command mode
    Esc
* Move cursor to appropriate line
* Execute following command
    J

### Basic navigation

In basic navigation we can navigate to left, right, up and down by position. Below commands can be used for this

Sr.No | Command & Description
--- | ---
1 | `h` Move cursor to left by one position
2 | `l` Move cursor to right by one position
3 | `k` Move cursor to upward direction by one line
4 | `j` Move cursor to downward direction by one line

To perform multi-position navigation use number with these commands. For instance to navigate cursor 10 line below from current line, execute following command

    10j
You can use numbers with remaining commands as well.

In addition to this, below commands also perform some useful navigation.

Sr.No | Command & Description
--- | ---
1 | `0` Move cursor to the beginning of current line
2 | `$` Move cursor to the end of current line
3 | `Ctrl + f` Scroll down entire page
4 | `Ctrl + b` Scroll up entire page

### Navigate to lines

Below command can be used to navigate to specific line −

Sr.No | Command & Description
--- | ---
1 | `:n` Jump to the nth line
2 | `:0` Jump to the start of file
3 | `:$` Jump to the end of file

### Word navigation

We can use following commands for word navigation

Sr.No | Command & Description
--- | ---
1 | `w` Move cursor to the beginning of the next word
2 | `e` Move cursor to the end of the current word
3 | `b` Move cursor to the beginning of the previous word

### Using jumps

Vim keeps track of your navigation using a jump list. You can go backward and forward through that list.

The jump list keeps tracks of all the places you’ve been to by tracking file name, line number and column number.

To view jump list execute following command

    :jumps
Following command are based on jump list

Sr.No | Command & Description
--- | ---
1 | `Ctrl + o` Jump back to the previous position
2 | `Ctrl + i` Jump to the next position

## ADVANCE

We have seen basic editing earlier. Let us understand some other editing features of Vim. In this section, we will discuss following items

* Buffer
* Swap files
* Cut, copy, delete, paste actions
* Undo and redo actions

### Buffer

Buffer is temporary memory used by Vim. When we open a file in editor, Vim loads its contents from disk drive. These contents are stored in memory (RAM) whenever we edit a file we are actually editing file from buffer. Once we finish editing and save file that time only buffer contents are transferred to appropriate file.

### Swap

Swap area is a file created by Vim to store buffer contents periodically. While editing file our changes may be lost because of any reasons and Vim provides swap files to provide data recovery.

To get actual name of swap file execute following command

    :swapname

### Cut, Copy and paste actions

We often perform cut, copy and paste actions on text. Vim provides following commands to perform these actions (y stands for yank and p stands for paste action)

Sr.No | Command & Description
--- | ---
1 | `x` Delete character from cursor position
2 | `X` Delete previous character from cursor position
3 | `y` Copy single character from cursor position
4 | `p` Paste character after cursor position
5 | `P` Paste character before cursor position

### Multi-position command

We can use cut, copy and paste commands with words and sentences as well. Below table shows this

Sr.No | Command & Description
--- | ---
1 | `dw` Delete word from cursor position
2 | `D` Delete entire line from cursor position
3 | `dd` Delete entire line
4 | `Y` Copies entire line
5 | `yy` Copies entire line

To perform multi-line/multi-word actions just use numbers with command. You can use this syntax with other commands as well. For instance, to delete 3 words use

    3dw

### Undo

We can undo single or multiple actions. To perform one time undo action execute

    u

To perform multiple undo action, use number with same command. For instance, below command will undo last 3 actions

    3u

In addition to this, to undo all execute following command

    U

### Redo

Redo is apposite action of undo. Execute any of the command to perform redo action.

    Ctrl + r
    OR
    : red

### Search related settings

To perform incremental search execute following command

    :set incsearch

To highlight search execute following command

    :set hlsearch

To disable incremental and highlighted search execute following commands

    :set noincsearch
    :set nohlsearch

### Search in current file

#### Search in forward direction

Use following commands to perform search in forward direction −

Sr.No | Command & Description
--- | ---
1 | `/<expression>` Search expression in forward direction
2 | `n` Find next occurrence. This is same and find next
3 | `N` Find previous occurrence. This is same as find previous
4 | `//` Repeat previous forward search

#### Search in backward direction

Use following commands to perform search in backward direction

Sr.No | Command & Description
--- | ---
1 | `?<expression>` Search expression in backward direction
2 | `n` Find previous occurrence. This is same and find previous
3 | `N` Find next occurrence. This is same as find next
4 | `??` Repeat previous backward search

#### Search word under cursor

Place cursor under any word and execute following commands to perform search operation

Sr.No | Command & Description
--- | ---
1 | `*` Search next occurrence of current word
2 | `#` Search previous occurrence of current word

#### Search in multiple files

Using vimgrep command we can search `<expression>` in multiple files. For instance below command searches string - `Jarvis` in all text files.

    :vimgrep Jarvis *.txt

Note that to go to next and previous occurrence we have to use following commands

Sr.No | Command & Description
--- | ---
1 | `:cn` Go to next occurrence of expression
2 | `:cN` Go to previous occurrence of expression

## References

[vim_quick_guide](https://www.tutorialspoint.com/vim/vim_quick_guide.htm)
