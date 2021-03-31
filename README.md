# Teach LA Website

![Test Jekyll Build](https://github.com/uclaacm/teach-la-website/workflows/Test%20Jekyll%20Build/badge.svg)
[![Site Up Status](https://img.shields.io/website?url=https%3A%2F%2Fteachla.uclaacm.com)](https://teachla.uclaacm.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d79c1e55-71c6-45c5-8938-f0ffe477e8a3/deploy-status)](https://app.netlify.com/sites/unruffled-perlman-fe51d2/deploys)

Heya there, this is ACM Teach LA's website! It's goal is to give Teach LA a more formal online presence, and to create a one-stop shop for prospective tutors and schools to get more information about us!

This website is built with [Jekyll](https://jekyllrb.com), with some component implementations taken from [ACM's main website](https://github.com/uclaacm/website) (conforming to [ACM Design's Style Guide](https://github.com/uclaacm/Styleguide)). We build and test this website with [GitHub Actions](https://github.com/features/actions), and deploy it on [Netlify](https://www.netlify.com/).

## Development Setup

To get a copy of this website running locally on your machine, you'll need [Ruby](https://www.ruby-lang.org/en/), a copy of this repo, and access to your system's shell/terminal.

*Note:* we recommend using [rvm](https://rvm.io/) instead of your system ruby; it makes life easier :smile:!

First, let's install [Bundler](https://bundler.io/), a gem environment manager for ruby. Type this anywhere in your shell:

```bash
$ gem install bundler
...
```

Then, let's clone our project with git, and install our dependencies!

```bash
$ git clone https://github.com/uclaacm/teach-la-website.git
$ cd teach-la-website
$ bundle
...
```

This should install all of our RubyGems dependencies! Note that we've committed a `Gemfile.lock`, so you should get a working set of gems.

Finally, run:

```bash

$ bundle exec jekyll serve
Configuration file: /Users/matt/code/tla/static/_config.yml
            Source: /Users/matt/code/tla/static
       Destination: /Users/matt/code/tla/static/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.17 seconds.
 Auto-regeneration: enabled for '/Users/matt/code/tla/static'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.

```

Visit whatever follows the server address line in your browser, which is usually [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

If you run into any issues, please let us know on our [issues tracker](https://github.com/uclaacm/teach-la-website)!

## Contribution Workflow

Want to make a change to the website? Great! Here are the steps:

1. Either make a new branch or a fork of this repository. `master` is a protected branch, **so you cannot push to it**.
2. Follow the instructions in "Development Setup" above. If you're on a fork, replace the URL with the fork's URL; if you're on a different branch, check it out using `git checkout`.
3. Make your changes!
4. **Before you push**, make sure your app builds with `bundle exec jekyll build`. If there are any errors, our CI/CD service will **reject your build**.
5. Once you're ready, stage and commit your changes!
6. Make a [pull request](https://github.com/uclaacm/teach-la-website/pulls) with your changes, and let someone on the dev team know.
7. If your code passes code review, we'll merge it into `master`. Congratulations! If you'd like, it's now safe to delete your branch/fork.

## Adding Yourself to the Teams Page

[Moved to here](https://github.com/uclaacm/teach-la-website/blob/master/_team/README.md).
