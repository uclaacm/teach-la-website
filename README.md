# Teach LA Website

[![Build Status](https://travis-ci.com/uclaacm/teach-la-website.svg?branch=master)](https://travis-ci.com/uclaacm/teach-la-website)

Heya there, this is a work-in-progress website for ACM Teach LA! It's goal is to give Teach LA a more formal online presence, and to create a one-stop shop for prospective tutors and schools to get more information about us!

This website is built with [Jekyll](https://jekyllrb.com) and elements from [ACM Design's Style Guide](https://github.com/uclaacm/Styleguide), with some implementation details taken from [ACM's main website](https://github.com/uclaacm/website). We build this website with Travis CI (and plan to add some `rake` testing soon), and deploy it on GitHub Pages.

*Note:* we've elected to use Travis to auto-build and deploy to GitHub Pages rather than use the `github-pages` gem. This allows us a bit more fine-tuning in exactly what is deployed, and allows for more modularity in the future!

## Development Setup

To get a copy of this website runniny locally on your machine, you'll need a copy of this repo, [Ruby](https://www.ruby-lang.org/en/), and access to your system's terminal.

*Note:* we recommend using [rvm](https://rvm.io/) instead of your system ruby.

First, let's install [Bundler](https://bundler.io/), a gem environment manager for ruby.

```bash
gem install bundler
```

Then, inside our project, run

```bash
bundle
```

This should install all of our RubyGems dependencies!

Finally, run:

```bash

$ bundle exec jekyll serve
Configuration file: /Users/malsf21/code/teach-la-website/_config.yml
            Source: /Users/malsf21/code/teach-la-website
       Destination: /Users/malsf21/code/teach-la-website/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.219 seconds.
 Auto-regeneration: enabled for '/Users/malsf21/code/teach-la-website'
    Server address: http://127.0.0.1:4000/teach-la-website/
  Server running... press ctrl-c to stop.

```

Visit whatever follows the server address line in your browser, which is usually [http://127.0.0.1:4000/teach-la-website/](http://127.0.0.1:4000/teach-la-website/).

If you run into any issues, please let us know on our [issues tracker](https://github.com/uclaacm/teach-la-website)!
