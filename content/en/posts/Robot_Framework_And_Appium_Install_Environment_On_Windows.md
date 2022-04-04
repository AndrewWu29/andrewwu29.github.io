---
title: "Robot Framework And Appium Install Environment On Windows"
date: 2022-04-04T10:30:00Z
tags: ["Appium", "note", "Windows", "Robot Framework"]
categories: ["Note", "Installation", "Windows"]
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
For Robot Framework and Appium environment on Windows, we should install softwares list below:

* Robot Framework
* node
* JDK
* Android Studio
* Appium
* Appium Desktop
* appium-doctor

First of all we have to install Java JDK for me I will need the Windows 64 bit.
[Java Downloads JDK](https://www.oracle.com/java/technologies/downloads/#jdk18-windows)
And we chose the x64 Installer for our environment.

The installation is very simple we just press next, next and finish, then we can go to setting our environment.

We have to create a new system variable as below:

    Variable name: JAVE_HOME
    Variable value: C:\Program Files\Java\jdk-18 # base on you jdk path

After Java JDK installed, we need to install our Android Studio.
[Android Studio](https://developer.android.com/studio?gclid=CjwKCAjwrqqSBhBbEiwAlQeqGhB3kESe_97wBHxGA5_3DnKIc9L51tsNIAQ6CNZOTmnaQgR3M2PpjxoCPnoQAvD_BwE&gclsrc=aw.ds)
Then downloaded Android Studio, we used the default settings and finished our installation.

And open our Android Studio and go to SDK Manager to download our Android SDK, then go to setting our environment too.

Create a new user variable as below:

    Variable name: ANDROID_HOME
    Variable value: C:\Users\username\AppData\Local\Android\Sdk # you can find in SDK Manager page

Then edit Path variable in user variables and add new variables as below:
    %ANDROID_HOME%\tools
    %ANDROID_HOME%\build-tools
    %ANDROID_HOME%\emulator
    %ANDROID_HOME%\tools\bin

Finished Android Studio installation, we can install our node now.
[node download](https://nodejs.org/en/download/)
During the installation we have to make sure at Custom Setup section has "Add to PATH" below.

Now we installed node, we can go to download our Appium now.

Because we alraedy installed node, we can open our cmd and type below commands to check our node and npm versions:

    node -v
    npm -v

Make sure they show you your installed version number, then we can use npm to install our Appium.

The Appium install command likes below:
    npm install appium -g

Check your appium installation, use command as below:
    appium --version

Finally we can use npm to install appium-doctor to check our environment, we use the command below to install:
    npm intaal -g appium-doctor

After installed appium-doctor, use `appium-doctor --version` to check your installation was successeful.

Then we can open a new cmd to check our appium environment, use the command below:
    appium-doctor

Sometimes we like to use some GUI application, so we also can download Appium Desktop application.

We can go to [Appium](https://appium.io/) site to download the GUI option.

It's easy to install, just press next, next and finish.

After that you can launch your Appium Desktop Application.

Check you were installed successful.

Finally we have to download "Robot Framework", you have to download python on you Windows first, after that use `pip install robotframework` to installing Robot Framework.

To check that the installation was successful, run:
    robot --version
