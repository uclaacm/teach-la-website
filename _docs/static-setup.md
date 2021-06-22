---
title: "Website Setup"
sidebar-title: "Website Setup"
---

# Website Setup: In-Depth Walkthrough
{:.no_toc}

## Table of Contents
{:.no_toc}
* TOC
{:toc}

## One-Time Setup

These next steps take a few minutes of time, but you *only need to do them once*.

### Prerequisites

Before we get started, make sure that you've already followed along with our [dev setup guide]({{ site.baseurl }}/docs/dev-setup) to get your terminal, git, and GitHub set-up and to understand what all the `git` commands we'll run do! From here, we'll walk you through step-by-step on the components necessary to work on our website and how to set up each component. We'll tell you how to check if you already have each component, how to briefly install it if you don't, and then show you some extra resources where you can learn more (but only if you want)!

You may ask: why is the website so complicated to set up! You may have a point, but it allows us to write features that let you update the website **without writing code**: we've written templates that generate pages, content, and complicated data relationships, so you don't have to! Hopefully, with practice, you'll find this to be not too tricky.

### Cloning Our Repository

You can review what `git clone` does in our [Dev Setup Guide]("{{site.baseurl}}/docs/dev-setup") but if you want to get our website's repository set-up on our machine you can just run the following `git` command:

```sh
$ git clone https://github.com/uclaacm/teach-la-website.git
```

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
ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [x86_64-darwin20]
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

**And now you're ready to start making some changes!** 

## Your First PR: Adding To The Team Page

Now to add yourself to our [team page]({{ site.basurl }}/team)! When you add yourself to our team, you are not only adding your name to the team page, but you are also creating your own webpage on the website, and associating yourself to any future blog posts that you might write!

First, checkout a new branch from the repository:

```sh
$ git checkout -b my-branch-name    # create a new branch and check it out
$ jekyll serve                      # set up our dev server
```

All our team documents are stored within the `_team` folder from the top level of the website. To create your own, just use the first initial of your name followed by your last name. If you're familiar with Jekyll, you can use a variety of file types here so long as you include our headmatter, but for our demo, we will use `.md`. So, for our example member "Joe Bruin", we would create the file `_team/jbruin.md`!

The contents of the file are important. To start, we add what is called **head matter**, or just the important information about our member. It is encapsulated in three dashes `---` and should have the following fields at a **minimum**: 

```md
---
name: "Joe Bruin"
group: "member"
---
```

If we refresh the team page in our web browser, now, we should see that our name is now in the group we provided, and clicking on our image navigates to a barebones team page. We have four groups for team members: `member`, `alum`, `alum+`, and `board`. If you're going through this process for the first time, then you should probably use `member`.

The full list of fields can be found in our [team README](https://github.com/uclaacm/teach-la-website/blob/master/_team/README.md).

### Making the page your own

What comes after the head matter? Why, the content! After those last three dashes, you are free to write whatever you'd like in [Markdown formatting](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to have it generate your user page, which you can reach by either clicking on your profile image on the team page, or by clicking on your name on a blog post you authored.

Here's an example team page for Josie Bruin:

```md
---
name: Josie  Bruin
pronouns: "they/them"
group: alum+
graduating_year: 1923
img: josiebruin.png

github: uclaacm
email: josie@ucla.edu

links:
  - name: My personal website
    href: https://ucla.edu
---

### Hello, I am Josie Bruin.

I worked with Teach LA for every year of my college experience, and it was phenomenal!

### My Favorite Classes at UCLA

* COM SCI 31, 32, and 33
* COM SCI 199
```

This renders into a clean page:

![josie bruin's team page]({{ site.baseurl }}/img/docs/sample_team.png)

## Add, Commit, Push, Pull Request, Code Review, Merge

Now, you are ready to add your files to the stage, commit, push, make a pull request, request a code review, and merge your changes as discussed in [our setup guide]({{ site.baseurl }}/docs/dev-setup).

Once you do this, your changes will be reflected on the `master` branch, and you will be added to the team page on our [live website](https://teachla.uclaacm.com)! Congratulations on your first PR!

If the push step complains of not being able to find a remote, then you should use the long form of the push command:

```sh
$ git push origin my-branch-name
```

All this does is create the branch if it doesn't already.

## Appendix

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
rvm install 3.0.0
rvm use 3.0.0
```

If either of these commands output any kind of error, then you should retry our installation guide.

You're all set for Ruby development! If you followed this chapter while you were going through the docs for the first time, then you should be able to resume your setup process from [the installing dependencies header](#installing-dependencies).

