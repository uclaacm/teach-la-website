---
title: "Project Setup: Extra Installations"
sidebar-title: "Project Setup"
---

# Project Setup: Extra Installations
{:.no_toc}

So, you want to work on our cool projects like the Editor or a Learning Lab! We're excited to have you on our team, but there's a few things you have to setup before you can jump right into working on our projects!

## Table of Contents
{:.no_toc}
* TOC
{:toc}

## Initial Setup

First, make sure that you have setup your GitHub account and Git on your machine by following the first steps of our [dev setup guide]({{ site.baseurl }}/docs/dev-setup).

Our projects require a few more things we have to set-up as well, so be sure to head back to this page once you've set-up git and GitHub!

## Installing node and npm

For our projects, we use JavaScript and Typescript to handle website logic, so we'll also need package managers to handle all our JavaScript dependencies. There are two primary package managers that we use, the first being the Node Package Manager, or npm. npm actually comes with `Node.js`, a JavaScript tool that we also need which is used to help build network applications, so let's check if we have it installed already!

Try running:

```sh
$ node -v
```

If you already have node installed in your machine, you should see some
numbers in the form of `vXX.XX.X` which means that you already have node (and consequently npm) installed, and don't need to do anything else!

If you see something along the lines of

```
command not found: node
```

then you should follow the instructions on node's official site [here](https://nodejs.org/en/download/) to get it installed.

If you use WSL instead, you can follow these special instructions [here](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl).

To check that node has been properly installed on your machine, just run:

```sh
$ node -v
```

And you should be all set for using npm!

## Installing yarn

The second package manager that we use for our projects, `yarn`, is another application manager similar to npm that was launched by Facebook in 2016! A lot of developers prefer yarn over npm due to its improved performance and speed. If you want to see the major differences between yarn and npm, you can check out this [article](https://www.whitesourcesoftware.com/free-developer-tools/blog/npm-vs-yarn-which-should-you-choose/) on it.

First, check to see if you have yarn already installed by running

```sh
$ yarn --version
```

If you get numbers in the form of `X.XX.XX` then you have yarn already installed and are good to go!

Otherwise, if you get

```
command not found: yarn
```

then we can actually install yarn with our trusty npm that we just installed above!

After running:

```sh
$ npm install --global yarn
```

you can check if you have yarn properly installed by running

```sh
$ yarn --version
```

And you should be all set for using yarn!
