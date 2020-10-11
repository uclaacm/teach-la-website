---
title: "Dev Setup: In-Depth Walkthrough"
---

# Dev Setup: In-Depth Walkthrough

You want to contribute to the Teach LA Website! Awesome! Before you get started, you'll need to set up some things. Here, we'll walk you through step-by-step how to set up each component. We'll tell you how to check if you already have each component, how to briefly install it if you don't, and then show you some extra resources where you can learn more (but only if you want)!

Some of this may already be familiar for you. Feel free to skip around to the parts that are relevant.

You may ask: why is the website so complicated to set up! You may have a point, but it allows us to write features that let you update the website **without writing code**: we've written templates that generate pages, content, and complicated data relationships, so you don't have to! Hopefully, with practice, you'll find this to be not too tricky.

## Table of Contents

* [Table of Contents](#table-of-contents)
* [Navigating your Shell](#navigating-your-shell)
* [GitHub](#github)
  * [Creating a GitHub Account](#creating-a-github-account)
  * [Joining our GitHub Organization](#joining-our-github-organization)
* [Installing Git](#installing-git)
  * [If you're using WSL or Linux](#if-youre-using-wsl-or-linux)
  * [If you're using OSX](#if-youre-using-osx)
* [One-Time Setup](#one-time-setup)
  * [Cloning our Repository](#cloning-our-repository)
  * [Installing Dependencies](#installing-dependencies)
* [Development Workflow](#development-workflow)
  * [Create a New Branch](#create-a-new-branch)
  * [Running Jekyll with Bundle](#running-jekyll-with-bundle)
  * [Make your Changes](#make-your-changes)
  * [Add, Commit, and Push](#add-commit-and-push)
* [Next Steps](#next-steps)
* [Appendix](#appendix)
  * [GitHub Desktop](#github-desktop)
  * [Installing Ruby with RVM](#installing-ruby-with-rvm)
  * [Installing WSL](#installing-wsl)

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
tla@acm:/my/path/to/teach-la-website$ git --version
git version 2.25.1
```

Don't worry if your prompt looks a little different. What we care about is the version output here.

After this, we are ready to get started.

## One-Time Setup

These next steps take a few minutes of time, but you *only need to do them once*.

### Cloning our Repository

Our first step is to "clone" the repository, which means grabbing a local copy of the website to make changes to. We do that with the `git` command:

```sh
$ git clone https://github.com/uclaacm/teach-la-website.git
```

What this does is grab the copy of our website located on GitHub, and creates a local copy on our computer.

Once that command is done, a new folder will have been created. We can check if it's there with the `ls` command:

```sh
$ ls
js-backend       teach-la-website # <-- there it is!
gradient-descent-visualiser  network-tarines
```

We can then enter the directory with the `cd` command, so we can do some more things.

```sh
$ cd teach-la-website
```

And now we've installed a local copy of our website! But we're not done installing yet...

### Installing Dependencies

Our website is built with [Jekyll](https://jekyllrb.com), a "static-site generator". Really, it's a piece of software (written in Ruby) that helps us make our website. But, we have to install it first!

Almost all computers have ruby installed. To double-check, you can run the following command in your shell:

```sh
$ ruby -v
ruby 2.7.1p83 (2020-03-31 revision a0c7c23c9c) [x86_64-darwin19]
```

If you don't have Ruby on your system, you can check the [appendix entry: installing ruby with rvm](#appendix-installing-ruby-with-rvm).

First, we'll install a "helper" tool called `bundler` that lets us install libraries easily.

```sh
$ gem install bundler
```

If this command doesn't execute properly, then there's two things you can do:
1. Run `sudo gem install bundler` instead.
2. Install RVM [using our appendix entry](#appendix-installing-ruby-with-rvm) and then re-run the command.

Then, we'll run a new command, called `bundle`. It will install all of our dependencies.

*Note: this might take a few minutes, depending on your internet connection and computer.*

```sh
$ bundle
```

Great! That's it, and we're ready to start actually making changes!

One last tidbit: every now and then, we'll make changes that update our dependencies. The command line will tell you to run `bundle` again (just like we did), so you should do just that.

## Development Workflow

Okay, so how do we make changes to our site? We'll walk you through what you need to do to get your site up and running.

### Create a New Branch

We want to make sure that changes we make don't impact other people, or at least not until those changes are done. Out of courtesy, we'll develop our changes on our own "branch", which is a version of our code.

The default branch is called `master`, and it contains the code that goes live on [teachla.uclaacm.com](https://teachla.uclaacm.com). We don't want to touch that just yet, so we're going to make our own branch!

We can check what branch we're on with the `git branch` command:

```sh
$ git branch
  for-educators
* master
  working-on-new-ai-ml-collection
```

The `*` means that we're currently on master. Let's make a new branch from master, with the `git checkout -b` command:

```sh
$ git checkout -b my-new-feature
$ git branch
  for-educators
  master
* my-new-feature
  working-on-new-ai-ml-collection
```

Great! Now we're ready to make our changes.

### Running Jekyll with Bundle

It turns out, we need to "compile" our website. Weird, right? Let's do it, with the `bundle exec jekyll serve` command; you'll get something like this:

```sh
$ bundle exec jekyll serve
Configuration file: /Users/matt/code/teach-la-website/_config.yml
            Source: /Users/matt/code/teach-la-website
       Destination: /Users/matt/code/teach-la-website/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 0.17 seconds.
 Auto-regeneration: enabled for '/Users/matt/code/teach-la-website'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

In your browser, visit what follows the "Server address" line, which is almost always [http://127.0.0.1:4000/](http://127.0.0.1:4000/). You should see a copy of your site up and running!

### Make your Changes

Now, you just need to make some changes.

Open up the `teach-la-website` folder in your favourite text editor (good free options are [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/),. or [Atom](https://atom.io/), but you can use whatever you like).

Then, poke around the files and make your changes. Not sure where to make the changes? That's where our other pages help you out!

One quick thing: every time you save a file, Jekyll is smart enough to auto-rebuild the site! So, after you make a change, refresh the site in your browser, and you should see your change reflected!

And that's it! You've made some changes!

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

And we're done! If you go to the [branches section of our GitHub repository](https://github.com/uclaacm/teach-la-website/branches), you should see your branch there!

You can keep on adding, committing, and pushing changes as you see fit.

When you are ready to merge, then you can create a **pull request** -- something we cover in [our next guide]({{ site.baseurl }}/docs/static-setup)!

## Next Steps

We've covered a good deal of information in this doc, but there's still a great deal of information out there. Here are some resources, along with the next steps you can take:

Next steps:
* Getting more familiar with HTML, CSS, JS
* Learning and using React
* Checking out the Teach LA Editor!

Resources:
* [React.js Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [Teach LA's Learning Labs Crash Course YouTube Series](https://www.youtube.com/channel/UCwTqwgA4thysNbB2kNYsCIw)

## Appendix

### GitHub Desktop

Now, we've been doing most our code in the realm of the command line. While this is great practice, you may find yourself doing the same repetitive actions over and over again. What's more, if you're like most computer users, you are using a graphical interface! (unless you aren't, in which case this guide is likely some info you already know)

Then, it may be worth checking out [GitHub's Desktop application](https://desktop.github.com/). This is a graphical application that keeps the process of `add`ing files, `commit`ing files, `push`ing, and `pull`ing within the realm of your keyboard *and* mouse.

When you change files within a repo that is visible on GitHub Desktop, you'll see that the list of changed files automatically updates. This is equivalent to the output of `git status`.

If you want to add these files to your next commit, you can check the box next to their row, which is equivalent to `git add`.

If you want to make a commit, simply write a message in the box below your list of changed files, then press the commit button.

To `push` and `pull`, use the sync button in the interface.

### Installing Ruby with RVM

[RVM](http://rvm.io/) stands for the **Ruby Version Manager**. It is a handy shell script that lets us keep multiple versions of the Ruby interpreter on our computer without breaking any existing ones! The only catch? It only works on UNIX-based operating systems. That means that it won't work on Windows by default, but it **will** work on WSL.

Following along with the installation guide available on [their website](http://rvm.io/rvm/install) is usually enough, but there are a few hitches you might run into along the way. Here's our version of the installation guide:

First we need to add the PGP keys of the project maintainer to ensure that the installer we download isn't malicious. We can do this with:

```sh
gpg --keyserver hkp://pool.sks-keyservers.net \
  --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 \
  7D2BAF1CF37B13E2069D6956105BD0E739499BDB
```

This assumes that you have `gpg` installed on your device. It is standard on OSX (Macs), and *highly recommended* on Linux distributions. If you don't have `gpg` installed for some reason on your system, you likely know what you are doing. To reinstall it, use the packages provided on the [GnuPG](https://gnupg.org/download/) website.

Now, we can install RVM by running the following:

```sh
\curl -sSL https://get.rvm.io | bash -s stable --ruby
```

Following installation, you should see some output like:

```sh
  * To start using RVM you need to run `source /home/myuser/.rvm/scripts/rvm`
    in all your open shell windows, in rare cases you need to reopen all shell windows.
```

If you see something else, then the installation may have went haywire. No worries! Most issues can be resolved by reinstalling RVM using the steps above. If that doesn't work, then try clearing your existing installation of RVM with `rm -rf ~/.rvm` and then reinstalling.

For RVM to work properly, we are required to place its binaries at the first position in our `$PATH` environment variable, and to run `source /home/myuser/.rvm/scripts/rvm` to get it to work properly. This can be solved by appending lines to our `.bashrc` (or `.zshrc`) with some simple shell commands:

```sh
# prepend to PATH:
echo "export PATH=${HOME}/.rvm/bin:${PATH}" >> ${HOME}/.bashrc

# load rvm into every shell
echo "source ${HOME}/.rvm/scripts/rvm" >> ${HOME}/.bashrc

# load rvm
source ${HOME}/.rvm/scripts/rvm
```

Now, log out and back in to your terminal (close and reopen it, if using a GUI), and choose a version of Ruby to install and use:

```sh
rvm install 2.7.0
rvm use 2.7.0
```

If either of these commands output any kind of error, then you should retry our installation guide.

You're all set for Ruby development! If you followed this chapter while you were going through the docs for the first time, then you should be able to resume your setup process from [the installing dependencies header](#installing-dependencies).

### Installing WSL

The **Windows Subsystem for Linux (WSL)** is a way to run native Linux applications from within Windows, by compartmentalizing a Linux kernel on your Windows installation. It opens up the whole of native Linux tools and programs to you without sacrificing the more familiar GUI and software compatability of Windows. Here's how to install it:
* Open Powershell/Command Prompt as an administrator (`<Windows Key + X> <a>`)
* Enable WSL as a Windows feature by running: `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
* Reboot.
* Install your Linux operating system of choice from the [Windows Store](https://docs.microsoft.com/en-us/windows/wsl/install-win10#install-your-linux-distribution-of-choice) and follow along with the install instructions.
* Now you can shell into your Linux subsystem by opening a terminal and running `wsl`!

For our dev setup, you will want to install Ruby to your system. We personally recommend that you follow along with our [RVM install guide](#installing-ruby-with-rvm) in the chapter before this.

After installing WSL, you can follow along with the development environment setup instructions for any standard Linux distribution for not just the development software we use here, but for any at all!