---
title: "Adding yourself to the team page"
---

## Table of Contents

* [Create a New Branch](#create-a-new-branch)
* [Monitoring our Changes with Jekyll](#running-jekyll-with-bundle)
* [Create Your Team Page](#make-your-changes)
* [Add, Commit, and Push](#add-commit-and-push)
* [Making a Pull Request](#making-a-pull-request)
* [Code Review](#code-review)
* [Merging!](#next-steps)

## Prerequisites

Before we get started, we highly encourage that you follow along with our [dev setup guide]({{ site.baseurl }}/docs/dev-setup) to get a working development environment set up.

## Create a New Branch

To create a branch from our **terminal**, we reference a one-liner from our [previous guide]({{ site.baseurl }}/docs/dev-setup):

```sh
$ git checkout -b my-branch-name
```

This will automatically create and **checkout** your new branch for you with the supplied name.

We will be using the terminal throughout this guide, but if you are using a graphical Git client (like [GitHub Desktop](https://desktop.github.com/)), then the steps are exactly the same. The only thing that changes is how you perform them.

## Monitoring our Changes with Jekyll

We would like to be able to monitor our changes live with Jekyll. We can do this easily with `jekyll serve`, as discussed in our [setup guide]({{ site.baseurl }}/docs/dev-setup).

```sh
$ jekyll serve
```

If Jekyll complains of lacking dependencies, or failing to compile, then you should run `bundle install`.

Now, we will have a server running locally where we can see the changes that we are making to the website reflected in our web browser.

## Create Your Team Page

Now to add yourself to our [team page]({{ site.basurl }}/team)! When you add yourself to our team, you are not only adding your name to the team page, but you are also creating your own webpage on the website, and associating yourself to any future blog posts that you might write!

All our team documents are stored within the `_team` folder from the top level of the website. To create your own, just use the first initial of your name followed by your last name. If you're familiar with Jekyll, you can use a variety of file types here so long as you include our headmatter, but for our demo, we will use `.md`. So, for our example member "Joe Bruin", we would create the file `_team/jbruin.md`!

The contents of the file are important. To start, we add what is called **head matter**, or just the important information about our member. It is encapsulated in three dashes `---` and should have the following fields: 

```md
---
firstname: "Joe"
lastname: "Bruin"
group: "member"
---
```

If we refresh the team page in our web browser, now, we should see that our name is now in the group we provided! We have four groups for team members: `member`, `alum`, `alum+`, and `board`. If you're going through this process for the first time, then you should probably use `member`.

After those last three dashes, you are free to write whatever you'd like in [Markdown formatting](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to have it generate your user page, reachable via clicking on your profile image.

## Add, Commit, and Push

Now, you are ready to add your files to the stage, commit, and push as discussed in [our setup guide]({{ site.baseurl }}/docs/dev-setup).

If the push step complains of not being able to find a remote, then you should use the long form of the push command:

```sh
$ git push origin my-branch-name
```

All this does is create the branch if it doesn't already.

Once you've pushed, your changes will be reflected on GitHub. We're now ready to create a **pull request**!

## Making a Pull Request

Now that you've pushed some code to the repository, you can submit what's called a **pull request**, or a request to merge your changes on one branch into another. GitHub makes this very easy, so let's navigate to our [repository's GitHub page](https://github.com/uclaacm/teach-la-website). If we're fast enough, we'll see a notification stating that our branch was recently pushed, along with a suggestion to make a pull request from it.

Go ahead and click on "create a pull request" to proceed, and you'll be presented a form to write a title for your pull request, along with a description of the finer details. If we're adding this page, then we might title it ["Implement Internal Docs Collection"](https://github.com/uclaacm/teach-la-website/pull/68). For the description, we might describe the files added and any modifications to existing code. But wait, we haven't finished our work yet! Why open a pull request now?

We can always update the description and title later, so it might be beneficial to submit what's called a **draft** pull request so that project maintainers have the opportunity to [review our code](#Code%20Review), and get us feedback early:

![selecting a reviewer for the pull request]({{ site.baseurl }}/img/docs/dev-setup-reviewers.png)

From here, we can request the review of project maintainers or fellow peers and see our changes merged!

## Code Review

Once your pull request is submitted, you'll notice that you can't immediately merge it (i.e., have your changes added to the source code). This is because we enforce a mandatory code review from a maintainer prior to merging. Code review is an essential part of development. What it means is that someone who owns or manages the repository looks over your changes to make sure that nothing breaks, everything works as expected, and that - in some cases - your coding style is up to the project's standards.

A code review will appear on your pull request on GitHub as a comment, with specific comments on parts of your code. A review can either approve (ready to merge), deny (needs some changes before it is ready), or remain neutral (often an interim review) on your changes.

Once the review process is complete and your pull request is approved, you will be able to merge your changes into the `master` branch! Congratulations on your first PR!

## Merging!

Once your pull request is approved, you will have the option to "merge pull request" at the bottom of the conversation thread! Once you do this, your changes will be reflected on the `master` branch, and you will be added to the team page on our [live website](https://teachla.uclaacm.com)!