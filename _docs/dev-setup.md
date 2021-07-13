---
title: "Dev Setup: In-Depth Walkthrough"
sidebar-title: "Dev Setup"
---

# Dev Setup: In-Depth Walkthrough
{:.no_toc}

You want to contribute as part of Teach LA's dev team! Awesome! Before you get started, you'll need to set some resources up if you want to work on the website or one of our projects. Here, we'll discuss how to use our shell, git, and GitHub!

Some of this may already be familiar for you. Feel free to skip around to the parts that are relevant.

## Table of Contents
{:.no_toc}
* TOC
{:toc}

## Navigating your Shell

*If you've used a shell before, you can skip this step.*

The first step in our dev journey is to get ourselves accustomed to working in the terminal. We'll use the terminal to help preview what our website code looks like, and also work with all the tools that track the changes to it. This may be a bit scary if you've never used one before, but have no fear - we're here to guide you!

Your shell depends on what operating system you're using:

* If you're on Windows, you will first need to install the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about). An install guide is provided in [the appendix](#Installing-WSL), which we recommend you follow first.
* If you're on macOS, your default shell is the "Terminal" app.
* If you're on Linux, well, you probably know what your default shell is. If you're on Ubuntu, though, it will be the "Terminal" app.

Great! Once you have it open, we should introduce a few basic tools:
* `cd`: **Change directory**
* `ls`: **List directory**

```sh
$ cd                    # executing cd will take you to your home directory.
$ cd /some/directory    # this will take you to a specific directory!
$ ls                    # this will list contents of your current directory.
```

We will be using this to navigate our computer's files going forward. Any time you see a block of code that looks like:

```sh
$ command
```

Then you should know that this should be typed into your terminal!

Last thing, **if you are on WSL**, things are a little different. Your computer's traditional disk drives like `C:` will be found at the location `/mnt`. For example, if I wanted to go to the Windows path `C:\Users\teachla\Desktop\teach-la-website`, then you would use the command `cd /mnt/c/Users/teachla/Desktop/teach-la-website`.

Now we can move on to our next step in working on our website: getting a GitHub!

## GitHub

GitHub is the website that we use for tracking all the changes to all of our projects. It hosts our project folders (called "repositories"), that are controlled by another piece of software we'll be using, called Git.

### Creating a GitHub Account

