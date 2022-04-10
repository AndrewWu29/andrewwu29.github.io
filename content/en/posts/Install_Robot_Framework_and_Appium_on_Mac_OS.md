---
title: "Install Robot Framework and Appium on Mac OS?"
date: 2022-04-05T12:44:00Z
tags: ["Note", "RobotFramework", "Appium"]
categories: ["Note", "Appium"]
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
You have to install Xcode first.

Open a terminal and verify Python and pip installation.

We can use this to check our python on Mac OS

    which python # to check python2
    which python3 # to check python3

Then use the pip3 list to check our installed list.

And then, we use pip3 to install the robot framework.

    pip3 install robotframework

Run pip3 list to check robotframwork is in our list.

After running the `robot —version` to check that the installation was successful.

Now that the robot framework has been installed; we can install robotframework-appiumlibrary, use pip3.

    pip3 install robotframework-appiumlibrary

Install Java JDK from the Oracle website to download the version that suits your Mac OS

Install Android Studio from the site to download the version that suits your Mac OS

And install homebrew and use the command from their home page as below command:

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

After homebrew is installed, we can use homebrew to install node and appium, use commands:

    brew install node
    brew install appium

Open Android SDK manager, go to Android SDK to install SDK tools, we will install as below list:

* Android SDK Build-Tools
* Android SDK Command-line Tools
* Android Emulator
* Android SDK Platform-Tools
* Google Play services
* Android SDK Tools

Checked what we will want to install, then press the `Apply` button to download these tools.


Now we can write our path file to .zsh_profile for JAVA_HOME and ANDROID_HOME, the file content would be like this:

    # JAVA
    export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_321.jdk/Contents/Home
    export PATH=$JAVA_HOME/bin:$PATH

    # ANDROID
    export ANDROID_HOME=/Users/username/Library/Android/sdk
    export PATH=$ANDROID_HOME/platform-tools:$PATH
    export PATH=$ANDROID_HOME/tools:$PATH
    export PATH=$ANDROID_HOME/tools/bin:$PATH
    export PATH=$ANDROID_HOME/emulator:$PATH

After we saved this file, we have to type `source .zsh_profile` to 
execute commands from this file.

Then we can type the below commands to check our installations.

    java -version
    node —version
    npm -version
    appium -v
    adb —version

If the above commands show well, we can install the appium-doctor to check our environment is correct for appium, use npm to install it, the command is:

    npm install appium-doctor -g

After installation of appium-doctor, you can run this command to check your environment.

    appium-doctor

If any necessary dependencies are installed, means your environment is done now, Congratulations！