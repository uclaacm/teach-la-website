---
title: "Dev Setup: In-Depth Walkthrough"
---

# Dev Setup: In-Depth Walkthrough

You want to contribute to the Teach LA Website! Awesome! Before you get started, you'll need to set up some things. Here, we'll walk you through step-by-step how to set up each component. We'll tell you how to check if you already have each component, how to briefly install it if you don't, and then show you some extra resources where you can learn more (but only if you want)!

Some of this may already be familiar for you. Feel free to skip around to the parts that are relevant.

You may ask: why is the website so complicated to set up! You may have a point, but it allows us to write features that let you update the website **without writing code**: we've written templates that generate pages, content, and complicated data relationships, so you don't have to! Hopefully, with practice, you'll find this to be not too tricky.

## Table of Contents

Oh wow, this looks like a lot! But trust us, this only takes 15 minutes, max.

* [Table of Contents](#table-of-contents)
* [GitHub](#github)
  * [Creating a GitHub Account](#creating-a-github-account)
  * [Joining our GitHub Organization](#joining-our-github-organization)
* [Finding your Shell](#finding-your-shell)
* [One-Time Setup](#one-time-setup)
  * [Cloning our Repository](#cloning-our-repository)
  * [Installing Dependencies](#installing-dependencies)
* [Development Workflow](#development-workflow)
  * [Create a New Branch](#create-a-new-branch)
  * [Running Jekyll with Bundle](#running-jekyll-with-bundle)
  * [Make your Changes](#make-your-changes)
  * [Add, Commit, and Push](#add-commit-and-push)
  * [Making a Pull Request](#making-a-pull-request)
  * [Code Review](#code-review)
* [Next Steps](#next-steps)
* [Appendix: GitHub Desktop](#appendix-github-desktop)
* [Appendix: Installing Ruby with RVM](#appendix-installing-ruby-with-rvm)

## GitHub

### Creating a GitHub Account

### Joining our GitHub Organization

*If you're part of the uclaacm org, you can skip this step.*

Great, so now you have a GitHub account. To make changes to our website, you need to be part of the [uclaacm GitHub Organization](https://github.com/uclaacm). If you're already part of our org (you can find out by checking [the people category](https://github.com/orgs/uclaacm/people)), you can skip this step.

If you're not part of our GitHub organization, you need to ask someone to add you! Your best bet is either our president or our dev team director. Reach out to them about getting permissions. Don't worry if this takes a bit of time; you can make changes to the website on your computer without being part of the organization; it's only in **uploading those changes** that you need to be part of the organization.

## Finding your Shell

*If you've used a shell before, you can skip this step.*

Now, we're going to start using our terminal! This may be a bit scary if you've never used one before, but have no fear - we're here to guide you!

Your shell depends on what operating system you're using:

* If you're on Windows, your default shell will be the "Command Prompt" application. This said, in our experience, it is much easier to develop on Windows with aid of the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about). An install guide is provided in [the appendix](#Installing-WSL).
* If you're on macOS, your default shell is the "Terminal" app.
* If you're on Linux, well, you should know what your default shell is.

Great! Once you have it open, we can move on to our next step: running the website!

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

You can keep on adding, committing, and pushing changes as you see fit. As soon as you're 100% done and ready to update the live website, you need to make a pull request.

### Making a Pull Request

Now that you've pushed some code to the repository, you can submit what's called a **pull request**, or a request to merge your changes on one branch into another. GitHub makes this very easy, so let's navigate to our [repository's GitHub page](https://github.com/uclaacm/teach-la-website). If we're fast enough, we'll see a notification stating that our branch was recently pushed, along with a suggestion to make a pull request from it.

Go ahead and click on "create a pull request" to proceed, and you'll be presented a form to write a title for your pull request, along with a description of the finer details. If we're adding this page, then we might title it ["Implement Internal Docs Collection"](https://github.com/uclaacm/teach-la-website/pull/68). For the description, we might describe the files added and any modifications to existing code. But wait, we haven't finished our work yet! Why open a pull request now?

We can always update the description and title later, so it might be beneficial to submit what's called a **draft** pull request so that project maintainers have the opportunity to [review our code](#Code%20Review), and get us feedback early:

![selecting a reviewer for the pull request]({{ site.baseurl }}/img/docs/dev-setup-reviewers.png)

From here, we can request the review of project maintainers or fellow peers and see our changes merged!

### Code Review

Once your pull request is submitted, you'll notice that you can't immediately merge it (i.e., have your changes added to the source code). This is because we enforce a mandatory code review from a maintainer prior to merging. Code review is an essential part of development. What it means is that someone who owns or manages the repository looks over your changes to make sure that nothing breaks, everything works as expected, and that - in some cases - your coding style is up to the project's standards.

A code review will appear on your pull request on GitHub as a comment, with specific comments on parts of your code. A review can either approve (ready to merge), deny (needs some changes before it is ready), or remain neutral (often an interim review) on your changes.

Once the review process is complete and your pull request is approved, you will be able to merge your changes into the `master` branch! Congratulations on your first PR!

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

[RVM](http://rvm.io/) stands for the **Ruby Version Manager**. It is a handy shell script that lets us keep multiple versions of the Ruby interpreter on our computer without breaking any existing ones! Following along with the installation guide available on [their website](http://rvm.io/rvm/install) is usually enough, but there are a few hitches you might run into along the way. Here's our version of the installation guide:

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

# load rvm
source ${HOME}/.rvm/scripts/rvm
```

Now, log out and back in to your terminal (close and reopen it, if using a GUI), and choose a version of Ruby to install and use:

```sh
rvm install 2.7.3
rvm use 2.7.3
```

You're all set for Ruby development!

### Installing WSL

The **Windows Subsystem for Linux (WSL)** is a way to run native Linux applications from within Windows, by compartmentalizing a Linux kernel on your Windows installation. It opens up the whole of native Linux tools and programs to you without sacrificing the more familiar GUI and software compatability of Windows. Here's how to install it:
* Open Powershell as an administrator (`<Windows Key + X> <a>`)
* Enable WSL as a Windows feature by running: `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
* Reboot.
* Install your Linux operating system of choice from the [Windows Store](https://docs.microsoft.com/en-us/windows/wsl/install-win10#install-your-linux-distribution-of-choice) and follow along with the install instructions.
* Now you can shell into your Linux subsystem by opening a terminal and running `wsl`!

After installing WSL, you can follow along with the development environment setup instructions for any standard Linux distribution for not just the development software we use here, but for any at all!