The first step on this journey is to create our actual account. We can do so by visiting [the "Sign up" page](https://github.com/join).

### Joining our GitHub Organization

*If you're part of the uclaacm org, you can skip this step.*

Great, so now you have a GitHub account. To make changes to our website, you need to be part of the [uclaacm GitHub Organization](https://github.com/uclaacm). If you're already part of our org (you can find out by checking [the people category](https://github.com/orgs/uclaacm/people)), you can skip this step.

If you're not part of our GitHub organization, you need to ask someone to add you! Your best bet is either our president or our dev team director. Reach out to them about getting permissions. Don't worry if this takes a bit of time; you can make changes to the website on your computer without being part of the organization; it's only in **uploading those changes** that you need to be part of the organization.

## Installing Git

Git is a piece of software that controls the changes to our repository. Since GitHub hosts *repositories*, we need to install it to actually work with GitHub. To download and install it, see below:

### If you're using WSL or Linux

For Linux or WSL, you can install the `git` package from your provided package manager.

Assuming that you are using Ubuntu, specifically, you can just run:

```sh
sudo apt update
sudo apt install -y git
```

### If you're using OSX

Visit the [Git downloads page](https://git-scm.com/downloads) and pick out the installer for your system. After downloading, run the installer.

For OSX, the installation process will seem rather complicated, but you should ensure that the installation process **adds Git to your PATH**. The option to do this if you're using a graphical installer will be very explicit. This means that you will be able to use the command `git` from your default shell, as we found earlier.

To check to make sure that Git is working as expected, open your shell and run `git -v`. It should output something like this:

```sh
tla@acm:/my/path/to/my-current-project$ git --version
git version 2.25.1
```

Don't worry if your prompt looks a little different. What we care about is the version output here.

After this, we are ready to get started.

## Development Workflow

In this section, we'll talk about how we can use the features of git and GitHub to collaborate with other people when making changes to our repositories!

### Cloning Repositories

Our first step to start working on changes is to "clone" a repository, which means grabbing a local copy of a website we want to make changes to. We can do that with the `git` command:

**Cloning TeachLA's Website**
```sh
$ git clone https://github.com/uclaacm/teach-la-website.git
```

**Cloning Any Project On Github**
```sh
$ git clone https://github.com/LINK_TO_YOUR_PROJECT
```

What this does is grab the copy of our website located on GitHub, and creates a local copy on our computer.

To see what link you need to input when cloning a repository, just press the code button on the top of the [repository](https://github.com/uclaacm/teach-la-website) you want to work on and copy the url that appears to your clipboard!

![Github Cloning URLs]({{ site.baseurl }}/img/docs/git-url.png)

From here on, we'll use the teach-la-website as our example of navigating git!

Once that command is done, a new folder will have been created for your project. We can check if it's there with the `ls` command:

```sh
$ ls
js-backend       teach-la-website # <-- there it is!
gradient-descent-visualiser  network-tarines
```

We can then enter the directory with the `cd` command, so we can do some more things.

```sh
$ cd teach-la-website
```

### Create a New Branch

We want to make sure that changes we make don't impact other people, or at least not until those changes are done. Out of courtesy, we'll develop our changes on our own "branch", which is a version of our code.

Default branches are either called `master` or `main`, and they contain the code that goes live on our websites' links! For instance, `teach-la-website`'s master branch code can be seen on [teachla.uclaacm.com](https://teachla.uclaacm.com). We don't want to touch that just yet, so we're going to make our own branch!

We can check what branch we're on with the `git branch` command:

```sh
$ git branch
  for-educators
* master
  working-on-new-ai-ml-collection
```

The `*` means that we're currently on master. Let's make a new branch from master/main, with the `git checkout -b` command:

```sh
$ git checkout -b my-new-feature
$ git branch
  for-educators
  master
* my-new-feature
  working-on-new-ai-ml-collection
```

Great! Now we're ready to make our changes.


### Add, Commit, and Push

Now, we've got to add and commit our changes (which are fancy code words for saving them).

Git has a three step process with making a change:

1. **Stage** (or add) certain files that you want to "save"
2. **Commit** a change on your local computer, with a message
3. **Push** your change so everybody can see it! For us, we do this with a **pull request**

Let's say I've made some changes. We can check what exactly has changed with the `git status` command:

```sh
$ git status
On branch implement-docs-collection
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  new file:   _docs/dev-setup.md
```

In this case, `git` is telling me that I made a new file called `_docs/dev-setup.md` (which is this very file).

Great! I want to add (or stage) that file. We can do that with `git add`:

```sh
$ git add _docs/dev-setup.md
$ git status
On branch implement-docs-collection
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   _docs/dev-setup.md
```

Note that the `git add` command lets you specify all sorts of files and patterns. This is useful if you want to commit some files, but not others. You can also add all files with `git add *`, if you wish.

Okay, if we're 100% certain we want to make this change, we gotta commit! And we'll do that with `git commit`:

```sh
$ git commit -m "Creates new Dev Setup page"
```

The `-m` flag says we want to add a message that describes our change. **You should always add a descriptive commit message, so people know what changes you made.**

Finally, we have to tell the world about our change! We'll do that with `git push`. Note that for this step, **you must be part of the uclaacm organization.**

```sh
$ git push
```

Sometimes, you may get an error like so:

```sh
$ git push
fatal: The current branch implement-docs-collection has no upstream branch.
To push the current branch and set the remote as upstream, use
  git push --set-upstream origin implement-docs-collection
```

And we'll do exactly what `git` tells us to do:

```sh
$ git push --set-upstream origin implement-docs-collection
```

And we're done! If you go to the [branches section of the GitHub repository you're working on](https://github.com/uclaacm/teach-la-website/branches), you should see your branch there!

You can keep on adding, committing, and pushing changes as you see fit.

When you are ready to merge, you can create a **pull request**!

### Making a Pull Request

Now that you've pushed some code to the repository, you can submit what's called a **pull request**, or a request to merge your changes on one branch into another. GitHub makes this very easy, so let's navigate to your [repository's GitHub page](https://github.com/uclaacm/teach-la-website). If we're fast enough, we'll see a notification stating that our branch was recently pushed, along with a suggestion to make a pull request from it.

Go ahead and click on "create a pull request" to proceed, and you'll be presented a form to write a title for your pull request, along with a description of the finer details. If we're adding this page, then we might title it ["Implement Internal Docs Collection"](https://github.com/uclaacm/teach-la-website/pull/68). For the description, we might describe the files added and any modifications to existing code.

Once your pull request is submitted, you'll notice that you can't immediately merge it (i.e., have your changes added to the source code). This is because we enforce a mandatory code review from a maintainer prior to merging. Code review is an essential part of development. What it means is that someone who owns or manages the repository looks over your changes to make sure that nothing breaks, everything works as expected, and that - in some cases - your coding style is up to the project's standards.

### Code Review

To request review from a project maintainer, simply click on the "review" sidebar on your newly-created pull request.

![selecting a reviewer for the pull request]({{ site.baseurl }}/img/docs/dev-setup-reviewers.png)

From here, we can request the review of project maintainers or fellow peers. You'll get a notification on GitHub after a the reviewer you requested publishes their response.

A code review will appear on your pull request on GitHub as a comment, with specific comments on parts of your code. A review can either approve (ready to merge), deny (needs some changes before it is ready), or remain neutral (often an interim review) on your changes. This gives way to collaborative, iterative development.

### Merging!

Once the review process is complete and your pull request is approved, you will have the option to "merge pull request" at the bottom of the conversation thread! Once you do this, your changes will be reflected on either the `master` or `main` branch and reflected on the [live website](https://teachla.uclaacm.com) you're currently working on! 

## Next Steps

We've covered a good deal of information in this doc, but there's still a great deal of information out there. Here are some resources, along with the next steps you can take:

Next steps:
* Getting more familiar with HTML, CSS, JS
* Learning and using React
* Checking out the Teach LA Editor!

Be sure to check out our [Dev Team Resources]({{ site.baseurl }}/dev/resources) page for our list of helpful guides! 

## Appendix

### GitHub Desktop

Now, we've been doing most our code in the realm of the command line. While this is great practice, you may find yourself doing the same repetitive actions over and over again. What's more, if you're like most computer users, you are using a graphical interface! (unless you aren't, in which case this guide is likely some info you already know)

Then, it may be worth checking out [GitHub's Desktop application](https://desktop.github.com/). This is a graphical application that keeps the process of `add`ing files, `commit`ing files, `push`ing, and `pull`ing within the realm of your keyboard *and* mouse.

When you change files within a repo that is visible on GitHub Desktop, you'll see that the list of changed files automatically updates. This is equivalent to the output of `git status`.

If you want to add these files to your next commit, you can check the box next to their row, which is equivalent to `git add`.

If you want to make a commit, simply write a message in the box below your list of changed files, then press the commit button.

To `push` and `pull`, use the sync button in the interface.

### Installing WSL

The **Windows Subsystem for Linux (WSL)** is a way to run native Linux applications from within Windows, by compartmentalizing a Linux kernel on your Windows installation. It opens up the whole of native Linux tools and programs to you without sacrificing the more familiar GUI and software compatability of Windows. Here's how to install it:
* Open Powershell/Command Prompt as an administrator (`<Windows Key + X> <a>`)
* Enable WSL as a Windows feature by running: `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
* Reboot.
* Install your Linux operating system of choice from the [Windows Store](https://docs.microsoft.com/en-us/windows/wsl/install-win10#install-your-linux-distribution-of-choice) and follow along with the install instructions.
* Now you can shell into your Linux subsystem by opening a terminal and running `wsl`!

For our dev setup, you will want to install Ruby to your system. We personally recommend that you follow along with our [RVM install guide](#installing-ruby-with-rvm) in the chapter before this.

After installing WSL, you can follow along with the development environment setup instructions for any standard Linux distribution for not just the development software we use here, but for any at all!
