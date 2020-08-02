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

* If you're on Windows...
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

### Code Review

## Next Steps

## Appendix: GitHub Desktop

## Appendix: Installing Ruby with RVM
